import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";


const AllStudent = () => {
    return (
        <div className=" text-yellow-500">
      <div className="fixed z-10 w-full"><SearchPanel /></div>
      <div className="flex justify-center">
        <div className="mt-20">
{/* AdminStudentInfo section  */}
<h1 className="mt-8 text-3xl font-semibold uppercase text-black">All Student</h1>
<hr className="border border-black"/>
        </div>
      </div>
    </div>
    );
};

export default AllStudent;