// app/components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
