import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";


function NoSidebarLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default NoSidebarLayout;