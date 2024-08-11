import React from "react";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container  pb-10 my-1 py-1 md:px-20 px-4  ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          Contact <span className="text-blue-900">us</span>
        </h1>
        {/* <p className="mt-12">
          Welcome to our prestigious library, an oasis of tranquility where
          students can immerse themselves in focused study. We offer an
          immaculate, serene environment, complemented by high-speed Wi-Fi and
          state-of-the-art air conditioning. Experience unparalleled comfort and
          an ambiance conducive to intellectual growth, ensuring your academic
          journey is both enriching and uninterrupted.
        </p> */}
        </div>

        {/* dn */}

        <div className="hero  min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h3 className="text-3xl font-bold">Address</h3>
      <p className="py-6">
        Near hotel Georgio , Abohar(152116)
        <br />
        Contact No : 9915835791
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white ">
      <form className="card-body ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text dark:bg-slate-900 dark:text-white">Full name </span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:bg-slate-900 dark:text-white">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="mt-4">
              <label htmlFor="help" className="sr-only bg-base-100">
                Message
              </label>
              <textarea
                id="help"
                name="help"
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Message"
              ></textarea>
            </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-900 text-white ">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        
        


      </div>
    </>
  );
}

export default Contact;
