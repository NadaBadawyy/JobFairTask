import HomeProducts from "../components/HomeProducts";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <>
    <LandingPage/>
    <p className="text-3xl text-center text-primary my-7 font-bold">Top Rating Products</p>
    <HomeProducts/>  
    </>
  )
}
