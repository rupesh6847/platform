import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import {
  ChevronDownIcon,
  Ellipsis,
  MonitorCheck,
  UserCircleIcon,
  LogIn,
  FolderSync,
  Megaphone,
  FileSpreadsheet,
  House,
  GitCompareArrows,
  SlidersHorizontal,
  PanelRightClose,
  PanelRightOpen,
  Calendar1,
} from "lucide-react";

const navItems = [
  {
    icon: <House />,
    name: "Home",
    path: "/",
    subItems: [
      {
        icon: <Calendar1 size={16} />,
        name: "Attendance",
        path: "/attendance",
      },
    ],
  },
  { icon: <GitCompareArrows />, name: "Process", path: "/process" },
  { icon: <Megaphone />, name: "Campaigns", path: "/campaigns" },
  { icon: <FileSpreadsheet />, name: "Briefs", path: "/briefs" },
  { icon: <FolderSync />, name: "Training", path: "/training" },
];

const othersItems = [
  {
    icon: <SlidersHorizontal />,
    name: "Setting",
    subItems: [
      // {
      //   icon: <MonitorCheck size={16} />,
      //   name: "Check Update",
      //   path: "/checkupdate",
      // },
      {
        icon: <UserCircleIcon size={16} />,
        name: "User Profile",
        path: "/profile",
      },
      { icon: <LogIn size={16} />, name: "SignOut", path: "/signin" },
    ],
  },
];

const AppSidebar = () => {
  const {
    isExpanded,
    isMobileOpen,
    isHovered,
    setIsHovered,
    toggleMobileSidebar,
    toggleSidebar,
  } = useSidebar();

  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef({});

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  // ✅ Listen for external mobile sidebar toggle
  useEffect(() => {
    const onToggleMobile = () => toggleMobileSidebar();
    window.addEventListener("toggleMobileSidebar", onToggleMobile);
    return () =>
      window.removeEventListener("toggleMobileSidebar", onToggleMobile);
  }, [toggleMobileSidebar]);

  // ✅ Highlight open submenu when route changes
  useEffect(() => {
    let submenuMatched = false;
    const items = navItems;
    items.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "main", index });
            submenuMatched = true;
          }
        });
      }
    });

    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive]);

  // ✅ Dynamically calculate submenu height for smooth transitions
  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  // ✅ Fix expand/collapse handling
  const handleToggle = () => {
    if (window.innerWidth >= 1024) toggleSidebar();
    else toggleMobileSidebar();
  };

  const handleSubmenuToggle = (index, menuType) => {
    setOpenSubmenu((prev) => {
      if (prev && prev.type === menuType && prev.index === index) return null;
      return { type: menuType, index };
    });
  };

  const handleHomeClick = (nav, index, menuType) => {
    if (nav.path === "/" && nav.subItems) {
      navigate(nav.path);

      setTimeout(() => {
        setOpenSubmenu((prev) => {
          if (prev && prev.type === menuType && prev.index === index)
            return null;
          return { type: menuType, index };
        });
      }, 100);
    }
  };

  const renderMenuItems = (items, menuType) => (
    <ul className="flex flex-col gap-3">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <div className="flex items-center">
              {nav.path ? (
                <Link
                  to={nav.path}
                  onClick={() => handleHomeClick(nav, index, menuType)}
                  className={`menu-item group flex-1 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  } cursor-pointer ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "lg:justify-start"
                  }`}
                >
                  <span
                    className={`menu-item-icon-size  ${
                      openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text text-sm">{nav.name}</span>
                  )}
                </Link>
              ) : (
                <button
                  onClick={() => handleSubmenuToggle(index, menuType)}
                  className={`menu-item group flex-1 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  } cursor-pointer ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "lg:justify-start"
                  }`}
                >
                  <span
                    className={`menu-item-icon-size  ${
                      openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text text-sm">{nav.name}</span>
                  )}
                </button>
              )}

              {(isExpanded || isHovered || isMobileOpen) && (
                <button
                  onClick={() => handleSubmenuToggle(index, menuType)}
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ml-1"
                >
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                        ? "rotate-180 text-brand-500"
                        : ""
                    }`}
                  />
                </button>
              )}
            </div>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text text-xs">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className={`overflow-hidden transition-all duration-300 ${
                menuType === "others"
                  ? "absolute  bottom-16 ml-1 bg-white dark:bg-gray-900 rounded-md     border-gray-200 dark:border-gray-700 min-w-[180px] z-10"
                  : ""
              }`}
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul
                className={`space-y-1 ${
                  menuType === "others" ? "p-2" : "mt-2 ml-9"
                }`}
              >
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item text-xs ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      } ${menuType === "others" ? "px-3 py-2 rounded-md" : ""}`}
                    >
                      <span className="flex items-center gap-2">
                        {subItem.icon}
                        {subItem.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 text-xs
        ${isExpanded || isMobileOpen ? "w-60" : isHovered ? "w-60" : "w-20"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* === HEADER LOGO & TOGGLE === */}
      <div
        className={`py-6 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-between"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="https://www.dropbox.com/scl/fi/hsdob0q1w5c5152hfp1fw/Nerua-Logo.png?rlkey=ipvozips4aecfbhcat4k2qn7v&st=qrm7jrvy&raw=1"
                alt="Logo"
                width={120}
                height={30}
              />
              <img
                className="hidden dark:block"
                src="https://www.dropbox.com/scl/fi/hsdob0q1w5c5152hfp1fw/Nerua-Logo.png?rlkey=ipvozips4aecfbhcat4k2qn7v&st=qrm7jrvy&raw=1"
                alt="Logo"
                width={120}
                height={30}
              />
            </>
          ) : (
            <img
              src="https://www.dropbox.com/scl/fi/92yl4naewe0jvbnd5rbpu/icons8-dashboard-96.png?rlkey=g4a1onr79y7zan8ta070mbrtu&st=cqwlibn3&raw=1"
              alt="Logo"
              width={28}
              height={28}
            />
          )}
        </Link>

        {/* Only show toggle button when sidebar is expanded/hovered */}
        {(isExpanded || isHovered || isMobileOpen) && (
          <button
            onClick={handleToggle}
            aria-label="Toggle sidebar"
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? (
              // <ChevronLeft size={18} />
              <PanelRightClose size={18} />
            ) : (
              // <ChevronRight size={18} />
              <PanelRightOpen size={18} />
            )}
          </button>
        )}
      </div>

      {/* === MENU SECTIONS === */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar grow">
        {/* Main Navigation */}
        <nav className="mb-4">
          <div className="flex flex-col gap-3">
            <div>
              <h2
                className={`mb-3 text-xs uppercase flex leading-4 text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <Ellipsis className="size-5" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>

        {othersItems.length > 0 && (
          <div className="mt-auto pb-6">
            <h2
              className={`mb-3 text-xs uppercase flex leading-4 text-gray-400 ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
              }`}
            >
              {isExpanded || isHovered || isMobileOpen ? (
                ""
              ) : (
                <Ellipsis size={18} />
              )}
            </h2>
            {renderMenuItems(othersItems, "others")}
          </div>
        )}
      </div>
    </aside>
  );
};

export default AppSidebar;
