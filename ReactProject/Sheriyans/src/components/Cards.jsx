const arr = [
  {
    imgsrc: "./images/course1.webp",
    heading: "Data Science and Analytics with GenAI",
    language: "Hinglish",
    price: "₹ 6999",
    oldPrice: "₹ 15000",
    off: "53% OFF",
  },
  {
    imgsrc: "./images/cohort-3_.webp",
    heading: "2.0 Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    language: "Hinglish",
    price: "₹ 5999",
    oldPrice: "₹ 12000",
    off: "50% OFF",
  },
  {
    imgsrc: "./images/DSA.webp",
    heading: "DSA Domination Cohort 2025 / 2026",
    language: "Hinglish",
    price: "₹ 6660",
    oldPrice: "₹ 7500",
    off: "12% OFF",
  },
  {
    imgsrc: "./images/cohort_2.0..webp",
    heading: "Job Ready AI Cohort: Web + DSA + Aptitude",
    language: "Hindi",
    price: "₹ 2499",
    oldPrice: "₹ 3500",
    off: "30% OFF",
  },
  {
    imgsrc: "./images/Threejs.webp",
    heading: "Advanced Three.js Domination 2026",
    language: "Hinglish",
    price: "₹ 5999",
    oldPrice: "₹ 8500",
    off: "29% OFF",
  },
  {
    imgsrc: "./images/JAVA_AND_DSA.webp",
    heading: "JAVA & DSA Domination 2025 / 2026",
    language: "Hinglish",
    price: "₹ 6660",
    oldPrice: "₹ 13000",
    off: "50% OFF",
  },
  {
    imgsrc: "./images/Frontend_Domination.webp",
    heading: "Front-End Domination: Create Anything with Code",
    language: "Hinglish",
    price: "₹ 6660",
    oldPrice: "₹ 16000",
    off: "60% OFF",
  },
  {
    imgsrc: "./images/apti_reasoning.webp",
    heading: "Aptitude & Reasoning for Campus Placements",
    language: "Hinglish",
    price: "₹ 6660",
    oldPrice: "₹ 12000",
    off: "45% OFF",
  },
];

function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {arr.map((item, index) => (
        <div
          key={index}
          className="bg-[#171717] rounded-2xl overflow-hidden 
                     flex flex-col h-130"
          style={{ fontFamily: "Helvetica Now Display, sans-serif" }}
        >
          {/* Image */}
          <div className="h-60 w-full shrink-0">
            <img
              src={item.imgsrc}
              alt={item.heading}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col grow px-6 py-4 gap-3 text-[rgb(233,233,233)]">
            <h2 className="text-[20px] font-semibold line-clamp-2">
              {item.heading}
            </h2>

            <span
              className={`w-fit px-2 py-1 text-sm rounded
                ${item.language === "Hinglish" ? "bg-[#882727]" : "bg-[#2C2C2C]"}
              `}
            >
              {item.language}
            </span>

            <div className="mt-5">
              <p className="text-sm opacity-80">Limited Time Discount</p>

              <div className="flex justify-between items-center mt-1">
                <p className="text-lg font-semibold">
                  {item.price}
                  <span className="line-through opacity-60 text-sm ml-3">
                    {item.oldPrice}
                  </span>
                </p>

                <span className="bg-[rgb(233,233,233)] text-black px-3 py-1 rounded-md font-bold text-sm">
                  {item.off}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-auto bg-[#24CFA6] text-black py-3 
                         rounded-xl font-semibold text-lg transition-transform
          hover:bg-[#66e4cf] ease-in-out 0.3s cursor-pointer
          shadow-md"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
