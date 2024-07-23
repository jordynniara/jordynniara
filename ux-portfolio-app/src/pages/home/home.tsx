import '../../css/globals.css'
import './home.css'
import { StackShim} from "@fluentui/react-migration-v8-v9";
import PageHeader  from "../../components/page-header/page-header"

function Home() {
  return (
    <StackShim>
      {PageHeader()}
      {/*Body*/}
      {/*Footer*/}
    </StackShim>
  )
}

export default Home
