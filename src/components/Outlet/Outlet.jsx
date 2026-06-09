import serviceImg from "../../assets/Project_pics/serviceimage.png";


import e263 from "../../assets/Project_pics/Ellipse 263.png";
import e264 from "../../assets/Project_pics/Ellipse 264.png";
import e266 from "../../assets/Project_pics/Ellipse 266.png";
import e267 from "../../assets/Project_pics/Ellipse 267.png";
import e268 from "../../assets/Project_pics/Ellipse 268.png";
import e269 from "../../assets/Project_pics/Ellipse 269.png";
import e270 from "../../assets/Project_pics/Ellipse 270.png";
import e348 from "../../assets/Project_pics/image 348.png";

export default function Outlet() {
  return (
    <section className="w-full bg-[#F5F5F5] overflow-hidden px-4 sm:px-6 py-16 md:py-20">
      {/* BODY SECTION */}
      <div
        id="studio"
        className="max-w-[1500px] mx-auto relative flex flex-col gap-16 md:gap-20"
      >
        <svg
          className="absolute left-[280px] top-[360px] hidden lg:block pointer-events-none z-0"
          width="900"
          height="420"
          viewBox="0 0 900 420"
          fill="none"
        >
          <path
            d="M20 220 C160 120 300 360 430 280 C560 200 560 40 720 80 C820 110 880 90 900 40"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            transform="translate(0 10)"
          />
          <path
            d="M20 220 C160 120 300 360 430 280 C560 200 560 40 720 80 C820 110 880 90 900 40"
            stroke="#FF6D6D"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* FIRST ROW */}
        <div className="grid lg:grid-cols-2 items-center gap-10 relative z-10">
          <div className="lg:pl-6 text-center lg:text-left">
            <h2
              className="text-[36px] sm:text-[48px] md:text-[72px] leading-[0.95]"
              style={{ fontFamily: "'Gerbil', sans-serif" }}
            >
              Tomorrow should
              <br />
              be better than{" "}
              <span className="bg-[#DDE9D8] px-4 rounded-full">today</span>
            </h2>

            <p
              className="mt-8 text-[16px] md:text-[18px] leading-[30px] md:leading-[34px] max-w-[520px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>

            <button
              className="mt-10 flex items-center gap-4 text-[18px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Read more <span>→</span>
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-8 right-10 w-[90px] h-[90px] md:w-[130px] md:h-[130px] bg-[#FF6D6D] rotate-12 z-0" />

            <img
              src={e348}
              alt=""
              className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[430px] lg:h-[430px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid lg:grid-cols-2 items-end gap-10 relative z-10">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute top-10 left-0 hidden lg:block w-0 h-0 border-l-[55px] border-r-[55px] border-b-[100px] border-l-transparent border-r-transparent border-b-[#FF6D6D]" />

            <img
              src={serviceImg}
              alt=""
              className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[430px] lg:h-[430px] rounded-full object-cover"
            />

            <div className="absolute bottom-[-20px] left-[260px] hidden lg:block w-0 h-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-[#FF6D6D]" />
          </div>

          <div className="pb-6 text-center lg:text-left">
            <h2
              className="text-[36px] sm:text-[48px] md:text-[70px] leading-[0.95]"
              style={{ fontFamily: "'Gerbil', sans-serif" }}
            >
              <span className="bg-[#DDE9D8] px-4 rounded-full">See</span> how we
              can
              <br />
              help you progress
            </h2>

            <p
              className="mt-8 text-[16px] md:text-[18px] leading-[30px] md:leading-[34px] max-w-[520px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>

            <button
              className="mt-10 flex items-center gap-4 text-[18px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Read more <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="max-w-[1400px] mx-auto relative mt-24 md:mt-40">
        <svg
          className="absolute right-0 top-0 hidden lg:block pointer-events-none"
          width="420"
          height="180"
          viewBox="0 0 520 230"
          fill="none"
        >
          <path
            d="M0 180C80 220 40 60 140 40C260 15 350 125 470 70C505 54 520 0 520 0"
            stroke="#FF6D6D"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <h2
          className="text-[36px] sm:text-[48px] md:text-[62px] leading-[0.95]"
          style={{ fontFamily: "'Gerbil', sans-serif" }}
        >
          What we{" "}
          <span className="inline-block px-4 bg-[#D7EEDD] rounded-full">
            can
          </span>
          <br />
          offer you!
        </h2>

        <div className="mt-12 md:mt-16 border-t border-black/20">
          <ServiceRow
            left="Office of multiple interest content"
            title="Colaborative & partnership"
          />

          <ServiceRow
            left="The hanger US Air force digital experimental"
            title="We talk about our weight"
          />

          <ServiceRow
            left="Delta faucet content, social, digital"
            title="Piloting digital confidence"
          />
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div
        id="faqs"
        className="max-w-[1200px] mx-auto relative mt-24 md:mt-32 min-h-auto md:min-h-[560px]"
      >
        {/* Hide floating avatars on mobile */}
        <img src={e263} alt="" className="absolute hidden md:block top-8 left-[80px] w-[70px] h-[70px] rounded-full object-cover" />
        <img src={e264} alt="" className="absolute hidden md:block top-[175px] left-[20px] w-[45px] h-[45px] rounded-full object-cover" />
        <img src={e266} alt="" className="absolute hidden md:block top-[330px] left-[0px] w-[70px] h-[70px] rounded-full object-cover" />
        <img src={e267} alt="" className="absolute hidden md:block top-[190px] left-[120px] w-[140px] h-[140px] rounded-full object-cover" />

        <img src={e268} alt="" className="absolute hidden md:block top-8 right-[80px] w-[80px] h-[80px] rounded-full object-cover" />
        <img src={e269} alt="" className="absolute hidden md:block top-[170px] right-[220px] w-[55px] h-[55px] rounded-full object-cover" />
        <img src={e348} alt="" className="absolute hidden md:block top-[250px] right-[190px] w-[70px] h-[70px] rounded-full object-cover" />
        <img src={e270} alt="" className="absolute hidden md:block top-[300px] right-[20px] w-[170px] h-[170px] rounded-full object-cover" />

        <div className="text-center relative z-10">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[54px] leading-[0.9]"
            style={{ fontFamily: "'Gerbil', sans-serif" }}
          >
            <span className="inline-block px-4 bg-[#D7EEDD] rounded-full">
              What
            </span>{" "}
            our customer
            <br />
            says About Us
          </h2>
        </div>

        <div className="max-w-[550px] mx-auto mt-12 bg-[#EEF5EE] rounded-[32px] px-6 md:px-10 py-8 md:py-10 relative z-10">
          <span className="absolute top-4 left-6 md:left-8 text-[50px] md:text-[72px] text-gray-300 leading-none">
            “
          </span>

          <p
            className="relative z-10 text-center text-[15px] md:text-[16px] leading-[28px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch.
          </p>

          <span className="absolute bottom-2 right-6 md:right-10 text-[50px] md:text-[72px] text-gray-300 leading-none">
            ”
          </span>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ left, title }) {
  return (
    <div className="grid md:grid-cols-[220px_1fr_50px] gap-4 md:gap-8 py-8 border-b border-black/20">
      <p
        className="text-[15px] leading-[28px]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {left}
      </p>

      <h3
        className="text-[28px] md:text-[46px] leading-[1]"
        style={{ fontFamily: "'Gerbil', sans-serif" }}
      >
        {title}
      </h3>

      <button className="text-[28px] md:text-[32px] hover:translate-x-1 transition-all">
        →
      </button>
    </div>
  );
}