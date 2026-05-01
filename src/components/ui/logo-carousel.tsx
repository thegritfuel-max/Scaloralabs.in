"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import { TextRoll } from "./text-roll";

export const AnimatedCarousel = ({
  title = "Trusted by modern startups and Indian brands",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 3000,
  logos = null, // Array of image URLs
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 3,
  itemsPerViewDesktop = 5,
  spacing = "gap-12",
  padding = "py-24",
  // New logo size customization props
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-auto",
  logoImageHeight = "h-10",
  logoMaxWidth = "",
  logoMaxHeight = "",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  // Using real placeholder logos that look decent including Indian brands
  const defaultLogos = [
    "https://cdn.worldvectorlogo.com/logos/zomato-1.svg",
    "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg",
    "https://cdn.worldvectorlogo.com/logos/paytm-1.svg",
    "https://cdn.worldvectorlogo.com/logos/ola-1.svg",
    "https://cdn.worldvectorlogo.com/logos/phonepe.svg",
    "https://cdn.worldvectorlogo.com/logos/tata.svg",
    "https://cdn.worldvectorlogo.com/logos/reliance-industries-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/mahindra.svg",
    "https://cdn.worldvectorlogo.com/logos/nike-4.svg",
    "https://cdn.worldvectorlogo.com/logos/apple-11.svg",
    "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
    "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  ];

  const logoItems = logos || defaultLogos;

  // Combine logo image size classes
  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={`w-full ${padding} bg-primary-black ${containerClassName}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${spacing} items-center`}>
          <h2 className={`font-heading font-bold text-center tracking-widest text-xs uppercase text-muted-text mb-8 ${titleClassName}`}>
            <TextRoll duration={1}>{title}</TextRoll>
          </h2>
          
          <div className="w-full">
            <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }} className={`w-full ${carouselClassName}`}>
              <CarouselContent>
                {logoItems.map((logo, index) => (
                  <CarouselItem className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`} key={index}>
                    <div className={`flex rounded-2xl ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-6 bg-white/5 border border-white/5 hover:bg-white/10 transition-all grayscale opacity-40 hover:opacity-100 hover:grayscale-0 duration-500 ${logoClassName}`}>
                      <img 
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className={`${logoImageSizeClasses} object-contain dark:invert`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
