import { createEffect, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

export default function T() {
  const [show, set_show] = createSignal(false);
  createEffect(() => {
    setTimeout(() => {
      set_show(true);
    }, 2000);
  });
  return (
    <Transition
      onEnter={(el, done) => {
        const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 600,
        });
        a.finished.then(done);
      }}
      onExit={(el, done) => {
        const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 600,
        });
        a.finished.then(done);
      }}
    >
      {show() && <div>Hello</div>}
    </Transition>
  );
}
