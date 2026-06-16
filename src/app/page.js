import GallerySection from "./Components/GallerySection";
import GalleryBox from "./Components/GalleryBox";
import MoveGallery from "./Components/MoveGallery";
import Fullimg from "./Components/Fullimg";
import Toaste from "./Components/Toaste";

export default function Home() {  
  return (
    <>
      <Toaste />
    <Fullimg />
      <GalleryBox />
      <GallerySection />
      <MoveGallery/>
      
    </>
  );
}