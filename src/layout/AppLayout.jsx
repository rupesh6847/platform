import AppHeader from './AppHeader';
import Backdrop from './Backdrop';
import AppSidebar from './AppSidebar';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
const user = useSelector((state) => state.user.value);
  return (
    <div className="min-h-screen xl:flex bg-white dark:bg-gray-900">
      <div>
        <AppSidebar user={user}/>
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-60' : 'lg:ml-20'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <AppHeader user={user}/>
        <div className=" p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
