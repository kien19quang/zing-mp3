import { useEffect, useState } from "react";
import Content from "~/layouts/components/Content/Content";
import { getHome } from "~/services/getHomeApi";

function Home() {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        getHome()
            .then(dataContent => {
                const items = dataContent.items.map(section => {
                    return {
                        sectionType: section.sectionType,
                        sectionId: section.sectionId,
                        title: section.title,
                        items: section.items,
                        link: section.link,
                        viewType: section.viewType,
                        chart: dataContent.data
                    };
                });

                setItems(items);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        return () => { };
    }, []); // Dependency array trống đại diện cho việc useEffect chỉ chạy một lần khi component mount


    return (
        <div>
            {Items.length > 0 && <Content items={Items} />}
        </div>
    )
}

export default Home;