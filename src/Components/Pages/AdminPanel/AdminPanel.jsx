import DashBoardBody from "./Dashboard/Dashbody/DashBoardBody";
import Drawer from "../AdminPanel/Dashboard/SearchPanel/Drawer";

const AdminPanel = () => {
  return (
    <div className="flex justify-between gap-1">
        {/* drawer section  */}
        <Drawer />
      {/* adminbody  */}
            <DashBoardBody />
    </div>
  );
};

export default AdminPanel;