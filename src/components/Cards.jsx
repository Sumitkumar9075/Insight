import React from 'react'

function Cards({item}) {
    console.log(item);
    
  return (
    <>
    <div className='mt-14 p-5'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.discription}</p>
    <div className="card-actions justify-between">
      {/* <div className="badge badge-outline">${item.price}</div> */}
      <a  href = {item.link} target="_blank" className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover: bg-yellow-500 hover:text-white duration-200">Link </a>
      
    </div>
  </div>

</div>
    </div>
    </>
  )
}

export default Cards