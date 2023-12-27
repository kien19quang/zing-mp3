import { useEffect, useState } from "react";
import Audio from "~/components/Controls/ProgressBar/Audio";
import Gallery from "~/components/Gallery";
import Content from "~/layouts/components/Content/Content";

function Home() {
    const [showGallerry, setShowGallery] = useState(false);
    useEffect(() => {
        setShowGallery(true);
    }, []);

    return (
        <div>
            {showGallerry && <Gallery />}
            <Audio />
            <Content />
        </div>
    )
}

export default Home;