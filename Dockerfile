FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Basic dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    wget \
    git \
    ca-certificates \
    supervisor \
    gnupg \
    && rm -rf /var/lib/apt/lists/*


# =========================================================
# Go
# =========================================================

ARG GO_VERSION=1.25.1

RUN wget -q https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go${GO_VERSION}.linux-amd64.tar.gz \
    && rm go${GO_VERSION}.linux-amd64.tar.gz

ENV PATH="/usr/local/go/bin:${PATH}"


# =========================================================
# Bun
# =========================================================

ENV BUN_INSTALL=/root/.bun
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

RUN curl -fsSL https://bun.com/install | bash

# =========================================================
# MongoDB
# =========================================================

RUN curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc \
    | gpg --dearmor -o /usr/share/keyrings/mongodb-server-8.0.gpg

RUN echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
    https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" \
    > /etc/apt/sources.list.d/mongodb-org-8.0.list

RUN apt-get update && apt-get install -y mongodb-org \
    && rm -rf /var/lib/apt/lists/*


# =========================================================
# Application
# =========================================================

WORKDIR /app

COPY . .


# Bun dependencies
RUN cd web && bun install


# Go dependencies
RUN cd instance && go mod download
RUN cd auth && go mod download
RUN cd gateway && go mod download
RUN cd service/account && go mod download
RUN cd service/profile && go mod download
RUN cd storage && go mod download



# =========================================================
# Build applications
# =========================================================

RUN cd web && bun run build

RUN cd instance && \
    go build -o bin/instance

RUN cd auth && \
    go build -o bin/auth

RUN cd gateway && \
    go build -o bin/gateway

RUN cd service/account && \
    go build -o bin/account

RUN cd service/profile && \
    go build -o bin/profile

RUN cd storage && \
    go build -o bin/storage



# =========================================================
# Supervisor
# =========================================================

COPY supervisord.conf /etc/supervisor/conf.d/app.conf


# MongoDB
# VOLUME ["/app/mongodb", "/app/storage/files"]

EXPOSE 3901 3902 3903 3904 3905 3906 3907 27017

CMD ["/usr/bin/supervisord", "-n"]