import BlogSection from "../components/BlogSection/BlogSection";
import Catagories from "../components/Catagories/Catagories";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
        <Header/>
        <Catagories/>
        <BlogSection/>
    </div>
  )
}
