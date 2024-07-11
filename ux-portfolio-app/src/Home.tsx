import './css/globals.css'
import './css/home.css'
import { useState } from 'react'
import { ScreenSizeResponse } from './tools/utilities.ts'
import {
  // Tooltip,
  Button
} from "@fluentui/react-components";
import { NavigationFilled } from '@fluentui/react-icons'
import { StackShim, StackItemShim } from "@fluentui/react-migration-v8-v9";

function App() {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const isTabletOrMobile = ScreenSizeResponse.IsTabletOrMobile();
  const isDesktopOrLaptop = ScreenSizeResponse.IsDesktopOrLaptop();
  const renderHamburger = () => {
    return (
      // <Tooltip content="Navigation" relationship="label">
        <Button icon={<NavigationFilled/>} title='hamburgerNavBtn' as='button' size='large' appearance='subtle' 
          onClick = {()=>setNavIsOpen(!isNavOpen)} />
      // </Tooltip>
    );
  };

  const renderNavigationList = () => {
    const menuItems = ['Protoypes', 'Evaluations & Analysis', 'Papers', 'Artwork'];
    let orientationClassAttr = "";
    if (isTabletOrMobile)
    {
      orientationClassAttr = "nav-menu-divider-vert";
    }else{
      orientationClassAttr = "nav-menu-divider-horiz";
    }
    return menuItems.map( (value: string, index: number) => 
            <StackItemShim key={"navItem"+value} 
              className={"nav-menu-item " + (index == menuItems.length-1 ? "" : orientationClassAttr)}>
               <a href=''>{ value } </a>
            </StackItemShim>
          );
  }

  return (
    <StackShim>
      {/* header */}
      <StackShim grow={1} horizontal={isTabletOrMobile} verticalAlign='center' className={'page-header ' + (isNavOpen ? 'drop-shadow': '')}
        horizontalAlign={isTabletOrMobile ? 'space-evenly' : 'center'}>
          <StackItemShim className="title-background">
            <h1 className="title">
              <span className='strawberry'>Jordyn</span><span className='sky'>Niara</span><span className='inchworm'>Smith</span>
            </h1>
          </StackItemShim>
          { isTabletOrMobile && 
          <StackItemShim>
            { renderHamburger() }
          </StackItemShim> 
          }
      </StackShim>
      <StackShim className="expanded-nav-menu dashed-border rounded-border-std" 
            horizontal={isDesktopOrLaptop}  
            horizontalAlign='space-evenly' 
            verticalAlign='center'>
            { isNavOpen && renderNavigationList() }
      </StackShim>
      {/*Body*/}
      <StackItemShim grow={3} className='grid-paper'>
      </StackItemShim>
    </StackShim>
  )
}

export default App
