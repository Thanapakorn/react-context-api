import { Usercontext } from "../App";
import { useContext } from "react";

function AppHeader() {
  const { userData } = useContext(Usercontext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>
    </div>
  );
}

export default AppHeader;
