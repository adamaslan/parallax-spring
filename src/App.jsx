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
