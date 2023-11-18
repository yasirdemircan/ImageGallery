import getImages from "@/lib/fetchImages";
import type { ImagesResult } from "@/models/Images";
import addBlurUrls from "@/lib/getBase64";
import React from 'react'
import ImgContainer from "./ImgContainer";
import getPrevNextPage from "@/lib/getPrevNextPage";

import Footer from "./Footer";

type Props = {
  topic?: string | undefined
  page?: string | undefined
}
export default async function Gallery({ topic = "curated", page }
  : Props) {
  let url
  if (topic === "curated" && page) { // currated next pages 

    url = "https://api.pexels.com/v1/curated?page=" + page

  } else if (topic === "curated") { // curated no page
    url = "https://api.pexels.com/v1/curated"
  } else if (!page) { // no page search
    url = "https://api.pexels.com/v1/search?query=" + topic
  } else {//search term + page 
    url = "https://api.pexels.com/v1/search?query=" + topic + "?page=" + page
  }

  const images: ImagesResult | undefined = await getImages(url);
  if (!images || images.per_page === 0) {
    return <h2 className="m-4 text-2xl font-bold">Not Found</h2>
  }
  const ImagesWithBlur = await addBlurUrls(images)

  //calculate pagination
  const {prevPage,nextPage} = getPrevNextPage(images)

  const footerProps = {
    topic,page,nextPage,prevPage
  }


  return (
    <>
    <section className="w-6xl px-1 my-3 grid grid-cols-gallery
    auto-rows-[10px]" >

      {
        ImagesWithBlur.map(image => (
          ImgContainer({ image })

        ))}

    </section>
<Footer {...footerProps} ></Footer>
    {/*Add footer*/}
    </>
  )
}
