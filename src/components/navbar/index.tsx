// https://nextjs.org/docs/api-reference/next/link

import Link from "next/link";
import ColorToggleButton from "../ColorToggleButton";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/clipboard">clipboard</Link>
        </li>
        <li>
          <Link href="/hello-page">hello-page</Link>
        </li>
        <li>
          <Link href="/nextjs">nextjs</Link>
        </li>
      </ul>
      <ColorToggleButton />
    </header>
  );
}

export default Navbar;
