"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"

export default function Gallery(props:{images:any}){

    const imageGallery = props.images
    
    const [galleryIndex, setGalleryIndex] = useState(0)

    function galleryNext(){
        setGalleryIndex(galleryIndex + 1)

        if((galleryIndex + 1) > (imageGallery.length - 1)){
            setGalleryIndex(0)
        }
    }

    function galleryPrev(){
        setGalleryIndex(galleryIndex - 1)

        if((galleryIndex - 1) < 0){
            setGalleryIndex(imageGallery.length - 1)
        }
    }
    


    return(
        <div className="flex flex-col gap-6">
            <div className="text-orange-500 tracking-tighter font-extrabold text-6xl max-w-[1100px] mx-auto w-full p-6">Gallery</div>

            <div className="h-[400px] md:h-[500px] w-screen max-w-[1100px] mx-auto  text-white text-5xl flex flex-col gap-6 justify-start items-center rounded-lg">
                <div className="flex flex-row justify-between items-center w-full gap-4">
                    <button className="hidden md:block rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryPrev}><FontAwesomeIcon className="text-orange-500" icon={faArrowCircleLeft}/></button>
                    <Image priority={false} loading={"eager"} height={1000} width={1000} src={imageGallery[galleryIndex]} alt="" className="rounded-lg h-[400px] md:h-[500px] md:w-full object-cover"/>
                    <button className="hidden md:block rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryNext}><FontAwesomeIcon  className="text-orange-500"  icon={faArrowCircleRight}/></button>
                </div>

                <div className="flex flex-row gap-4 justify-evenly items-center">
                    <button className="block md:hidden rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryPrev}><FontAwesomeIcon className="text-orange-500" icon={faArrowCircleLeft}/></button>
                    <button className="block md:hidden rounded-full h-[64px] w-[64px] text-center opacity-50 hover:opacity-100 duration-500" onClick={galleryNext}><FontAwesomeIcon  className="text-orange-500"  icon={faArrowCircleRight}/></button>
                </div>
            </div>
        </div>
    )
}