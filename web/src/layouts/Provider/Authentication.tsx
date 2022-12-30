// import { Authentication as ContextValue, Data, Context, CustomerSignUp, store, set_store } from "@stores/authentication"
// import { ParentComponent, createEffect, createResource, createSignal } from "solid-js";

// interface AuthenticationProps {
//   guest?: boolean
//   redirect?: string
//   home?: string
// }

// const Authentication: ParentComponent<AuthenticationProps> = function ({ guest, redirect, home, children }) {
//   const [source_cs_signup, cs_signup] = createSignal<CustomerSignUp | undefined>();
//   const [customer] = createResource(source_cs_signup, fetcher_cs_signup);
//   const ctx_val: ContextValue = {
//     customer: {
//       signup_res: customer,
//       signup: cs_signup
//     }
//   }
//   async function fetcher_cs_signup(data) {
//     const res = await fetch("/api/account/customer/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     const account = await res.json();
//     return {
//       account,
//       token: res.headers.get("WWW-Authenticate") ?? undefined,
//     } as Data;
//   }
//   createEffect(() => {
//     switch (customer.state) {
//       case "refreshing":
//         set_store(customer.latest);
//         location.assign(home ?? "/")
//         break;

//       default:
//         break;
//     }
//   });
//   if (!guest) {
//     createEffect((token) => {
//       if (!token) {
//         location.assign(redirect ?? "/user/signup")
//       }
//       return token
//     }, store.token)
//   }
//   console.log(ctx_val)
//   return (
//     <Context.Provider value={ctx_val}>
//       {children}
//     </Context.Provider>
//   );
// }
// export default Authentication
