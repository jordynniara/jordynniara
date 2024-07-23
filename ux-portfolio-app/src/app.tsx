import './css/globals.css'
import { StackShim} from "@fluentui/react-migration-v8-v9";
import Home from "./pages/home/home"

function App() {
  return (
    <StackShim>
      {/*routing here */}
      {Home()}
    </StackShim>
  )
}

export default App
