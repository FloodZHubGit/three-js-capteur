import { Arriere } from "./Arriere";
import { FacadeCapteur } from "./FacadeCapteur";
import { Gauche } from "./Gauche";
import { Droit } from "./Droit";
import { Socle } from "./Socle";
import { Toit } from "./Toit";
import { CapteurInterne } from "./CapteurInterne";
import { useRef } from "react";
import { gsap } from "gsap";

export function Capteur() {
  const facade = useRef();
  const toit = useRef();
  const capteurInterne = useRef();

  return (
    <>
      <Arriere />

      <group
        ref={facade}
        onClick={(e) => {
          if (facade.current.position.x === 0) {
            gsap.to(facade.current.position, {
              duration: 1.5,
              x: -35,
            });
          }
        }}
      >
        <FacadeCapteur />
      </group>

      <group
        ref={capteurInterne}
        onClick={(e) => {
          if (
            capteurInterne.current.position.x === 0 &&
            capteurInterne.current.position.z === 0 &&
            facade.current.position.x === -35 &&
            toit.current.position.y === 25
          ) {
            gsap.to(capteurInterne.current.position, {
              duration: 1.5,
              y: 25,
            });
            gsap.to(capteurInterne.current.position, {
              duration: 1.5,
              z: 40,
              delay: 1.5,
            });
            gsap.to(capteurInterne.current.position, {
              duration: 1.5,
              y: 0,
              delay: 3,
            });
          }
        }}
      >
        <CapteurInterne />
      </group>

      <Gauche />
      <Droit />
      <Socle />

      <group
        ref={toit}
        onClick={(e) => {
          if (toit.current.position.x === 0) {
            gsap.to(toit.current.position, {
              duration: 1.5,
              y: 25,
            });
          }
        }}
      >
        <Toit />
      </group>
    </>
  );
}
