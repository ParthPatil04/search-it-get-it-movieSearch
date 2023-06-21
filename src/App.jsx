
import { useEffect, useState } from 'react'
import Preview from './assets/Components/Preview'
import axios from 'axios'

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([1]);
  const [search, setSearch] = useState("");

  const getAllMovies = () => {
    axios.get(APIURL).then((res) => {
      console.log(res.data.results)
      setMovies(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getSearchedMovies = () => {
    axios.get(`${SEARCHAPI}${search}`).then((res) => {
      console.log(res)
      setMovies(res.data.results)
    }).catch((err) => {
      console.log(err)
      alert('No records to this search!')
    })
  }

  useEffect(
    () => {
      setMovies([])
      if(search === ""){
        console.log("in")
        getAllMovies()
      } else {
         getSearchedMovies()
      }
    }, [search]
  )

  return (
    <>
       <div className='max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3'>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className='w-full border border-black rounded text-slate-700 p-4' />
        {
          movies.length === 0 ? <div className='text-3xl text-center mt-2'>Loading...</div> : <Preview movies={movies}/>
        }
       </div>
    </>
  )
}

export default App
