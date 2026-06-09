import e255 from "../../assets/Project_pics/Ellipse 255.png";
import e256 from "../../assets/Project_pics/Ellipse 256.png";
import e257 from "../../assets/Project_pics/Ellipse 257.png";
import e258 from "../../assets/Project_pics/Ellipse 258.png";
import e259 from "../../assets/Project_pics/Ellipse 259.png";
import e260 from "../../assets/Project_pics/Ellipse 260.png";
import e261 from "../../assets/Project_pics/Ellipse 261.png";
import e262 from "../../assets/Project_pics/Ellipse 262.png";

const avatars = [
  { src: e260, left: "1%", bottom: "40px" },
  { src: e256, left: "13%", bottom: "75px" },

  { src: e255, left: "29%", bottom: "180px" },
  { src: e258, left: "38%", bottom: "20px" },
  { src: e259, left: "54%", bottom: "115px" },

  { src: e257, right: "28%", bottom: "55px" },
  { src: e261, right: "13%", bottom: "145px" },
  { src: e262, right: "3%", bottom: "60px" },
];

const Av = ({ src, style }) => (
  <div
    className="absolute rounded-full overflow-hidden bg-gray-200"
    style={{
      width: "140px",
      height: "140px",
      border: "4px solid white",
      boxShadow: "0 10px 25px rgba(0,0,0,0.16)",
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
      className="w-full bg-white relative overflow-hidden px-4 pt-[110px]"
      style={{ minHeight: "820px" }}
    >
      {/* Left Decoration */}
      <svg
        className="absolute hidden lg:block pointer-events-none"
        style={{
  left: "10px",
  top: "115px",
  width: "120px",
  height: "360px",
}}
        viewBox="0 0 90 300"
        fill="none"
      >
        <path
          d="M60 10 C10 55, 80 110, 18 175 C-8 210, 72 255, 28 300"
          stroke="#111"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M72 22 C28 75, 88 138, 36 202 C6 233, 66 268, 40 298"
          stroke="#FF6D6D"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Purple Shape */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          right: "140px",
          top: "125px",
          width: "70px",
          height: "88px",
          backgroundColor: "#7C3AED",
          borderRadius: "0 50px 50px 0",
          transform: "rotate(25deg)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1
          className="text-black text-center w-full"
          style={{
            fontFamily: "'Gerbil', 'Nunito', sans-serif",
            fontSize: "clamp(38px, 5.4vw, 88px)",
            fontWeight: 400,
            lineHeight: "1.05",
            maxWidth: "1100px",
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
            and
          </span>

          <span className="block">
            doers were{" "}
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

        <p
          className="text-black text-center mt-5 max-w-xl"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to play
          things safe.
        </p>
      </div>

      {/* Desktop Avatars */}
      <div className="hidden md:block absolute left-0 right-0 bottom-0 h-[380px] z-10">
        {avatars.map((avatar, index) => (
          <Av
            key={index}
            src={avatar.src}
            style={{
              left: avatar.left,
              right: avatar.right,
              bottom: avatar.bottom,
            }}
          />
        ))}
      </div>

      {/* Mobile Avatars */}
      <div className="md:hidden relative z-10 mt-12 flex flex-wrap justify-center gap-4 pb-12">
        {[e255, e256, e257, e258, e259, e260, e261, e262].map((img, index) => (
          <div
            key={index}
            className="rounded-full overflow-hidden bg-gray-200"
            style={{
              width: 90,
              height: 90,
              border: "3px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}