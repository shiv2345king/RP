import react from 'react'

export default function Footer() {
  return (
    <footer
  id="contact"
  className="w-full bg-[#DDF2E3] text-black px-6 py-20"
>
      <div className="max-w-[1600px] mx-auto text-center relative">

        <h2
          className="text-[56px] md:text-[100px] leading-[0.95] font-normal"
          style={{ fontFamily: "'Gerbil', sans-serif" }}
        >
          Subscribe to <br /> our newsletter
        </h2>

        <p
          className="mt-6 text-[18px] leading-[30px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          To make your stay special and even more memorable
        </p>
   <a href="#home">
        <button
          className="mt-8 bg-black text-white px-10 py-4 rounded-full text-[16px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Subscribe Now
        </button>
</a>
        <div className="w-full max-w-[1350px] mx-auto border-t border-black/60 mt-20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">

            <FooterColumn
              title="Company"
              items={["Home", "Studio", "Service", "Blog"]}
            />

            <FooterColumn
              title="Terms & Policies"
              items={["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"]}
            />

            <FooterColumn
              title="Follow Us"
              items={["Instagram", "LinkedIn", "Youtube", "Twitter"]}
            />

            <div>
              <h3
                className="text-[22px] leading-[30px] mb-8"
                style={{ fontFamily: "'Gerbil', sans-serif" }}
              >
                Terms & Policies
              </h3>

              <div
                className="space-y-6 text-[18px] leading-[30px]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                <p>
                  1498w Fulton ste, STE <br />
                  2D Chicago, IL 63867.
                </p>
                <p>(123) 456789000</p>
                <p>info@elementum.com</p>
              </div>
            </div>

          </div>
        </div>

        <p
          className="mt-28 text-[18px] leading-[30px] text-center"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3
        className="text-[22px] leading-[30px] mb-8"
        style={{ fontFamily: "'Gerbil', sans-serif" }}
      >
        {title}
      </h3>

      <ul
        className="space-y-5 text-[18px] leading-[30px]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}