
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function ParticlesBox() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        particles: {
          number: {
            value: 60,
            limit: 70,
            density: {
              enable: true,
              value_area: 80
            }
          },
          color: {
            value: "#FFFF8F"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 500
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 10,
              sync: false
            }
          },
          links: {
            enable: false
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },

        detectRetina: true,
        fpsLimit: 60,

      }}
    />
  );
}