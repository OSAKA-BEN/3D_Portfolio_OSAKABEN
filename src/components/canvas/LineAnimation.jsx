import React, { useEffect, useRef } from 'react';
import { useRive } from "@rive-app/react-canvas";
import animationData from '../../assets/line-animation.riv';

const LineAnimation = () => {
  const { RiveComponent, rive } = useRive({
    src: animationData,
    stateMachines: "State Machine 1",
    artboard: "lines",
    autoplay: true,
    onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });

  return <RiveComponent style={{ width: '100%', height: '600px'}} />;
};

export default LineAnimation;
