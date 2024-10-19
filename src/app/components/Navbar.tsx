import Link from 'next/link'
// app/components/Header.tsx
export default function Header() {
    return (
        <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/login">Login</Link> | <Link href="/main">Main</Link>
        </nav>
      </header>
    );
  }
