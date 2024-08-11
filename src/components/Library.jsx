import React from "react";
import img from "../images/Designer.png";
import img2 from "../images/1.png";
import { Link } from "react-router-dom";

function Library() {
  return (
    <div className="max-w-screen-2xl container  pb-10 my-1 py-1 md:px-20 px-4  ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          Insight The <span className="text-blue-900">Library</span>
        </h1>
        {/* <p className="mt-12">
          Welcome to our prestigious library, an oasis of tranquility where
          students can immerse themselves in focused study. We offer an
          immaculate, serene environment, complemented by high-speed Wi-Fi and
          state-of-the-art air conditioning. Experience unparalleled comfort and
          an ambiance conducive to intellectual growth, ensuring your academic
          journey is both enriching and uninterrupted.
        </p> */}


        <div className="mt-14 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl " />
            <div>
              {/* <h1 className="text-5xl font-bold">Library</h1> */}
              <p className="mt-12">
                Welcome to our prestigious library, an oasis of tranquility
                where students can immerse themselves in focused study. We offer
                an immaculate, serene environment, complemented by high-speed
                Wi-Fi and state-of-the-art air conditioning. Experience
                unparalleled comfort and an ambiance conducive to intellectual
                growth, ensuring your academic journey is both enriching and
                uninterrupted.
              </p>
              {/*    */}
            </div>
          </div>
        </div>
      </div>

      
      <div className="pt-1">
      <div className=" mt-24 ">
          <div className="hero-content flex-col lg:flex-row">
            <img   src={img2} className="max-w-sm rounded-lg shadow-2xl hover:scale-105 duration-200" />
            <div>
              {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
              <p className="py-6">
                We were deeply honored to have IAS Nikas Kichar grace the
                inauguration of our library as the esteemed Chief Guest. His
                presence lent an aura of distinction to the event, underscoring
                the importance of intellectual enrichment. His insightful words
                resonated with the ethos of our institution, inspiring all in
                attendance to pursue academic excellence with renewed vigor.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
  <Link to='/'>
    <button className="mt-6 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-950 text-center">
      Back
    </button>
  </Link>
</div>

    </div>
  );
}

export default Library;
