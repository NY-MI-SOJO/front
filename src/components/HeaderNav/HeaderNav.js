import { Header } from 'carbon-components-react';
import React from 'react';
// import {
//   Header,
//   HeaderContainer,
//   HeaderName,
//   HeaderNavigation,
//   HeaderMenuButton,
//   HeaderMenuItem,
//   HeaderGlobalBar,
//   HeaderGlobalAction,
//   SkipToContent,
//   SideNav,
//   SideNavItems,
//   HeaderSideNavItems,
// } from 'carbon-components-react';
// import {
//   AppSwitcher20,
//   Notification20,
//   UserAvatar20,
// } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <header className="nav-header">
    <h1>New York &amp; Michigan Solutions Journalism</h1>
    <div className="lang-select">
      <Link to="">English</Link>
      <Link to="">Español</Link>
    </div>
  </header>
  // <HeaderContainer
  //   render={({ isSideNavExpanded, onClickSideNavExpand }) => (
  //     <Header aria-label="Carbon Tutorial" className='pageHeader'>
  //       <SkipToContent />
  //       <HeaderMenuButton
  //         aria-label="Open menu"
  //         onClick={onClickSideNavExpand}
  //         isActive={isSideNavExpanded}
  //       />
  //       <HeaderName element={Link} to="/" prefix=''>
  //         New York & Michigan Solution Journalism
  //       </HeaderName>
  //       <HeaderNavigation aria-label="Carbon Tutorial">
  //         <HeaderMenuItem element={Link} to="/repos">
  //           Category
  //         </HeaderMenuItem>
  //       </HeaderNavigation>
  //       <SideNav
  //         aria-label="Side navigation"
  //         expanded={isSideNavExpanded}
  //         isPersistent={false}>
  //         <SideNavItems>
  //           <HeaderSideNavItems>
  //             <HeaderMenuItem element={Link} to="/repos">
  //               Category
  //             </HeaderMenuItem>
  //           </HeaderSideNavItems>
  //         </SideNavItems>
  //       </SideNav>
  //       <HeaderGlobalBar>
  //         <HeaderGlobalAction aria-label="Notifications">
  //           <Notification20 />
  //         </HeaderGlobalAction>
  //         <HeaderGlobalAction aria-label="User Avatar">
  //           <UserAvatar20 />
  //         </HeaderGlobalAction>
  //         <HeaderGlobalAction aria-label="App Switcher">
  //           <AppSwitcher20 />
  //         </HeaderGlobalAction>
  //       </HeaderGlobalBar>
  //     </Header>
  //   )}
  // />
);

export default HeaderNav;
