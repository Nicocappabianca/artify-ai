import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <nav>
      <ul className="space-x-4 hidden sm:flex">
        <li>
          <Link href="/">Generate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
