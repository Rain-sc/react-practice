import { useLottie } from "lottie-react";
const style = {
  height: '100%',
  width: '100px',
};
interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: never[];
  layers: any[];
}

const useAnimation = (logo: AnimationData) => {
  const options = {
    animationData: logo,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default useAnimation;