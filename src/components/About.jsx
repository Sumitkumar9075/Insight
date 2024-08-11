import React from "react";
import img3 from "../images/2.png"

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container  pb-10 my-1 py-1 md:px-20 px-4  ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
             <span className="text-blue-900"></span>
          </h1>
        </div>

        <div className="">
          <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={img3}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Arvind Birthalia (Director)</h1>
                <p className="py-6">
                As the Director of our esteemed institute, I am immensely proud to witness the success of our alumni. Over a hundred students have walked through our doors, not only to study but to transform their lives. They have gone on to become teachers shaping the future, officers upholding justice, and professionals excelling in various fields. Our academy stands as a beacon of excellence, guiding each student toward a promising career. Together, we continue to create leaders who will make a difference in the world.
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
