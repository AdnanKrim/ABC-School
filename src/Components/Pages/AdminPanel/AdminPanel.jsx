import DashBoardBody from "./Dashboard/Dashbody/DashBoardBody";
import SearchPanel from "./Dashboard/SearchPanel/SearchPanel";

const AdminPanel = () => {
  return (
    <div className="text-white ">
      <div className="fixed z-10 w-full"><SearchPanel /></div>
      <div className="flex justify-center">
        <DashBoardBody />
      </div>
    </div>
  );
};

export default AdminPanel;