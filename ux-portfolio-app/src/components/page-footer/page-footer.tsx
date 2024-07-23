import '../../css/globals.css'
import './page-footer.css'
import { StackShim } from "@fluentui/react-migration-v8-v9";

function PageFooter() {

  return (
    <StackShim className="center footer" style={{background:"pebble"}}>
      <div>Jordyn N. Smith © 2024</div>
    </StackShim>
  )
}

export default PageFooter
