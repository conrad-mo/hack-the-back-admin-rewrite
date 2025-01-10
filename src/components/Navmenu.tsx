import { useContext } from "react";
import { UserContext } from "@/utils/auth";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

function NavMenu() {
  const { logout } = useContext(UserContext) ?? {};
  const navigate = useNavigate();
  const handleLogout = async () => {
    if (logout) {
      logout();
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col min-w-16 w-1/5 max-w-1/6 border gap-4 justify-between p-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-lg">Hack The Back</h1>
        <Button variant="ghost" className="bg-accent text-accent-foreground">
          Home
        </Button>
      </div>
      <Button onClick={handleLogout} variant="secondary">
        Logout
      </Button>
    </div>
  );
}

export default NavMenu;
