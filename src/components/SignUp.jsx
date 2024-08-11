import React from "react";
import{Link} from 'react-router-dom'

function SignUp() {
  return (
    <>
      <div className="flex h-screen items-center justify-center border shadow-lg ">
        
        <div id="my_modal_3" className="w-[600px] ">
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-2xl flex justify-center">Signup</h3>
            <div className="">
              <div className="  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left"></div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white">
                    <form className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text dark:bg-slate-900 dark:text-white">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      {/* ss */}

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text dark:bg-slate-900 dark:text-white">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>






                      <div className="form-control">
                        <label className="label">
                          <span className="label-text dark:bg-slate-900 dark:text-white">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <label className="label">
                          <p className="label-text-alt dark:bg-slate-900 dark:text-white">
                            Have account{" "}
                            <Link
                              to="/"
                              className="label-text-alt link link-hover underline text-blue-500"
                            >
                              Login
                            </Link>
                          </p>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary bg-blue-800 text-white">
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
