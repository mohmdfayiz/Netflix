import React,{ useEffect,useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { imageUrl, API_KEY } from '../../constants/constants'
import './RowPost.css'
import "../../urls"

function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch((err)=> alert("OOPS... Network error!"))
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handleMovie = (id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length != 0){
                setUrlId(response.data.results[0])
            }else{
                alert('Trailer not available');
            }
        })
      }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? "smallPoster": 'poster'} src={`${imageUrl+obj.poster_path}`} alt="Poster" />
            )}
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost