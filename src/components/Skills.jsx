import React from 'react'
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaMicrochip } from "react-icons/fa6";
import { skillThatIKnow } from './data.jsx';

const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <FaMicrochip className='w-10 inline-block mb-4' />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Skills and Technology That I Know</h1>
          <p className='text-base leading-relaxed xl;w-3/4 mx-auto'> My area of expertise is React, where I like creating attention-grabbing, dynamic user experiences. I precisely layout and style web material by utilizing HTML,CSS and others online tools resulting in a visually pleasing desgin and layout that lies with industry standards. My preferred programming language for developing dynamic features and improving interactivity is JavaScript.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto am:mb-2 -mx-2">
          {skillThatIKnow.map((skill)=> (
            
              <div key={skill} className='p-2 sm:w-1/2 w-full'>
                <div className="bf-gray-800 rounded flex p-4 h-full items-center">
                  <BiSolidBadgeCheck className='text-green-400 w-6 h-6 flex-shrink-0 mr-4' />
                  <span className="title-font font-medium text-white">
                    {skill.name}
                  </span>
                </div>
              </div>
    
          ))}
        </div>
      </div>
      </section>
      
    </div>
  )
}

export default Skills;
