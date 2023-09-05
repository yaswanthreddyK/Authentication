import { Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import { useAuth } from "../context/AuthContext";
import { Nav } from "react-bootstrap";

export default function PrivateRoute({element: Element, ...rest}){
  const { currentUser} = useAuth()

    return  currentUser ? <Dashboard/> : <Navigate to="/login"/>


}