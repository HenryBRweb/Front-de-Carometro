import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Idev2 from "./pages/Idev2/Idev2";
import Idev1 from "./pages/Idev1/Idev1";
import Idev3 from "./pages/Idev3/Idev3";
import Elec1 from "./pages/Elec1/Elec1";
import Elec2 from "./pages/Elec2/Elec2";
import Elec3 from "./pages/Elec3/Elec3";
import Tela1 from "./pages/Tela_informativa/tela1";
import Ocorrencia from "./pages/Aviso/Ocorrencia";

function MainRoute(){
    return(
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/idev2" element={<Idev2 />}/>
            <Route path="/idev1" element={<Idev1 />}/>
            <Route path="/idev3" element={<Idev3 />}/>
            <Route path="/elec1" element={<Elec1 />}/>
            <Route path="/elec2" element={<Elec2 />}/>
            <Route path="/elec3" element={<Elec3 />}/>
            <Route path="/tela1" element={<Tela1 />}/>
            <Route path="/ocorrencia" element={<Ocorrencia />}/>
        </Routes>
    )
}

export default MainRoute;