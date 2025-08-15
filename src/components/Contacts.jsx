import React, {useState} from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode=(data) => {
    return Object.keys(data).map(
      (key) => encodeURIComponent(key)+ "=" + encodeURIComponent(data[key])
    )
    .join("&")
  }

  const handleSubmit=(e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "contact", name, email, message}),
    })
    .then(() => alert("Message Sent"))
    .catch((err)=> alert(err))
  }
  return (
    <div>
      <section id="contact" className="relative">
        <h1 className="font-medium text-3xl mb-1 tite-font text-white sm:text-6xl text-center">How to Find Me</h1>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Dharan,+Nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              frameBorder={0}
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              marginHeight={0}
              margineWidth={0}
              style={{ filter: "opacity(0.7)" }}
            ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 px-9 rounded shadow-md">
              <div className="lg:w-1/2 px-3">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  Address
                </h2>
                <p className="mt-1">Dharan, Nepal</p>
              </div>
              <div className="lg:w-1/2 px-3 py-1 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                auddhav074@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tranking-widest text-xs mt-4">
                Phone
              </h2>
              <p className="leading-relaxed">9800000000</p>
              </div>
            </div>
          </div>
          <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Want tO Hire Me
          </h1>
          <p className="leading-relaxed mb-5 text-center">
          My path as a self-made developer is a reflection of my dedication to learning and keeping up with current business trends. I've completed a number of projects successfully, showcasing my capability to convert ideas into excellent solutions. In addition to my technical proficiency, what makes me unique is my commitment to providing outcomes that go above and beyond.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 capitalize rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outlined-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="reltive mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outlined-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative md-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="w-full bg-gray-800  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 focus:outlined-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </form>
        </div>
        
      </section>
    </div>
  );
};

export default Contacts;
