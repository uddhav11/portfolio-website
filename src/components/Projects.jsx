// import React from "react";
// import { FaCode } from "react-icons/fa6";
// import Projectdata from "./data";

// const Projects = () => {
//   return (
//     <div>
//       {/* <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//         <div className="flex flex-col w-full mb-20">
//           <CodeIcon className="mx-auto inline-block w-10 mb-4" />
//           <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-white">
//             Apps I have Built
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
//             quidem. Fugit, non? In pariatur vel, libero aut voluptatem vero
//             nesciunt asperiores quos animi laboriosam illum dolore eveniet
//             doloribus officia laudantium!
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {Projectdata.map((project) => (
//             <>
//               <a
//                 href={project.link}
//                 key={project.link}
//                 className="sm:w1/2 w-100 p-4"
//               >
//                 <div className="flex relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                   />
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h2 className="traking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
//                     <p className="leading-relaxed">dadasdas{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             </>
//           ))}
//         </div>
//       </section> */}

// <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-20">
//           <FaCode className="mx-auto inline-block w-10 mb-4" />
//           <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//             Apps I've Built
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//           Examine My work in my portfolio serve as evidence of my enthusiasm for creating dynamic user experiences. Explore my portfolio to see for yourself the commitment, originality, and life-changing potential of React. <br />
//           (Click to see code)

//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {Projectdata.map((project) => (
//             // <a
//             //   href={project.link}
//             //   key={project.image}
//             //   className="sm:w-1/2 w-100 p-4">
//             <div className="sm:w-1/2 w-100 p-4">
//                 <div className="flex relative ">
//                 <img
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
//                   src={project.image}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                     {project.subtitle}
//                   </h2>
//                   <h1 className="title-font text-xl font-medium text-white mb-3">
//                     {project.title}
//                   </h1>
//                   <a href={project.link} className="border border-gray-100 px-4 py-2 rounded-xl font-bold text-white ">Preview</a>
//                   <p className="leading-relaxed">{project.description}</p>
//                 </div>
//               </div>
//             </div>
              
//             // </a>
//           ))}
//         </div>
//       </div>
//       </section>


//     </div>
//   );
// };

// export default Projects;









import React from "react";
import { FaCode } from "react-icons/fa6";
import Projectdata from "./data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Examine my work in my portfolio as evidence of my enthusiasm for creating dynamic user experiences. Explore my portfolio to see the commitment, originality, and potential of React. <br />
            (Click to see code)
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {Projectdata.map((project) => (
            <div
              key={project.title}
              className="sm:w-1/2 w-full p-4"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden">
                {/* Project image */}
                <img
                  alt={project.title}
                  src={project.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 border-4 border-gray-800">
                  <h2 className="tracking-widest text-sm font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-xl font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-100 px-4 py-2 rounded-xl font-bold text-white mb-3"
                  >
                    Preview
                  </a>
                  <p className="leading-relaxed text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
