import {Route, Routes} from 'react-router-dom'
import Homelayout from "./shared/layout/Homelayout"
import Homepage from "./Pages/Homepage"
import Notfound from "./Pages/Notfound"
function App() {


  return (
    <Routes>
      <Route element={<Homelayout/>}>
      <Route path="/" element={<Homepage/>}/>
      </Route>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  )
}

export default App
