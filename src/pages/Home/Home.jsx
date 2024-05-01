import BlogSection from "../components/BlogSection/BlogSection";
import Catagories from "../components/Catagories/Catagories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopRecipes from "../components/TopRecipeSection/TopRecipes";

export default function Home() {
  return (
    <div>
        <Header/>
        <Catagories/>
        <TopRecipes/>
        <BlogSection/>
        <Footer/>
    </div>
  )
}
