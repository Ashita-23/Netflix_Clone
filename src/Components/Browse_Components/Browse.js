// import  useNowPlayingApi  from "../../customHooks/useNowPlayingApi"
import { useEffect, useState } from "react"
// import netflixCover from "../../Assets/LoginImages/netflixCover.jpeg"
import {POSTER_API, TOP_RATED, options , POPULER_API, UP_COMING ,NOW_PLAYING_API } from "../../utils/apiOptions"
// import NowPlayingCards from "./videoCards"

const Browse = ()=>{
    // useNowPlayingApi()

    const [nowPlaying,setNowPlaying] = useState()
    const [nowPopuler,setNowPopuler] = useState()
    const [nowTOP_RATED ,setNowTOP_RATED ] = useState()
    const [nowUP_COMING ,setUP_COMING ] = useState()

// console.log(nowUP_COMING ,"nowUP_COMING")
    useEffect(()=>{
        getNOW_PLAYING()
        getPopuler ()
        getTOP_RATED ()
        getUp_Coming ()
    },[])

    const getNOW_PLAYING = async ()=>{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()
        // console.log(JSON,"JSON")}
        setNowPlaying(JSON) }


        const getPopuler = async ()=>{
            const Data = await fetch(POPULER_API, options)
            const JSON = await Data.json()
            // console.log(JSON,"JSON POPULER")
            setNowPopuler(JSON)
       
    }

    const getTOP_RATED = async ()=>{
        const Data = await fetch(TOP_RATED, options)
        const JSON = await Data.json()
        // console.log(JSON,"JSON Top rated")
        setNowTOP_RATED(JSON)
   
}

const getUp_Coming = async ()=>{
    const Data = await fetch(UP_COMING, options)
    const JSON = await Data.json()
    // console.log(JSON,"JSON Up coming")
    setUP_COMING(JSON)

}

    return(
<div className="relative w-[100%]">
    {/* <img alt="Cover" src={netflixCover} className="w-screen"></img> */}
    <iframe className=" w-screen aspect-video  " src="https://www.youtube.com/embed/xCVBU07uGf4?si=IKSTJwvth33OXRpI?autoplay&mute=1" 
    title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen></iframe>
    <div className=" w-5/12 p-2 absolute -mt-[25%] ml-6 text-white">
        <p className="text-3xl font-semibold">{nowPlaying?.results[0]?.original_title}</p>
        <p className="text-md">{nowPlaying?.results[0]?.overview}</p>
    </div>
    <div className="border bg-black">
               {/* <NowPlayingCards  NowData={nowPlaying?.results}></NowPlayingCards> */}
        <div className="p-2 -mt-[14%]">
        <h1 className="text-2xl font-semibold p-2 text-white" >Now Playing </h1>
         <div className="flex overflow-x-scroll p">
         {nowPlaying?.results?.map((data)=><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2"></img>)} 
         </div>

         <div className="p-2">
        <h1 className="text-2xl font-semibold p-2 text-white" > Populer </h1>
         <div className="flex overflow-x-scroll p">
         {nowPopuler?.results?.map((data)=><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2"></img>)} 
         </div>
         <div className="p-2">
        <h1 className="text-2xl font-semibold p-2 text-white" >Top Rated </h1>
         <div className="flex overflow-x-scroll p">
         {nowTOP_RATED?.results?.map((data)=><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2"></img>)} 
         </div>

         <div className="p-2">
        <h1 className="text-2xl font-semibold p-2 text-white" >Up Coming</h1>
         <div className="flex overflow-x-scroll p">
         {nowUP_COMING?.results?.map((data)=><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2"></img>)} 
         </div>
         </div>
        </div>
        </div>
        </div>
           
    </div>
</div>
    )
}

export default Browse