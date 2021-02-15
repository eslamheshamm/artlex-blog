import Meta from "./meta";
import NavBar from "./navbar";
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <body className="min-h-full bg-accent font-display">
        <NavBar />
        <main>{children}</main>
      </body>
    </>
  );
}
