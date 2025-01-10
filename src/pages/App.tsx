import { Piechart } from "../components/Piechart";
import { useContext, useEffect } from "react";
import { UserContext } from "@/utils/auth";
import { useNavigate } from "react-router";

function App() {
  const { isAuthenticated } = useContext(UserContext) ?? {};
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <Piechart />
    </>
  );
}

export default App;
