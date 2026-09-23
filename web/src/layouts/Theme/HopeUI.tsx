import { HopeProvider } from "@hope-ui/solid";
import theme from "@config/hopeui";

export default function HopeUI({ children }) {
  return <HopeProvider config={theme}>{children}</HopeProvider>;
}
