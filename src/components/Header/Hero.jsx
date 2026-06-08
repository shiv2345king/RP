import e255 from "../../assets/Project_pics/Ellipse 255.png";
import e256 from "../../assets/Project_pics/Ellipse 256.png";
import e257 from "../../assets/Project_pics/Ellipse 257.png";
import e258 from "../../assets/Project_pics/Ellipse 258.png";
import e259 from "../../assets/Project_pics/Ellipse 259.png";
import e260 from "../../assets/Project_pics/Ellipse 260.png";
import e261 from "../../assets/Project_pics/Ellipse 261.png";
import e262 from "../../assets/Project_pics/Ellipse 262.png";

const Av = ({ src, size, style }) => (
  <div
    className="rounded-full overflow-hidden bg-gray-200 flex-shrink-0"
    style={{
      width: size,
      height: size,
      border: "3px solid white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      ...style,
    }}
  >
    <img src={src} alt="" className="w-full h-full object-cover" />
  </div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-white flex flex-col items-center text-center relative overflow-hidden"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* LEFT squiggle */}

      <svg
        className="absolute hidden lg:block pointer-events-none"
        style={{
          left: "20px",
          top: "60px",
          width: "160px",
          height: "520px",
        }}
        viewBox="0 0 90 300"
        fill="none"
      >
        <path
          d="M60 10 C10 55, 80 110, 18 175 C-8 210, 72 255, 28 300"
          stroke="#111"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M72 22 C28 75, 88 138, 36 202 C6 233, 66 268, 40 298"
          stroke="#FF6D6D"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* RIGHT purple triangle */}

      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          right: "40px",
          top: "120px",
          width: "70px",
          height: "88px",
          backgroundColor: "#7C3AED",
          clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
        }}
      />

      {/* Heading */}

      <h1
        className="relative z-10 text-black text-center px-4"
        style={{
          fontFamily: "'Gerbil', 'Nunito', sans-serif",
          fontSize: "clamp(36px, 5.5vw, 88px)",
          fontWeight: 400,
          lineHeight: "1.15",
          maxWidth: "1000px",
        }}
      >
        <span className="block">
          The{" "}
          <span className="relative inline-block">
            thinkers
            <span
              className="absolute left-0 w-full"
              style={{
                height: "5px",
                backgroundColor: "#FFC250",
                borderRadius: "3px",
                bottom: "2px",
                zIndex: -1,
              }}
            />
          </span>{" "}
          and doers
        </span>

        <span className="block">
          were{" "}
          <span
            className="inline-block px-4 py-1"
            style={{
              backgroundColor: "#FFC2EA",
              borderRadius: "50px",
            }}
          >
            changing
          </span>
        </span>

        <span className="block">
          the{" "}
          <span
            className="inline-block px-4 py-1"
            style={{
              backgroundColor: "#D7EEDD",
              borderRadius: "50px",
            }}
          >
            status
          </span>{" "}
          Quo with
        </span>
      </h1>

      {/* Subtext */}

      <p
        className="relative z-10 text-black text-center mt-8"
        style={{
          fontFamily: "'Satoshi', 'DM Sans', sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "30px",
          maxWidth: "580px",
        }}
      >
        We are a team of strategists, designers communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>

      {/* Avatar row */}

      <div
        className="relative z-10 w-full mt-12 flex items-end justify-between px-8"
        style={{
          maxWidth: "1200px",
        }}
      >
        {/* Group 1 */}

        <div className="flex items-end">
          <Av
            src={e262}
            size={130}
            style={{
              marginRight: "-30px",
              zIndex: 1,
            }}
          />

          <Av
            src={e261}
            size={130}
            style={{
              marginBottom: "35px",
              zIndex: 2,
            }}
          />
        </div>

        {/* Group 2 */}

        <div
          className="flex items-start"
          style={{
            position: "relative",
            width: 260,
            height: 220,
          }}
        >
          <Av
            src={e255}
            size={130}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          <Av
            src={e256}
            size={130}
            style={{
              position: "absolute",
              top: 90,
              left: 145,
            }}
          />
        </div>

        {/* Group 3 */}

        <div className="flex items-end">
          <Av
            src={e257}
            size={130}
            style={{
              marginBottom: "20px",
              marginRight: "-15px",
              zIndex: 1,
            }}
          />

          <Av
            src={e258}
            size={130}
            style={{
              zIndex: 2,
              marginRight: "-15px",
            }}
          />
        </div>

        {/* Group 4 */}

        <div
          className="flex items-start"
          style={{
            position: "relative",
            width: 260,
            height: 220,
          }}
        >
          <Av
            src={e259}
            size={130}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          <Av
            src={e260}
            size={130}
            style={{
              position: "absolute",
              top: 90,
              left: 145,
            }}
          />
        </div>
      </div>

      {/* Button */}
<a href="#studio">
      <button 
        className="relative z-10 mt-10 px-10 py-4 bg-black text-white hover:bg-gray-800 transition-colors duration-200"
        style={{
          fontFamily: "'Satoshi', 'DM Sans', sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          borderRadius: "100px",
        }}
      >
        Get Started
      </button>
      </a>
    </section>
  );
}