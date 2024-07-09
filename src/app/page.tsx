// import CardPage from "@/pages/Card";
// import Dash from "@/pages/Dashboard/Dash";
import SubHeader from "@/pages/SubHeader/SubHeader";
import HeroSection from "@/pages/HeroSection/HeroSection";
import Collection from "@/pages/Collection/Collection";
import Header from "@/pages/Header/Header";
import SectionCollection from "@/pages/SectionCollection/SectionCollection";
import Produtos from "@/pages/Produtos/Produtos";



export default function Home() {
  return (
    <>
     <Header />
      <SubHeader />
      <HeroSection /> 
      <Collection />
      <SectionCollection />
      <Produtos />
    </>
  );
}
