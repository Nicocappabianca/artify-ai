import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto py-5">
      <Link href="/" className="font-bold text-xl">
        Artify
      </Link>
    </header>
  );
};

export default Header;
