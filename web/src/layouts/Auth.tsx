import type { ParentComponent } from "solid-js";
import { Show, createEffect } from "solid-js";
import { useStore } from '@nanostores/solid';
import { Context, context } from '@stores/context';
import Unauthenticate from "./Error/Unauthc";

export interface AuthProps { }

const Auth: ParentComponent<AuthProps> = function ({ children }) {
  const get_ctx = useStore(context);
  createEffect<Context>((context) => {
    if (!context.token) {
      location.assign("/user/signup")
    }
    return context
  }, get_ctx())
  return (
    <Show when={get_ctx().token} fallback={<Unauthenticate></Unauthenticate>}>
      {children}
    </Show>
  );
};

export default Auth;
