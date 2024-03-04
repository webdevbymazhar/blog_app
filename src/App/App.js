import { Route, Routes } from "react-router-dom";
import * as pages from '../utils/pages'
import {paths} from "../utils/paths"


function App() {
  return (
    <div className="App">
    <Routes>
     
     <Route path={paths.home} element={<pages.Home/>}/>
     <Route path={paths.login} element={<pages.Login/>}/>
     <Route path={paths.register} element={<pages.Register/>} />
    <Route path={paths.blogDetail('id')} element={<pages.BlogDetail/>}/>


    {/* Authors */}

    <Route path={paths.createBlog} element={<pages.Create/>}/>


    {/* Admin */}

    </Routes>
    </div>
  );
}

export default App;
