import { useState } from 'react';
import loginPhoto from '../../../../public/images/educational_board.png';
import loginbanner from '../../../../public/images/educational_board.png';
import marketien from '../../../../public/icons/Main Logo-01.png'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
        setEmailError('Email is required');
    } else {
        setEmailError('');
        if (!e.target.value) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    }
};

const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};
const data = { email, password }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Email:', email, 'Password:', password);
  axios.post(`http://sml4kzlfjc.ap.loclx.io/api/login`, data)
  .then(res => {
      if (res.data.status === "201" ) {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Successfully Logged In',
              showConfirmButton: false,
              timer: 1500
          });
          // if(res.data?.user?.role === "2"){
          //   localStorage.setItem('user', JSON.stringify(res.data))
          //   navigate('/studentDetails');
          // }else{
          //   Swal.fire({
          //     icon: 'error',
          //     title: 'Oops...',
          //     text: "You are not eligible for this page",
          //   });
          // }
localStorage.setItem('token', res.data.token);
localStorage.setItem('user', JSON.stringify(res.data));
          navigate('/studentDetails');
      }
      else if (res.data.status === "403") {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Invalid Password",
            });
      }
      
      else {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: "Access Denied",
          });
      }
  })
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
      <div className="w-full max-w-md relative">

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
          className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="font-semibold text-center mb-3">Please Login Here</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Enter Gmail
            </label>
            <input
            required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="text-red-600">{emailError}</span>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="text-red-600">{passwordError}</span>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          {/* extra paragraph -------------  */}

          <p className='mt-3 text-sm'>If you are a student and do not have an account yet, please
            <div className='flex items-center'>
              register here : <button
                className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              ><a href="/signup">Signup</a></button> <span className='ms-2 me-2'>or</span>
              <button
                className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/">return home</a></button>
            </div>
          </p>
          <hr className='my-5 border border-blue-300' />
          <h1 className='flex justify-center items-center'>copyright © <img className='w-[120px] ms-2' src={marketien} alt="" /></h1>
        </form>

      </div>
    </div>
  );
}

export default Login;
