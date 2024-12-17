import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt: React.FC<{
  cls: string;
  options: {
    speed?: number;
    max?: number;
    "max-glare"?: number;
    gyroscope?: boolean;
  };
}> = ({ cls, options }) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(`.${cls}`) as HTMLElement, options);
  }, [options, cls]);
  return null;
};

export default Tilt;
