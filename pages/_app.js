import "@/styles/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
