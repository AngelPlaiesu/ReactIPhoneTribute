import secondpic from "../images/iphonetopnotch.png";

function Hero(){
  return (
    <div className="h-screen w-screen text-center flex justify-center items-center bg-white">
    <h1 className="text-black text-8xl font-titanOne ">Presenting</h1>
    </div>
  )
}
function Footer(){
  return (
    <div className="flex items-center bg-black text-white">
    <div className="flex flex-col text-center justify-self-start flex-1 justify-items-center items-center">
      <h1 className="text-center font-titanOne text-7xl mt-16">
        The <br/> Iphone
      </h1>
      <a className="bg-white w-fit text-black px-5 py-3 mt-5 rounded-3xl font-titanOne" href="/about">
        Learn More
      </a>
    </div>
    <div className="flex flex-col justify-self-end flex-1">
      <h2 className="text-center font-titanOne text-1xl mt-20">
        From $41.62/mo. for 24 mo. or $999 before trade‑in1</h2>
      <div className="ml-10">
        <img src={secondpic} alt="ee" className="object-scale-down " />
      </div>
    </div>
  </div>
  )
}
function Home() {
  return (
    <div>
      <div>
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
