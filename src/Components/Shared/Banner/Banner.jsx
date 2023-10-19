import banner from '../../../../public/images/tree.jpg'
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
    return (
    // <div className='relative z-0'>
    //     <div className="mt-2">
    //         <marquee className="text-black font-semibold py-2 text-center bg-gray-300">অক্টোবর হতে ডিসেম্বর/২০২৩ এর বেতন আদায়ের তারিখ ৫ম-৯ম শ্রেণির পর্যন্ত। ২০২৩ সালে এসএসসি উর্ত্তীণ শিক্ষার্থীদের একাডেমিক টান্সক্রীপ্ট বিতরণ সংক্রান্ত বিজ্ঞপ্তি।</marquee>
    //     </div>
    //     {/* carousel section  */}
    //     <div id="default-carousel" className=" relative w-full" data-carousel="slide">
    //         {/* <!-- Carousel wrapper --> */}
    //         <div className="relative h-56 overflow-hidden md:h-96">
    //             {/* <!-- Item 1 --> */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    //             </div>
    //             {/* <!-- Item 2 --> */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    //             </div>
    //             {/* <!-- Item 3 --> */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    //             </div>
    //             {/* <!-- Item 4 --> */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    //             </div>
    //             {/* <!-- Item 5 --> */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src={banner} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
    //             </div>
    //         </div>
    //         {/* <!-- Slider indicators --> */}
    //         {/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    //             <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    //         </div> */}
    //         {/* <!-- Slider controls --> */}
    //         {/* <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
    //                 </svg>
    //                 <span className="sr-only">Previous</span>
    //             </span>
    //         </button>
    //         <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    //                 </svg>
    //                 <span className="sr-only">Next</span>
    //             </span>
    //         </button> */}
    //     </div>
    // </div>
    <div>
    <div className="mt-2">
        <marquee className="text-black font-semibold py-2 text-center bg-gray-300">অক্টোবর হতে ডিসেম্বর/২০২৩ এর বেতন আদায়ের তারিখ ৫ম-৯ম শ্রেণির পর্যন্ত। ২০২৩ সালে এসএসসি উর্ত্তীণ শিক্ষার্থীদের একাডেমিক টান্সক্রীপ্ট বিতরণ সংক্রান্ত বিজ্ঞপ্তি।</marquee>
    </div>
   {/* carousel section  */}
    <Carousel
      className="rounded-xl relative z-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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