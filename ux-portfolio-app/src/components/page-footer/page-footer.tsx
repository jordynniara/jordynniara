import '../../css/globals.css'
import './page-header.css'
import { useState } from 'react'
import { ScreenSizeResponse } from '../../tools/utilities.ts'
import { Button } from "@fluentui/react-components";
import { NavigationFilled } from '@fluentui/react-icons'
import { StackShim, StackItemShim } from "@fluentui/react-migration-v8-v9";

function PageFooter() {
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
    <StackShim className="expanded-nav-menu dashed-border rounded-border-std"
      horizontal={horizontal}
      verticalAlign = 'center'>
        {menuItems.map( (value: string, index: number) => (
          <StackShim key={"navItem"+value}
            className={"nav-menu-item " + orientationClassAttr + (index == menuItems.length-1 ? "" : " divider")}>
            <a href=''>{ value } </a>
          </StackShim>))}
    </StackShim>);
  }

  return (
    <StackShim>
      <StackShim grow={1} horizontal={isTabletOrMobile} verticalAlign='center' className={'page-header ' + (isNavOpen ? 'drop-shadow': '')}
        horizontalAlign={isTabletOrMobile ? 'space-evenly' : 'center'}>
          <StackItemShim className="title-background">
            <h1 className="title">
              {isDesktopOrLaptop && 
               <><span className='strawberry'>Jordyn</span><span className='sky'>Niara</span><span className='inchworm'>Smith</span></>}
              {isTabletOrMobile &&
                <><span className='strawberry'>J</span><span className='sky'>N</span><span className='inchworm'>S</span></>
              }
            </h1>
          </StackItemShim>
          { isTabletOrMobile && 
          <StackItemShim>
            { renderHamburger() }
          </StackItemShim> 
          }
      </StackShim>
      { isTabletOrMobile ? isNavOpen && renderVertNavList() : renderHorizNavList() }
    </StackShim>
  )
}

export default PageFooter
