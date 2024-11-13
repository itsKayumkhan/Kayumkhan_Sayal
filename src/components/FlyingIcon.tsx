import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FlyingIcon = ({ icon }: { icon: React.ReactNode }) => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  // Generate random top position within the container bounds
  const randomTop = `${Math.random() * 80 + 10}%`; // Random between 10% and 90% of the container height

  useEffect(() => {
    if (iconRef.current) {
      // Animate the icon flying from left to right
      gsap.fromTo(
        iconRef.current,
        {
          x: "-120%", // Starting from left outside the container
          y: randomTop, // Use the random top value
        },
        {
          x: "120%", // Fly to the right end
          duration: 5 + Math.random() * 15, // Randomize the animation duration (5-10 seconds)
          ease: "power1.inOut", // Smooth easing
          repeat: -1, // Repeat the animation indefinitely
        }
      );
    }
  }, [randomTop]);

  return (
    <div ref={iconRef} className="absolute z-[-1] w-full h-full opacity-75">
      {icon}
    </div>
  );
};

export default FlyingIcon;
