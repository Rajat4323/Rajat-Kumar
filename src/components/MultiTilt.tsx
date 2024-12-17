import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const MultiTilt: React.FC<{
  cls: string;
  options: {
    speed?: number;
    max?: number;
    "max-glare"?: number;
    gyroscope?: boolean;
  };
}> = ({ cls, options }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${cls}`);
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, options);
    });
  }, [options, cls]);
  return null;
};

export default MultiTilt;
