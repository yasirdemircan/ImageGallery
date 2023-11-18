import Gallery from "@/app/components/Gallery";
type Props = {
    params: {
        params: (string | undefined[])
    }
}

export function generateMetadata({
    params: {
        params
    }
}: Props) {

    const topic = params?.[0] ?? "curated";
    const page = params?.[1] ?? "1"

    return {
        title: "Results for " + topic +"-Page " + page
    }
}
export default function SearchResults({
    
    params: {
       params
    }
}: Props){
    const topic = params?.[0] ?? "curated";
    const page = params?.[1] ?? "1"



    return <Gallery topic = {topic} page = {page}></Gallery>
}