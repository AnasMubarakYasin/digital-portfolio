import type { ParentComponent } from "solid-js";
import { Authentication, Data, CustomerSignUp, set_store, get_store } from "@stores/authentication";
import { createSignal, createEffect, createResource, createContext, useContext } from "solid-js";

const Context = createContext<Authentication>();
export function use_authentication() {
  return useContext(Context);
}

interface AuthenticationProps {
  guest?: boolean
  redirect?: string
  home?: string
}

export const AuthenticationProvider: ParentComponent<AuthenticationProps> = function (props) {
  const [source_cs_signup, cs_signup] = createSignal<CustomerSignUp | undefined>();
  const [source_cs_signin, cs_signin] = createSignal<CustomerSignUp | undefined>();
  const [signup_customer] = createResource(source_cs_signup, fetcher_cs_signup);
  const [signin_customer] = createResource(source_cs_signin, fetcher_cs_signin);
  const ctx_val: Authentication = {
    data: get_store(),
    customer: {
      dashboard_uri: "",
      signup_res: signup_customer,
      signin_res: signin_customer,
      signup: cs_signup,
      signin: cs_signin,
      signout: cs_signout,
      dashboard: dashboard,
    }
  }
  async function cs_signout() {
    set_store({})
    location.assign(props.home ?? "/")
  }
  async function fetcher_cs_signup(data) {
    const res = await fetch("/api/account/customer/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const account = await res.json();
    return {
      account,
      token: res.headers.get("WWW-Authenticate") ?? undefined,
    } as Data;
  }
  async function fetcher_cs_signin(data) {
    const res = await fetch("/api/account/customer/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const account = await res.json();
    return {
      account,
      token: res.headers.get("WWW-Authenticate") ?? undefined,
    } as Data;
  }
  async function dashboard() {
    location.assign(`/user/${ctx_val.data.account.name}/profile`)
  }
  createEffect(() => {
    switch (signup_customer.state) {
      case "errored":
        break;
      case "ready":
        if (!signup_customer.latest) break
        set_store(signup_customer.latest)
        location.assign(props.home ?? "/")
        break;

      default:
        break;
    }
  });
  createEffect(() => {
    switch (signin_customer.state) {
      case "errored":
        break;
      case "ready":
        if (!signin_customer.latest) break
        set_store(signin_customer.latest)
        location.assign(props.home ?? "/")
        break;

      default:
        break;
    }
  });
  if (!props.guest && !ctx_val.data?.token) {
    location.assign(props.redirect ?? "/user/signup")
    return (<></>)
  }
  return (
    <Context.Provider value={ctx_val}>
      {props.children}
    </Context.Provider>
  );
}
