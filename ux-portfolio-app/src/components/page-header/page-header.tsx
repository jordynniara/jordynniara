import '../../css/globals.css'
import './page-header.css'
import { useState } from 'react'
import { ScreenSizeResponse } from '../../tools/utilities.ts'
import { Button } from "@fluentui/react-components";
import { NavigationFilled } from '@fluentui/react-icons'

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

  const renderVertNavList = () => {
    const orientationClassAttr = "nav-menu-item-vert";
    return renderNavigationList(false, orientationClassAttr)
  }

  const renderHorizNavList = () => {
    const orientationClassAttr = "nav-menu-item-horiz";
    return renderNavigationList(true, orientationClassAttr)
  }

  const renderNavigationList = (horizontal: boolean, orientationClassAttr: string) => {
    const menuItems = ['Protoypes', 'Evaluations & Analysis', 'Papers', 'Artwork'];

    return (
    <div className={'expanded-nav-menu dashed-border rounded-border-std ' + (horizontal ? 'flex-row' : 'flex-col')}
      // verticalAlign = 'center
      >
        {menuItems.map( (value: string, index: number) => (
          <Button key={"navItem"+value}
            className={"nav-menu-item " + orientationClassAttr + (index == menuItems.length-1 ? "" : " divider")}>
            <a href=''>{ value } </a>
          </Button>))}
    </div>);
  }

  return (
    <>
      <div
        className={'page-header ' + (isNavOpen ? 'drop-shadow ': '') + (isTabletOrMobile ? 'space-evenly' : 'center')}>
          <div className="title-background sticker drop-shadow inset-border">
            <h1 className="title">
              {isDesktopOrLaptop && 
               <><span className='strawberry'>Jordyn</span><span className='sky'>Niara</span><span className='inchworm'>Smith</span></>}
              {isTabletOrMobile &&
                <><span className='strawberry'>J</span><span className='sky'>N</span><span className='inchworm'>S</span></>
              }
            </h1>
          </div>
          { isTabletOrMobile && 
          <div className="hamburger-nav">
            { renderHamburger() }
          </div> 
          }
      </div>
      { isTabletOrMobile ? isNavOpen && renderVertNavList() : renderHorizNavList() }
    </>
  )
}

export default PageHeader
