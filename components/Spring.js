import { useSpring, animated } from "@react-spring/web";

function Spring1() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    width: 80,
    height: 80,
    background: "#ff6d6d",
    borderRadius: 8,
    ...springs,
  });

  return <animated.div style={{ props }} />;
}

export default Spring1;
