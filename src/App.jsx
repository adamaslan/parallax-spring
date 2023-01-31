import { useRef } from "react";
import art from "../conceptart5.png";
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
          <h1>Shalma...awaiting...</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={20}
          speed={0}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>
            the combination of dual inner peace and pulsating feelings of love
            echoing empathy reverberating into the most beautiful valleys and
            the most inspiring mountains in the universe :{")"}
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
