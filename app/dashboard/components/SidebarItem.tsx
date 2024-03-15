'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  icon: React.ReactNode;
  path: string;
  children: React.ReactNode;
}

export const SidebarItem = ({ children, path, icon }: Props) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <li>
      <Link
        href={path}
        className={`group relative flex items-center space-x-4 rounded-xl px-4 py-3 hover:bg-sky-600 hover:bg-gradient-to-r ${active ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : ''}`}
      >
        {icon}
        <span className="-mr-1 font-medium group-hover:text-white">{children}</span>
      </Link>
    </li>
  );
};
