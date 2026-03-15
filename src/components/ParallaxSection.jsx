/* Note Work on adding utility class components on Step 3 Repeat for other components: 
 - Follow a similar apporach to appy Tailwind CSS utility classes to the ParallaxSection and ContentSection components
 
 - Refer to the design specifications or mockups to determine the appropriate styling for each component. 
 
 - Also create reusable components for smaller UI elements (e.g. buttons, cards and style them using Tailwind CSS classes. 
    
    
4. Test and Iterate: 
  - Save changes and check how components look on my browser.
  
  - Adjust the Tailwind CSS classes as needed to achieve the desired styling. 
  
  - Iterate and refine the styles until you're satisfied with the result. 

  Tip: By using Tailwind CSS utility classes directly in your React components, you can quickly style your UI elements without writing custom CSS rules. Tailwind CSS provides a comprehensive set of utility classes for styling typography, layout, colors, spacing, and more. 
  */
import React from "react";

const ParallaxSection = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <img
        src="/path/to/your/moon-image.jpg"
        alt="Moon"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
      />
      <img
        src="/path/to/your/mountains-behind-image.jpg"
        alt="Mountains Behind"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
      <img
        src="/path/to/your/mountains-front-image.jpg"
        alt="Mountains Front"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10"
      />
      <img
        src="/path/to/your/stars-image.jpg"
        alt="Stars"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
      <h2 className="absolute right-0 text-white text-6xl whitespace-nowrap z-10">
        Moon Light
      </h2>
      <a
        href="#"
        className="absolute bottom-20 px-8 py-2 bg-white text-black rounded-full text-xl z-10"
      >
        Explore
      </a>
    </section>
  );
};

export default ParallaxSection;
