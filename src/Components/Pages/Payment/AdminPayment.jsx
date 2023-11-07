import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";

const AdminPayment = () => {
    return (
        <div className="flex justify-between">
        <div className="z-10">
          <Drawer />
        </div>
        {/* table div  */}
        <div className="">
          <div className="lg:-ms-20">
            <SearchPanel />
          </div>
          <div className="flex justify-center">
            <div className="mt-20 me-28">
              {/* AdminStudentInfo section  */}
              <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
                All Student
              </h1>
              <hr className="border border-black mb-8" />
  
            
        </div>
        </div>
        </div>
      </div>
    );
};

export default AdminPayment;