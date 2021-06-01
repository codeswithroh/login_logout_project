import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Home from "./Home";
import "./User.css";
import "./Home.css";

export default function Space() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div id='space_background'>
        <Canvas>
          <OrbitControls />
          <Stars />
        </Canvas>

        <div id="space" style={{ position: "absolute", zIndex: "5", top:"10em",right:"25em"}}>
          <iframe
            width='540em'
            height='300em'
            src='https://www.youtube.com/embed/9AYl10qxc0M?autoplay=1'
            title='YouTube video player'
            frameborder='2px solid white'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <Home />
      </div>
    </div>
  );
}
