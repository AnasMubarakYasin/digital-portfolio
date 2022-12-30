import { ParentComponent, createSignal, onMount, Show } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";
import { Motion, Presence } from "@motionone/solid";
import theme from "@config/theme/suid";

const Content: ParentComponent = function ({ children }) {
  const [toggle, setToggle] = createSignal(true);
  onMount(() => {
    for (const link of document.links) {
      if (link.rel == "external") continue;
      link.addEventListener(
        "click",
        (event) => {
          setToggle(false);
        },
        { capture: true }
      );
    }
  });
  return (
    <ThemeProvider theme={theme.dark}>
      <Presence exitBeforeEnter>
        <Show when={toggle()}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35 }}
            style={{
              "max-width": "100vw",
              "min-height": "100vh",
              display: "grid",
              "align-content": "flex-start",
            }}
          >
            {children}
          </Motion.div>
        </Show>
      </Presence>
    </ThemeProvider>
  );
};

export default Content;
