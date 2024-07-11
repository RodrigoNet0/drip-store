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
      <HeroSection title={'Oferta especial'} provider={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} img={'./tenis.svg'}/>  <HeroSection title={'Oferta especial'} provider={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} img={'./tenis.3.png'} />
      <Collection />
      <SectionCollection />
      <Produtos />
      <HeroSection title={'Oferta especial'} provider={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} img={'./tenis.3.png'} />
    </>
  );
}
