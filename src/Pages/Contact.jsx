function Link1() {
  return (
    <div className="bg-violet-900 p-3 py-5 h-fit rounded-[2rem] relative left-10">
      <div className="w-72 bg-white h-[80vh] rounded-[2rem] flex flex-col items-center">
        <h2 className="mt-5 bg-violet-900 h-fit p-2 px-10 rounded-2xl font-titanOne text-white">
          Links
        </h2>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-slate-800 p-3 py-5  h-fit rounded-[2rem] z-10">
      <div className="w-80 bg-white h-[85vh] rounded-[2rem] flex flex-col items-center">
        <h2 className="mt-5 bg-violet-900 h-fit p-2 px-10 rounded-2xl font-titanOne text-white">
          Contact Us
        </h2>
        <div className="p-5">
          <form action="" className="bg-slate-800  flex flex-col items-center p-4">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit" className="h-fit p-2 px-10 rounded-2xl font-titanOne text-white bg-amber-900 mt-5">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-rose-800 p-3 py-5  h-fit rounded-[2rem] relative right-10">
      <div className="w-72 bg-white h-[80vh] rounded-[2rem] flex flex-col items-center">
        <h2 className="mt-5 bg-rose-800  p-2 px-10 rounded-2xl font-titanOne">
          Links
        </h2>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white">
      <div className="h-screen w-screen bg-black flex justify-center aling items-end">
        <Link1 />
        <Form />
        <Link2 />
      </div>
    </div>
  );
}

export default Contact;
