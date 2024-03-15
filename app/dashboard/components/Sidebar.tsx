import Image from 'next/image';
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
import { SidebarItem } from '.';
import { IoCalendar, IoCalendarOutline, IoCheckboxOutline, IoListOutline } from 'react-icons/io5';

const menuItem = [
  {
    icon: <IoCalendarOutline />,
    path: '/dashboard',
    children: 'Dashboard',
  },
  {
    icon: <IoCheckboxOutline />,
    path: '/dashboard/rest-todos',
    children: 'Rest todos',
  },
  {
    icon: <IoListOutline />,
    path: '/dashboard/server-todos',
    children: 'Server actions',
  },
];

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <a href="#" title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              width={128}
              height={32}
            />
          </a>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            width={40}
            height={40}
          />
          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          {menuItem.map((item) => (
            <SidebarItem icon={item.icon} path={item.path} key={item.path}>
              {item.children}
            </SidebarItem>
          ))}
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
        <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
