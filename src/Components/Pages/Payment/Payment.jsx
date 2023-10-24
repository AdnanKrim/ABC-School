import { useState } from 'react';
import loginPhoto from '../../../../public/images/educational_board.png';
import loginbanner from '../../../../public/images/educational_board.png';

const Payment = () => {



  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [classes, setClasses] = useState('');
  const [section, setSection] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleFatherChange = (e) => {
    setFather(e.target.value);
  };
  const handleMotherChange = (e) => {
    setMother(e.target.value);
  };
  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };
  const handleAdressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleClassesChange = (e) => {
    setClasses(e.target.value);
  };
  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };
  const handleRollChange = (e) => {
    setRoll(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  // handle button section ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, father, mother, birthdate, address, classes, section, roll, email, password);
  };



  const backgroundStyles = {
    backgroundImage: `url(${loginbanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      style={backgroundStyles}
      className="relative flex items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-gray-700 opacity-70" />
      <div className="w-full max-w-lg relative">

        {/* logo and title section  */}
        <div className="lg:flex md:flex sm: hidden justify-between items-center py-5 px-3 ">
          <img
            className="lg:w-[100px] lg:h-[100px] sm:w-[60px] sm:h-[60px]"
            src={loginPhoto}
            alt=""
          />
          <h1 className="text-center leading-10">
            <span style={{ fontFamily: 'Tiro Bangla, serif' }} className="font-semibold text-4xl text-white">
              এ.বি.সি স্কুল এন্ড কলেজ
            </span>{' '}
            <br />
            <span style={{ fontFamily: 'Young Serif, serif' }} className="text-lg text-white">
              A.B.C School and College
            </span>
          </h1>
        </div>

        {/* form section  */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4">

<h1 className="font-semibold text-center mb-3">Please Register Here</h1>
 {/* name section   */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              placeholder='Your Name'
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
{/* motherName and fathername section  */}
<div className='flex gap-2 mb-3'>

<div>
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label htmlFor="father">Father's Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Father Name'
              type="text"
              name="fatherName"
              id="fatherName"
              value={father}
              onChange={handleFatherChange}
            />
          </div>
          <div>
 {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label htmlFor="mother">Mother's Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Mother Name'
              type="text"
              name="motherName"
              id="motherName"
              value={mother}
              onChange={handleMotherChange}
            />
          </div>

</div>

{/* address and birthdate section  */}
<div className='flex gap-2 mb-3'>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Adress'
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={handleAdressChange}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="birthdate"
              id="birthdate"
              value={birthdate}
              onChange={handleBirthdateChange}
            />
          </div>

</div>

{/* class and roll section  */}
<div className='flex gap-2 mb-3'>
<div>
            <label htmlFor="classes">Class:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Class'
              type="text"
              name="class"
              id="class"
              value={classes}
              onChange={handleClassesChange}
            />
          </div>
          <div>
            <label htmlFor="roll">Roll:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Class Roll'
              type="text"
              name="roll"
              id="roll"
              value={roll}
              onChange={handleRollChange}
            />
          </div>

</div>
{/* section and phone number section  */}
<div className='flex gap-2 mb-3'>
<div>
            <label htmlFor="section">Section:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Section'
              type="text"
              name="section"
              id="section"
              value={section}
              onChange={handleSectionChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Phone Number'
              type="number"
              name="phone"
              id="section"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
</div>

{/* email and password section  */}
<div className='flex gap-2 mb-3'>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Email'
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='Your Password'
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
</div>

{/* picture section  */}
<div>
            <label htmlFor="file">Picture: </label> <br />
            <input
              className="file-input file-input-bordered file-input-warning w-full max-w-lg"
              type="file"
              name="file"
              id="file"
              value={file}
              onChange={handleFileChange}
            />
 </div>

          <button
            className="bg-yellow-300 hover:bg-yellow-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
            type="submit">Submit</button>

          {/* extra paragraph -------------  */}

          <p className='mt-3 text-sm'>already have an account? ,please
            <div className='flex items-center'>
              register here : <button
                className="bg-yellow-300 hover:bg-yellow-200 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              ><a href="/login">Login</a></button> <span className='ms-2 me-2'>or</span>
              <button
                className="bg-yellow-300 hover:bg-yellow-200 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/">return home</a></button>
            </div>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Payment;