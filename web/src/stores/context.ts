import type { MapStore } from 'nanostores';
import { atom, map } from 'nanostores';

export interface Context {
  logo: string;
  name: string;
  title: string;
  description: string;
  path: string;
  lang: string;
  color: string;
  token?: string;
}
export const context: MapStore<Context> = map({
  logo: "",
  name: "",
  title: "",
  description: "",
  path: "/",
  lang: "en",
  color: "",
});
export function set_ctx(ctx?: Partial<Context>) {
  ctx && context.set(ctx as Context)
}
