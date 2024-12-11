import '../../css/globals.css'
import './page-header.css'
import { useState } from 'react'
import { ScreenSizeResponse } from '../../tools/utilities.ts'
import { Button } from "@fluentui/react-components";
import { NavigationFilled } from '@fluentui/react-icons'
import { Link } from "react-router-dom";

function PageHeader() {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const isTabletOrMobile = ScreenSizeResponse.IsTabletOrMobile();
  const isDesktopOrLaptop = ScreenSizeResponse.IsDesktopOrLaptop();
  const renderHamburger = () => {
    return (
        <Button icon={<NavigationFilled/>} title='hamburgerNavBtn' as='button' size='large' appearance='subtle' 
          onClick = {()=>setNavIsOpen(!isNavOpen)} />
    );
  };

  // const renderVertNavList = () => {
  //   const orientationClassAttr = "nav-menu-item-vert";
  //   return renderNavigationList(false, orientationClassAttr)
  // }

  // const renderHorizNavList = () => {
  //   const orientationClassAttr = "nav-menu-item-horiz";
  //   return renderNavigationList(true, orientationClassAttr)
  // }

  // const renderNavigationList = (horizontal: boolean, orientationClassAttr: string) => {
  //   const menuItems = ['Protoypes', 'Evaluations & Analysis', 'Papers', 'Artwork'];

  //   return (
  //   <div className={'expanded-nav-menu dashed-border rounded-border-std flex' + (horizontal ? 'row' : 'col')}
  //     // verticalAlign = 'center
  //     >
  //       {menuItems.map( (value: string, index: number) => (
  //         <Button key={"navItem"+value}
  //           className={"nav-menu-item " + orientationClassAttr + (index == menuItems.length-1 ? "" : " divider")}>
  //           <a href=''>{ value } </a>
  //         </Button>))}
  //   </div>);
  // }

  return (
    <>
      <div
        className={'page-header leather-texture ' + (isNavOpen ? 'drop-shadow ': '') + (isTabletOrMobile ? 'space-evenly' : 'center')}>
          <Link to="/" style={{border:"none"}}>
            <div className="title-background sticker drop-shadow inset-border border-radius-100" id="titelHomeButton">
              <h1 className="title">
                {isDesktopOrLaptop && 
                <><span style={{color:"var(--strawberry)"}}>Jordyn</span><span style={{color:"var(--sky)"}}>Niara</span><span style={{color:"var(--inchworm)"}}>Smith</span></>}
                {isTabletOrMobile &&
                  <><span style={{color:"var(--strawberry)"}}>J</span><span style={{color:"var(--sky)"}}>N</span><span style={{color:"var(--inchworm)"}}>S</span></>
                }
              </h1>
            </div>
          </Link>
          { isTabletOrMobile && 
          <div className="hamburger-nav">
            { renderHamburger() }
          </div> 
          }
      </div>

      {/* 
            if on home page don't render menu (requires lifted state)
      { isTabletOrMobile ? isNavOpen && renderVertNavList() : renderHorizNavList() } */}

      <div className='sticker logo drop-shadow'></div>
    </>
  )
}

export default PageHeader
