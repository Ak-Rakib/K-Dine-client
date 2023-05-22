// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print"; 

const Blog = () => {
  const pdf = useRef();
  const generateToPdf = useReactToPrint({
        content: () => pdf.current,
  })
  return (
    <React.Fragment>
      <div className="bg-base-200 mb-20 md:p-14 lg:p-14">
        <div ref={pdf} style={{width:"100%"}}>
          <div className="bg-[#FC4F00] text-white p-5 rounded mb-10 shadow-lg transform hover:scale-110 transition duration-300">
            <h3 className="font-bold text-2xl">
              Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p className="text-gray-300">
              Uncontrolled components are those that are not regulated or
              managed by the system or process. These components operate
              independently and can potentially create variations or deviations
              from the expected outcome. Uncontrolled components can include
              external factors such as weather, human behavior, or market
              conditions, as well as internal factors such as equipment failure
              or maintenance issues. Uncontrolled components can significantly
              impact the performance and results of the system or process. On
              the other hand, controlled components are those that are regulated
              or managed by the system or process. These components are designed
              to operate within a specified range of conditions to ensure
              consistency and reliability. Controlled components can include
              equipment that is calibrated and maintained regularly, protocols
              that dictate standard operating procedures, or automation that
              enforces specific conditions or actions.
            </p>
          </div>
          <div className="bg-[#FC4F00] text-white p-5 rounded mb-10 shadow-lg transform hover:scale-110 transition duration-300">
            <h3 className="font-bold text-2xl">
              How to validate React props using PropTypes
            </h3>
            <p className="text-gray-300">
              React provides a built-in library called PropTypes for validating
              the props passed to a component. PropTypes is a typechecking
              library that can be used to define the types and shapes of props
              that are expected by a component.PropTypes supports a variety of
              data types including arrays, booleans, numbers, objects, and
              functions. It also supports defining shape objects to validate
              nested data structures. By using PropTypes to validate props, you
              can catch potential issues early in development and ensure that
              your components are being used correctly.
            </p>
          </div>
          <div className="bg-[#FC4F00] text-white p-5 rounded mb-10 shadow-lg transform hover:scale-110 transition duration-300">
            <h3 className="font-bold text-2xl">
              Tell us the difference between nodejs and express js.
            </h3>
            <p className="text-gray-300">
              Node.js and Express.js are both JavaScript-based technologies used
              for building server-side web applications. However, they serve
              different purposes and have different functionalities. Node.js is
              a JavaScript runtime built on top of the V8 engine, which allows
              developers to write server-side applications in JavaScript. It
              provides an environment for executing JavaScript code outside of a
              browser, enabling developers to create server-side applications
              that can interact with databases, file systems, and other network
              services. Node.js also has a rich ecosystem of modules and
              libraries available through npm (Node Package Manager), making it
              easy to add functionality to your applications. Express.js is a
              framework built on top of Node.js that provides a more structured
              way of building web applications. It provides a set of libraries
              and tools for building web applications, such as middleware
              functions for handling requests and responses, routing for mapping
              requests to specific handlers, and template engines for rendering
              views. Express.js also allows for easy integration with other
              libraries and tools, making it a popular choice for building
              web applications.
            </p>
          </div>
          <div className="bg-[#FC4F00] text-white p-5 rounded mb-10 shadow-lg transform hover:scale-110 transition duration-300">
            <h3 className="font-bold text-2xl">
              What is a custom hook, and why will you create a custom hook?
            </h3>
            <p className="text-gray-300">
              In React, a custom hook is a JavaScript function that allows you
              to reuse stateful logic across different components. It's a way to
              abstract away common patterns of stateful logic so that it can be
              reused in different components without repeating code. Someone
              create a custom hook when one have a common stateful logic that is
              used in multiple components, and want to keep it in a single place
              so that it can be easily reused. Custom hooks allows one to
              encapsulate stateful logic and share it between components in a
              more flexible and composable way than traditional higher-order
              components or render props.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button onClick={generateToPdf} className="btn bg-[#FC4F00] border-0">Download PDF</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
