import type { Resource, Setter } from "solid-js";
import type { MapStore } from "nanostores";
import { createStore } from "solid-js/store";
import { map } from "nanostores";
import { useStore } from "@nanostores/solid";

export interface Authentication {
  data?: Data;
  customer: {
    dashboard_uri: string;
    signup_res: Resource<Data>;
    signin_res: Resource<Data>;
    signup: Setter<CustomerSignUp>;
    signin: Setter<CustomerSignIn>;
    signout: () => Promise<any>;
    dashboard: () => Promise<any>;
  };
}
export interface Data {
  account?: Account;
  token?: string;
}
export interface Account {
  id: string;
  name: string;
  email: string;
}
export interface Customer extends Account {}
export interface CustomerSignUp {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  tos: boolean;
}
export interface CustomerSignIn {
  email: string;
  password: string;
}

export function set_store(value: Data) {
  localStorage.setItem("data", JSON.stringify(value));
}
export function get_store(): Data {
  const value = localStorage.getItem("data");
  if (!value) {
    return {};
  }
  return JSON.parse(value);
}
// export const [store, set_store] = createStore<Data>({});
// const store: MapStore<Data> = map({});
// export function set_store(data: Data) {
//   store.set(data);
// }
// export function use_store() {
//   return useStore(store);
// }
