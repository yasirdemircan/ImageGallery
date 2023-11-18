import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResult } from "@/models/Images";

async function getBase64(url: string) {

    try {

        const req = await fetch(url);
        if (!req.ok) {
            throw new Error("Blur fetch error: ${req.status} ")
        }

        const buffer = await req.arrayBuffer();
        const { base64 } = await getPlaiceholder(
            Buffer.from(buffer)
        )

        return base64

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

export default async function addBlurUrls(imageResults: ImagesResult): Promise<Photo[]> {
    let photosArr: Photo[] = []
    //dont await create promises
    const base64promises = imageResults.photos.map((photo) => (getBase64(photo.src.large))

    );

    const base64Results = await Promise.all(base64promises)

    const imagesWithBlur: Photo[] = imageResults.photos.map((photo, index) => {
        return { ...photo, blurredDataUrl: base64Results[index] }
    })

    console.log(imagesWithBlur)
    return imagesWithBlur
}

