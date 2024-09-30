import { Suspense } from "react";
import Header from "./Header";

export default function Layout({ locales, navigation, children, lang }) {
  return (
    <div className="text-slate-800">
      <Header locales={locales} navigation={navigation} lang={lang} />
        <main>{children}</main>
    </div>
  );
}