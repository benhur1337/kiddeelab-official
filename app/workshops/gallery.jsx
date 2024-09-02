"use client"

import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

export default function Gallery(){

    let imageGallery = ['dog', 'cat', 'horse', 'mouse']
    
    const [galleryIndex, setGalleryIndex] = useState(0)

    function galleryNext(){
        setGalleryIndex(galleryIndex + 1)

        if((galleryIndex + 1) > (imageGallery.length - 1)){
            setGalleryIndex(0)
        }

        console.log(galleryIndex)
    }

    function galleryPrev(){
        setGalleryIndex(galleryIndex - 1)

        if((galleryIndex - 1) < 0){
            setGalleryIndex(imageGallery.length - 1)
        }

        console.log(galleryIndex)
    }
    


    return(
        <div className="flex flex-col gap-6">
            <div className="text-orange-500 tracking-tighter font-extrabold text-6xl max-w-[1100px] mx-auto w-full p-6">Gallery</div>

            <div className="h-[400px] md:h-[500px] w-screen max-w-[1100px] mx-auto bg-black text-white text-5xl flex flex-col justify-center items-center rounded-lg">
                <div className="flex flex-row justify-between items-center w-full p-2 ">
                    <button className="rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryPrev}><FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                    {imageGallery[galleryIndex]}
                    <button className="rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryNext}><FontAwesomeIcon icon={faArrowCircleRight}/></button>
                </div>
            </div>
        </div>
    )
}