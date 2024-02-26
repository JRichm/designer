import Image from "next/image";
import MainHeader from "./components/mainHeader";
import Hero from "./components/hero";
import tempImage from "../public/images/temp.png"
import Footer from "./components/footer";


export default function Home() {

  const Tiles = () => {
    let tileComponents = []
    for (let i = 0; i < 4; i++) {
      let tileComponent = (
        <div>
          <p>tile data</p>
        </div>
      )
      tileComponents.push(tileComponent)
    }

    return (
      <div className="grid grid-cols-2 mx-64 gap-5 my-5">
        {
          tileComponents.map((tile, index) => (
            <div key={`tile-${index}`} className="border border-gray-100 aspect-square">
              <label>tile label</label>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <main>
      <MainHeader />
      <span className="flex justify-center gap-12 text-md font-medium p-3">
        <a href="/">Womens</a>
        <a href="/">Mens</a>
        <a href="/">Acme Home</a>
        <a href="/">Seasonal</a>
        <a href="/">Sale</a>
      </span>
      <Hero />
      <Tiles />
      <Footer />
    </main>
  );
}
