import React from 'react'

const Preview = ({movies}) => {

  const Boxes = movies.map(
    (movie, index) => {
       return <Box key={index} image={movie.poster_path} title={movie.original_title} rating={movie.vote_average}/>
    }
  )

  return (
    <div className='w-full md:grid grid-cols-4 gap-5'>
       {Boxes}
    </div>
  )
}

const Box = ({image, title, rating}) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const imgLink = `${IMGPATH}${image}`
    return (
        <div className='shadow min-h-[200px] mt-3 pb-1'>
            <img src={imgLink} alt="" className='w-full cursor-pointer'/>
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2xl'>{title}</span>
                <span className='text-xl text-yellow-500 font-bold'>{rating}</span>
            </div>
        </div>
    )
}

export default Preview