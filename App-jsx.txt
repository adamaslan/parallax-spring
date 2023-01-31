import { useRef } from "react";
import art from "../conceptart5.png";
// import land from './land.png';
import clam from "../clamgirls6.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={20.5} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0.2}
          speed={0.02}
          factor={20}
          style={{
            backgroundImage: `url(${art})`,
            backgroundSize: "100% 100%",
            textAlign: "center",
          }}
        />

        {/* <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer> */}

        <ParallaxLayer sticky={{ start: 0.2, end: 20.5 }} factor={0.75}>
          <img src={clam} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.05}
          onClick={() => ref.current.scrollTo(19)}
        >
          <h1>We all know that Shalma...</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={20}
          speed={0}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>
            ...is a beautiful vibrant soul sparkling so brightly inspiring Adam{" "}
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

// import { useState } from "react";

// import "./App.css";
// import Spring1 from "../components/spring";
// import Sometext1 from "../components/Sometext1";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <Spring1 />
//       <Sometext1 />
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

// export default App;
