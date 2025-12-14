import React from "react";
import TargetCursor from "../components/TargetCursor";
import "../components/TargetCursor.css";

const GlobalCursor = () => <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />;

export default GlobalCursor;
