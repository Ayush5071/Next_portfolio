"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import TargetCursor from "../TargetCursor";

const CustomCursor = () => {
  // Only render the TargetCursor, no custom visuals
  return <TargetCursor targetSelector={".cursor-target"} spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />;
}

export default CustomCursor;
