import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/dashboard/Home";
import Income from "./pages/dashboard/Income";
import Expense from "./pages/dashboard/Expense";
const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Home/>}></Route>
        <Route path="/income" element={<Income/>}></Route>
        <Route path="/expense" element={<Expense/>}></Route>
        
      </Routes>
      </BrowserRouter>
     
    </div>
   );
}
const Root=()=>{
 const isAuthenticated=!!localStorage.getItem("token");
 return(isAuthenticated?(
  <Navigate to="/dashboard"></Navigate>)
  :(<Navigate to="/login"></Navigate>
 ))
}
 
export default App;