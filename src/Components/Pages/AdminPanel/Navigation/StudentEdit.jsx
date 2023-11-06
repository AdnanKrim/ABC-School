import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import { useState } from "react"; 
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StudentEdit = () => {

  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [rollNo, setrollNo] = useState("");
  const [regNo, setregNo] = useState("");
  const [wclass, setwclass] = useState("");
  const [section, setsection] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlefatherNameChange = (e) => {
    setfatherName(e.target.value);
  };
  const handlemotherNameChange = (e) => {
    setmotherName(e.target.value);
  };
  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleRollNoChange = (e) => {
    setrollNo(e.target.value);
  };
  const handleRegNoChange = (e) => {
    setregNo(e.target.value);
  };
  const handleWclassChange = (e) => {
    setwclass(e.target.value);
  };
  const handleSectionChange = (e) => {
    setsection(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imagePreviewURL = e.target.result;
        setImage(imagePreviewURL);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handlephoneNoChange = (e) => {
    setphoneNo(e.target.value);
  };

  // handle button section ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("fatherName", fatherName);
    data.append("motherName", motherName);
    data.append("birthDate", birthDate);
    data.append("email", email);
    data.append("address", address);
    data.append("phoneNo", phoneNo);
    data.append("image", image);
    data.append("rollNo", rollNo);
    data.append("regNo", regNo);
    data.append("wclass", wclass);
    data.append("section", section);
    console.log(data);
    console.log("Selected Image:", image);

    axios.post('http://127.0.0.1:8000/api/student-reg', data,)
      .then((res) => {
        console.log('Data:', res.data);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
    // setName('');
    // setfatherName('');
    // setmotherName('');
    // setBirthDate('');
    // setEmail('');
    // setAddress('');
    // setphoneNo('');
    // setImage('');
    // setrollNo('');
    // setregNo('');
    // setwclass('');
    // setsection('');
  };

  return (
    <div className="flex justify-between">
      <div className="z-10">
        <Drawer />
      </div>
      {/* table div  */}
      <div className="lg:me-[200px]">
        <div className="lg:-ms-20">
          <SearchPanel />
        </div>
        <div className="flex justify-center mt-20">
          <div className="">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Update  Details
            </h1>
            <hr className="border border-black mb-8" />

            {/* Edit form section  */}
{/* form section  */}
<form
          onSubmit={handleSubmit}
          className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          {/* name section   */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              placeholder="Add Name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          {/* motherName and fathername section  */}
          <div className="flex gap-2 mb-3">
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label htmlFor="fatherName">Father's Name:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Father Name"
                type="text"
                name="fatherName"
                id="fatherName"
                value={fatherName}
                onChange={handlefatherNameChange}
              />
            </div>
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <label htmlFor="motherName">Mother's Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Mother Name"
                type="text"
                name="motherName"
                id="motherName"
                value={motherName}
                onChange={handlemotherNameChange}
              />
            </div>
          </div>

          {/* Phone and birthdate section  */}
          <div className="flex gap-2 mb-3">
            <div>
              <label htmlFor="phoneNo">Phone Number:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Phone Number"
                type="number"
                name="phoneNo"
                id="phoneNo"
                value={phoneNo}
                onChange={handlephoneNoChange}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birthdate:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="birthDate"
                id="birthDate"
                value={birthDate}
                onChange={handleBirthDateChange}
              />
            </div>
          </div>

          {/* email and address section  */}
          <div className="flex gap-2 mb-3">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Email"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add address"
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>

          {/* Roll and Registration section  */}
          <div className="flex gap-2 mb-3">
            <div>
              <label htmlFor="rollNo">Roll:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Roll Number"
                type="number"
                name="rollNo"
                id="rollNo"
                value={rollNo}
                onChange={handleRollNoChange}
              />
            </div>
            <div>
              <label htmlFor="regNo">Registration:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Registration Number"
                type="number"
                name="regNo"
                id="regNo"
                value={regNo}
                onChange={handleRegNoChange}
              />
            </div>
            
          </div>

          {/* Class and Section section  */}
          <div className="flex gap-2 mb-3">
            <div>
              <label htmlFor="wclass">Class:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add Class"
                type="wclass"
                name="wclass"
                id="wclass"
                value={wclass}
                onChange={handleWclassChange}
              />
            </div>
            <div>
              <label htmlFor="section">Section:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Add section"
                type="text"
                name="section"
                id="section"
                value={section}
                onChange={handleSectionChange}
              />
            </div>
          </div>

          {/* picture section  */}
          <div>
            <label htmlFor="file">Picture: </label> <br />
            <input
              required
              className="file-input file-input-bordered file-input-primary w-full max-w-lg"
              type="file"
              name="image"
              id="file"
              // value={image}
              onChange={handleImageChange}
            />
          </div>

          <button
            className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
            type="submit"
          >
            Save
          </button>

          
        </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEdit;
