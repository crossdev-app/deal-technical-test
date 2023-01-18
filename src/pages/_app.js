// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "src/styles/custom_style/custom_style.css";
import store from "../store/store";
import { Nunito_Sans } from "@next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "300", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
