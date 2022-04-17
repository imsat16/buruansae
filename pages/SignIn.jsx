import React, {useState} from 'react';
import Layout from '../layouts/Layout';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router';

const SignIn = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [msg, setMsg] = useState ('');

  const history = useRouter ();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post ('https://f6bd-202-80-217-124.ngrok.io/auth/login', {
        username: username,
        password: password,
      });
      history.replace ('/Dashboard');
    } catch (error) {
      if (error.response) {
        setMsg (error.response.data.msg);
      }
    }
  };

  return (
    <div className="flex min-h-screen ">
      <div
        className=" flex-1 bg-slate-50 relative hidden md:block"
        style={{
          background: 'url(https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute left-10 right-10 bottom-10 backdrop-blur-xl p-10 text-white">
          <p className="mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut!
            Dolorem optio pariatur laborum soluta! Rem, officia ut ea illum
            mollitia aut tempora, quae voluptate et qui praesentium facere
            ipsum.
          </p>
          <p className="text-xl text-right font-semibold">John Doe</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-[50%]">
          <p className="mb-2 text-4xl font-semibold">Wellcome To Buruansae</p>
          <p className="mb-6 to-gray-500">Sign In Please</p>
          <form onSubmit={Auth} className="flex flex-col gap-y-2">
          <p className='text-red-600'>{msg}</p>
            {/* Email */}
            <label htmlFor="" className=" font-semibold text-sm">
              Username
            </label>
            <input
              type="text"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your username"
              value={username}
              onChange={e => {
                setUsername (e.target.value);
              }}
            />
            {/* Password */}
            <p htmlFor="" className=" font-semibold text-sm">
              Password
            </p>
            <input
              type="password"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your password"
              value={password}
              onChange={e => {
                setPassword (e.target.value);
              }}
            />
            <button className="bg-black hover:shadow-xl transition duration-300 text-white py-2 rounded-xl text-sm block">
              Login
            </button>
          </form>
          <div className="flex">
            <div className="text-gray-600 text-center">
              New to Buruansae <Link href={'/SignUp'}>
                <a className="text-green-800 font-bold">
                  Create an account
                </a>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SignIn;
