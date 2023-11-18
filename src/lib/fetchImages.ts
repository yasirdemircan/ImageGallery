import { ImagesResult, ImagesSchemaWithPhotos } from "@/models/Images";


export default async function
    getImages(url: string): Promise<ImagesResult | undefined> {

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.PEXELS_API_KEY as string,
            }
        })

        if (!res.ok) {
            throw new Error("Could not get images \n")
        }

        const ImagesResults: ImagesResult = await res.json();
        console.log(ImagesResults)
        //parse with zod
        const parsedData = ImagesSchemaWithPhotos.parse(ImagesResults);
        if (parsedData.total_results === 0) {
            return undefined
        }


        
        
        

        return ImagesResults

    } catch (e) {
        if (e instanceof Error) {
            console.log(e.stack)
        }
    }
}