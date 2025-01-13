import '../../css/globals.css'
import './header.css'
import { useState } from 'react'
import { ScreenSizeResponse } from '../../tools/utilities.ts'
import { Button } from "@fluentui/react-components";
import { NavigationFilled } from '@fluentui/react-icons'
import { Link, useLocation } from "react-router-dom";

function Header() {
  const currPath = useLocation().pathname;
  const onHomePage = currPath == '/jordynniara' || currPath == '/';

  const isTabletOrMobile = ScreenSizeResponse.IsTabletOrMobile();
  const isDesktopOrLaptop = ScreenSizeResponse.IsDesktopOrLaptop();

  const [isNavOpen, setNavIsOpen] = useState(false);
  
  // const renderHamburger = () => {
  //   return (
  //       <Button icon={<NavigationFilled/>} title='hamburgerNavBtn' as='button' size='large' appearance='subtle' 
  //         onClick = {()=>setNavIsOpen(!isNavOpen)} />
  //   );
  // };

  // const renderVertNavList = () => {
  //   const orientationClassAttr = "nav-menu-item-vert";
  //   return renderNavigationList(false, orientationClassAttr)
  // }

  const renderHorizNavList = () => {
    if(!onHomePage)
    {
      const orientationClassAttr = "nav-menu-item-horiz";
      return renderNavigationList(true, orientationClassAttr)
    }

    return(
      <div className={`expanded-nav-menu dashed-border drop-shadow flex row}`} style={{justifyContent:'center'}}>
        Niara [nee ⋅ air ⋅ uh] - (Swahili) Woman with purpose
      </div>
    );
  }

  const renderNavigationList = (horizontal: boolean, orientationClassAttr: string) => {
    const menuItems = ['', 'old_projects', 'Analysis', 'Papers', 'Artwork'];

    return (
    <div className={`expanded-nav-menu dashed-border drop-shadow flex ${horizontal ? 'row' : 'col'}`} style={{justifyContent:'space-evenly'}}>
        {menuItems.map( (value: string, index: number) => (
          <Link to={`/${value}`} key={`navItem-${value}`}
            className={"nav-menu-item " + orientationClassAttr + (index == menuItems.length-1 ? "" : " divider")}>
            { value == '' ? 'Home' : value }
          </Link>))}
    </div>);
  }

  return (
    <>
      <div className={'flex row page-header leather-texture ' + (isNavOpen ? 'drop-shadow ': '') + (isTabletOrMobile ? 'space-evenly' : 'center')}>
          <Link to="/" style={{border:"none"}}>
            <div className="title-background sticker drop-shadow border-radius-100" id="titelHomeButton">
              <h1 className="title">
                {isDesktopOrLaptop && 
                <><span style={{color:"var(--strawberry)"}}>Jordyn</span><span style={{color:"var(--sky)"}}>Niara</span><span style={{color:"var(--inchworm)"}}>Smith</span></>}
                {isTabletOrMobile &&
                  <><span style={{color:"var(--strawberry)"}}>J</span><span style={{color:"var(--sky)"}}>N</span><span style={{color:"var(--inchworm)"}}>S</span></>
                }
              </h1>
            </div>
          </Link>
          <div className='break' style={{height:"15px"}}/>
          {/*isTabletOrMobile ? isNavOpen && renderVertNavList() :*/ renderHorizNavList() }
          {onHomePage && isDesktopOrLaptop && <div className='sticker logo drop-shadow'></div>}
      </div>
       
    </>
  )
}

export default Header

// TODO: use logo as hamburger menu on widescreen
// have it rotate out the nav menu and rotate in when closing
