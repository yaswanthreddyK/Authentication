import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "../context/UpdateProfile";

export default function App() {
  return (
    
    <Container
    className="d-flex align-items-center justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <AuthProvider>
          <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />} />
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/update-profile" element={<UpdateProfile/>}/>
          </Routes>
          </BrowserRouter>
      </AuthProvider>
      </div>
    </Container>
  );
}
