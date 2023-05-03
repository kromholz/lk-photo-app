import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-around items-center py-4">
      <Link href="/about">
        <a>About Me</a>
      </Link>
      <Link href="/my-work">
        <a>My Work</a>
      </Link>
      <Link href="/pricing">
        <a>Pricing</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
    </header>
  );
}

export default Header;
