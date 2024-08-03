// src/animation/animation.d.ts
declare module './animation.ts ' {
    export const textAnimation: {
      x: number;
      duration: number;
      opacity: number;
      stager: number;
    };
    
    export const navAnimation: {
      y: number;
      duration: number;
      opacity: number;
      stagger: number;
    };
  }
  