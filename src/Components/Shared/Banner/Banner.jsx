import banner from '../../../../public/images/tree.jpg'
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
    return (
    <div>
    <div className="mt-2">
        <marquee className="text-black font-semibold py-2 text-center bg-gray-300">অক্টোবর হতে ডিসেম্বর/২০২৩ এর বেতন আদায়ের তারিখ ৫ম-৯ম শ্রেণির পর্যন্ত। ২০২৩ সালে এসএসসি উর্ত্তীণ শিক্ষার্থীদের একাডেমিক টান্সক্রীপ্ট বিতরণ সংক্রান্ত বিজ্ঞপ্তি।</marquee>
    </div>
   {/* carousel section  */}
    <Carousel
      className="rounded-xl relative z-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={banner} alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={banner} alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
       src={banner} alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
    );
};

export default Banner;