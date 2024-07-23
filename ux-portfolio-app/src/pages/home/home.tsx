import '../../css/globals.css'
import './home.css'
import { StackShim} from "@fluentui/react-migration-v8-v9";
import PageHeader  from "../../components/page-header/page-header"
import PageFooter from '../../components/page-footer/page-footer';

function Home() {
  return (
    <StackShim>
      {PageHeader()}
      {/*Body*/}
      {PageFooter()}
    </StackShim>
  )
}

export default Home
