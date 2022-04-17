import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className=" absolute w-full z-30 backdrop-blur-xl bg-white/30 text-green-900 font-semibold flex justify-between md:p-2 items-center">
        <div className="w-1/12  hidden md:block">
          
          <Link href={"/"}>Home</Link>
        </div>
        <ul className="flex lg:flex-row">
          <li className={router.asPath == "/" ? "active text-green-600" : ""}>
            <Link href={"/SignIn"}>
              <a className="px-2 hover:text-green-600 hover:border-b-2 border-green-600">
                SignIn
              </a>
            </Link>
          </li>
          <li
            className={
              router.asPath == "/product" ? "active text-green-600" : ""
            }
          >
            <Link href={"/SignUp"}>
              <a className="px-2 hover:text-green-600 hover:border-b-2 border-green-600">
                SignUp
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </>
  );
};

export default Layout;
