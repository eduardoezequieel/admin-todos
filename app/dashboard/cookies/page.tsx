import { cookies } from 'next/headers';
import { TabBar } from '../components';

export const metadata = {
  title: 'Cookies',
};

const CookiesPage = () => {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get('currentTab')?.value || '1';

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className=" flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={+cookieTab} />
      </div>
    </div>
  );
};
export default CookiesPage;
