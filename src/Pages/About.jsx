import whitephone from "../images/white-iphone.png";
import greenphone from "../images/greeniphone.png";

function Nav(){
    return (         
        <nav className="h-screen w-[15vw] bg-black text-white fixed left-[-500px]">
            1F
        </nav>
    )
}
function Hero(){
    return (            
    <div className=" bg-black w-screen h-screen flex items-center justify-center">
        <h1 className="font-titanOne text-white text-7xl object-scale-down">What is the Iphone</h1>
        <img src={whitephone} alt="" />
    </div>)
}
function FakeParalex(){
    return (            
        <div className=" bg-black w-screen h-screen flex items-center justify-center flex-col">
        <h2 className="font-titanOne text-white text-4xl text-center mb-5">We can start off by saying <br />that the iPhone is many things</h2>
        <img src={greenphone} alt="" width={"750px"} />
    </div>
        )
}
function SlideShow(){
    return (            
        <div className="bg-black w-screen h-screen flex justify-center items-center shadow">
        <div className="bg-gray-500 h-[90%] w-[90%] ">

        </div>
    </div>
    )
}
function RedrirectModal(){
    return (            
        <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="font-titanOne text-7xl text-white">
        Have any questions
        </h1>
        <a className="bg-white w-fit text-black px-8 py-3 mt-5 rounded-[3rem] font-titanOne text-2xl" href="/contact">
          Contact US
        </a>
        </div>
    )
}
function About(){
    return (
        <div className="">
            <div>
            <Hero/>
            <FakeParalex/>
            <SlideShow/>
            <RedrirectModal/>
            </div>
        </div>

    )
}

export default About;