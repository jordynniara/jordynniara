import './css/globals.css'
import './app.css'
import Home from "./pages/home/home"
import PageHeader from './components/page-header/page-header';
import PageFooter from './components/page-footer/page-footer';

function App() {
  return (
    <div className='flex col page-container'>
      {PageHeader()}
      <div className='page-margins grid-paper flex page-justify'>
        {/*routing here*/}
        {Home()}
      </div>
      {PageFooter()}  
    </div>
  )
}

export default App
