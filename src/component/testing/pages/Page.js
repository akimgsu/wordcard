import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Page = ({ isDark, setIsDark }) => {

    return (
        <div>
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
}

export default Page