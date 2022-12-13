import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import './Banner.css'
function Banner() {
    const [movie,setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            let index = Math.floor(Math.random() * response.data.results.length)
            setMovie(response.data.results[index])
        })
    }, [])
    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className='title'>{movie ? (movie.name? movie.name : movie.title) : ""}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    )
}

export default Banner