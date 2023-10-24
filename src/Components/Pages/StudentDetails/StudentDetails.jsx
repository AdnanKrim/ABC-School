import unknownPhoto from "../../../../public/images/bean.png"

const StudentDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div>
                    <p className="flex justify-center items-center">Student Details</p>
                        <div className="flex justify-center items-center"><img className='w-[250px] h-[250px] rounded-xl bg-yellow-200' src={unknownPhoto} alt="" /></div>
                    <div className="flex gap-5">
                        <div className=" text-lg grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10">
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Name:</span> Rowan Atkinson</h1>
 {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Father's Name:</span> David Atkinson</h1>
                                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Mother's Name:</span> Shaila Atkinson</h1>
                                <h1><span className="font-bold text-xl">BirthDate:</span> 19 FEbruary, 1999</h1>
                                <h1><span className="font-bold text-xl">Email:</span> Rowan89@gmail.com</h1>
                                <h1><span className="font-bold text-xl">Adress:</span> 79 westgate, melbourne</h1>
                            </div>
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Name:</span> Rowan Atkinson</h1>
 {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Father's Name:</span> David Atkinson</h1>
 {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Mother's Name:</span> Shaila Atkinson</h1>
                                <h1><span className="font-bold text-xl">BirthDate:</span> 19 FEbruary, 1999</h1>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default StudentDetails;