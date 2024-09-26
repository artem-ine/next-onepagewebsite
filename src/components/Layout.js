import { Suspense } from "react";
import Header from "./Header";

export default function Layout({ locales, navigation, children }) {
  return (
    <div className="text-slate-800">
      <Suspense>
        <Header locales={locales} navigation={navigation} />
        <main>{children}</main>
      </Suspense>
    </div>
  );
}