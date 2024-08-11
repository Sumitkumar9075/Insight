import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl flex justify-center">Login</h3>
          <div className="">

          <div className="  ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left ">
     
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white" >
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:bg-slate-900 dark:text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:bg-slate-900 dark:text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className="label-text-alt dark:bg-slate-900 dark:text-white">Not registered? <Link to="/signup" className="label-text-alt link link-hover underline text-blue-500">Sign up</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-800 text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>


            
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
