import { Piechart } from "../components/Piechart";
import { useContext } from "react";
import { UserContext } from "@/utils/auth";
import { useNavigate } from "react-router";

function App() {
  const { isAuthenticated } = useContext(UserContext) ?? {};
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <>
      <Piechart />
    </>
  );
}

export default App;
