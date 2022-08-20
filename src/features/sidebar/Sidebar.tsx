import React from 'react';
import {AllCategories, SidebarTruck} from "../../assets/icons";
import {Link, useLocation} from "react-router-dom";
import {useIsMobile} from "../../utils";
import {useDispatch, useSelector} from "react-redux";
import {toggleDrawer} from "../../store/drawer";

const Sidebar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isOnDashboard = location.pathname.slice(1).split('/')[0] === 'dashboard';
  // @ts-ignore
  const isDrawerOpened = useSelector(state => state.drawer.isOpen);
  const dispatch = useDispatch();

  if (!isOnDashboard) return null;

  return (
    <>
      {isMobile && <div onClick={() => dispatch(toggleDrawer())} className={`sidebar--opacity ${isDrawerOpened ? 'toggled' : ''}`} />}
      <div className={`sidebar ${isDrawerOpened ? 'toggled' : ''}`}>
        <div className="content">
          <h2>LG</h2>
          <div className="sidebar--menu">
            <Link to={'/dashboard'}>
              <div className="sidebar--button pointer">
                <div className="sidebar--icon">
                  <AllCategories />
                </div>
                <span className="body-s text-neutral">Home</span>
              </div>
            </Link>
            <Link to={'/dashboard/trucks'}>
              <div className="sidebar--button pointer">
                <div className="sidebar--icon">
                  <SidebarTruck />
                </div>
                <span className="body-s text-neutral">Park</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {!isMobile && <div className="sidebar-margin" />}
    </>
  );
}

export default Sidebar;