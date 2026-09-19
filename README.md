<p align="center"><a href="https://bladerlaiga.my.id" target="_blank"><img src="https://avatars.githubusercontent.com/u/61192949" width="320" alt="Bladerlaiga Logo"></a></p>

## About Digital Portfolio

Digital Portfolio is a web application to show and manage your Portfolio.

## Usage

The application use microservices architecture, so you need terminal for each command.

### Install



### Build

`go build -o instance digital-portfolio/instance`  
`go build -o gateway digital-portfolio/gateway`  
`go build -o auth digital-portfolio/auth`  
`go build -o service/account digital-portfolio/service/account`  
`go build -o service/profile digital-portfolio/service/profile`  
`go build -o storage digital-portfolio/storage`  
`cd instance && go run database/seeder/main.go --mode=up`  
`cd web && bun run build`

to run.

`./instance/instance`  
`./gateway/gateway`  
`./auth/auth`  
`./service/account/account`  
`./service/profile/profile`  
`./storage/storage`  
`cd web && bun start`

then open http://localhost:3901/

## Contributing

## Code of Conduct

## Security Vulnerabilities

## License

The Digital Portfolio is licensed under the [MIT license](https://opensource.org/licenses/MIT).
