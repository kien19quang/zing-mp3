import { useEffect, useState } from "react";
import Gallery from "~/components/Gallery";

function Home() {
    const [showGallerry, setShowGallery] = useState(false);
    useEffect(() => {
        setShowGallery(true);
    }, []);

    return <div> {showGallerry && <Gallery />}</div>;
}

export default Home;