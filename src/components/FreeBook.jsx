import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeBook() {
    const filterData = list.filter((data)=> data.category === "free")
    console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
    
  return (
    <>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>

    <div><h1 className='font-semibold text-xl pb-2'>Free course</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sint cumque explicabo quis, enim dolorum doloremque voluptas. Ipsum, alias aliquid! Officiis voluptates deleniti incidunt facilis voluptatem voluptate autem quod pariatur?</p>
    </div>

        

    <div><Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider></div>
      </div>
    
    
    
    </>
  )
}

export default FreeBook