import Gallery from "../gallery"




export default function Page({params}:{params:{slug:string}}){
  
  const aitis =[
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_1-min-R8sD0aKYoOkidEH1TeBuCo7jW2t3ua.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_10-min-ngnwBCgTBMnx2XJhYGm5ZytO8HhsJG.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_11-min-uTYle5LgI7aSWqMdEOnkrMU9LxIEg3.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_12-min-qytLtiLxsZtMPllLxIDXOaHIzC3Ugb.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_13-min-pbVo68qmOJ7eKPniImOvVXaWegtNr9.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_14-min-5WXqGGkbOOywNe7rePXnffqPBqovqj.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_15-min-cgB4a0Jf9bnMVD2j7F8vptZoJh4pyn.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_16-min-pF1fw4JDW0szSlJYWGTPVRCKxPzg2F.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_17-min-zj4ndwufGjvLCn3ciNCKLX1izcxfts.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_18-min-MdEEOEVCHODDxm7q2GqiYIgpMs0SHu.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_19-min-tAeKO1TPX0QS0nrIryVCf73tf5XorK.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_2-min-Uy5YwiLdB2Ve1ynPqLyY7NIvGZIwBO.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_20-min-6RCUpK4WnrnfqHcLjAdVi3jdbUdSwo.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_21-min-VVZyv01DjY98tcF3Y7peYsC8sAx5x7.jpg",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_3-min-RyW8Ig448odeJDES7nrUgsiTS9Cm7O.jpg"
  ]

  const yingyod = [
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_1286-min-otJ69BdCTaHwpWUk6bhGXBRpjOUeEf.JPG",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_1312-min-0AgDBgZBC0dx0hdFRpi2TOqis2OHeM.JPG",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_1334-min-xD0gQoZwP2wECeaqiM0pdBDLRWWpR2.JPG",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_1390-min-CCeHTjNBXQCIO0WJc0O23M8c0qiVah.JPG",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_2007-min-GoooMScBdybT0BTa1mNaNzq2vhNabl.JPG",
    "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_2036-min-0wrB01qWnDZjZSFmMGkaepo72ziVfX.JPG"
  ]
  
  if(params.slug == "aitis"){
    return(
      <Gallery images={aitis}/>
    )
  }

  if(params.slug == "ying-yod"){
    return(
      <Gallery images={yingyod}/>
    )
  }

  return(
    <></>
  )
}