import Image from "next/image";
import type { Photo } from "@/models/Images";
import React from 'react'
import Link from "next/link";

type Props = {
  image: Photo
}
export default function ImgContainer({ image }: Props) {

  const widthHeightRatio = image.height/image.width
  const galleryHeight = Math.ceil(250*widthHeightRatio)
  const photoSpans = Math.ceil(galleryHeight/10) +1

  return (
    <div className="w-[250px] justify-self-center"
    style={{gridRow: "span " + photoSpans}}
    >
    <Link href={image.url} target="_blank" className="grid place-content-center">

    <div className="rounded-xl overflow-hidden group">
    <Image
        src={image.src.large}
        blurDataURL={image.blurredDataUrl}
        width={250}
        height={galleryHeight}
        placeholder="blur"
        className=" group-hover:opacity-75"
        alt={image.alt}
        sizes="250px"
      >
      </Image>
      </div> 
      </Link>
    </div>
  )


}
