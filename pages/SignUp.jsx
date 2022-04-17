import React, {useState} from 'react';
import Link from 'next/link';
import Layout from '../layouts/Layout';
import axios from 'axios';
import {useRouter} from 'next/router';

const SignUp = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [confPassword, setConfPassword] = useState ('');

  const [msg, setMsg] = useState ('');

  const history = useRouter ();

  const Register = async e => {
    e.preventDefault ();
    try {
      await axios.post ('https://f6bd-202-80-217-124.ngrok.io/auth/signup', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        username: username,
      });
      history.replace ('/SignIn');
    } catch (error) {
      if (error.response) {
        setMsg (error.response.data.msg);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[50%]">
          <p className="mb-2 text-4xl font-semibold ">
            Wellcome To Buruansae
          </p>
          <p className="to-gray-500">Sign In Please</p>
          <p className="mb-6 text-red-600">{msg}</p>
          <form onSubmit={Register} className="flex flex-col gap-y-2">
            {/* Fullname */}
            <label htmlFor="" className=" font-semibold text-sm">
              Full Name
            </label>
            <input
              type="text"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your email"
              value={name}
              onChange={e => setName (e.target.value)}
            />
            {/* Username */}
            <label htmlFor="" className=" font-semibold text-sm">
              Username
            </label>
            <input
              type="text"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your email"
              value={username}
              onChange={e => setUsername (e.target.value)}
            />
            {/* Email */}
            <label htmlFor="" className=" font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your email"
              value={email}
              onChange={e => setEmail (e.target.value)}
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
              onChange={e => setPassword (e.target.value)}
            />
            {/* Check Pass */}
            <p htmlFor="" className=" font-semibold text-sm">
              Confirm Password
            </p>
            <input
              type="password"
              className=" border py-1 px-2 rounded-lg"
              placeholder="Please enter your password"
              value={confPassword}
              onChange={e => setConfPassword (e.target.value)}
            />
            <button className="bg-black hover:shadow-xl transition duration-300 text-white py-2 rounded-xl text-sm block">
              Register
            </button>

          </form>
          <div className="flex">
            <div className="text-gray-600 text-center">
              Already have an account? <Link href={'/SignIn'}>
                <a className="text-green-800 font-bold">
                  SignIn
                </a>
              </Link>
            </div>

          </div>
        </div>
      </div>

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
    </div>
  );
};

export default SignUp;
