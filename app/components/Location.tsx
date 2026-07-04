"use client"
import { Card } from "./ui/Card";
import { useMediaQuery } from "../hooks/use-media-query";

export const Location = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");

  const words = `Some delivery Locations`;

  return (
      <div className={`2xl:px-10 lg:px-10 2xl:ml-10 lg:ml-10 pb-44 bg-white/95 h-full ${!isDesktop && 'px-2 -ml-2 mt-10'}  ${isTablet && 'px-10 mt-10'}`}>
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center uppercase md:text-left">
          <h2 className="text-xl font-semibold text-gray-700">Explore by Location</h2>
          <h1 className="text-[CC5500] font-bold text-3xl">{words}</h1>
        </div>

        {/* Card Grid */}
        <div className={`justify-between mt-8 overflow-hidden lg:w-full md:flex-col xl:flex xl:flex-col xl:gap-5 ${!isDesktop && 'w-full items-stretch px-2'}  ${isTablet && 'flex flex-col w-full items-stretch px-2'}`}>
          {/* First Row (3 Cards) */}
          <div className={`flex flex-wrap w-full 2xl:gap-[16.7rem] lg:gap-[83px] md:gap-8 ${!isDesktop && 'w-full gap-4'}  ${isTablet && 'w-full flex flex-col gap-7'}`}>
            <Card
              image="/assets/dertyuio.jpg"
              title="Ipaja"
              className={`2xl:basis-[32%] 2xl:w-[177%] lg:w-[120%] h-72 md:w-full xl:h-72 ${!isDesktop && 'min-w-[150%] px-0'}  ${isTablet && 'min-w-[300%]'}`}
              subtitle="5-BEDROOM DUPLEX"
              ContentSubtitle="Residentials"
              colour="black"
              href="/property/5-bedroom-duplex"
            />

            <Card
              image="/assets/completed/Library.jpg"
              className={`2xl:basis-[32%] 2xl:w-[177%] lg:w-[120%] h-72 md:full xl:h-72 ${!isDesktop && 'min-w-[150%] px-0'} ${isTablet && 'min-w-[300%]'}`}
              title="Hallmark"
              subtitle="Library"
              ContentSubtitle="School library"
              colour="none"
              href="/property/hallmark-university-projects-"
            />

            <Card
              image="/assets/completed/20210917_122818.jpg"
              className={`2xl:basis-[32%] 2xl:w-[177%] lg:w-[120%] h-72 xl:h-72 ${!isDesktop && 'min-w-[150%] px-0'} ${isTablet && 'min-w-[300%]'}`}
              title="Lekki"
              subtitle="City Mall"
              ContentSubtitle="Shopping"
              colour="black"
              href="/property/cmart-supermarket-and-pharmacy"
            />

          
          </div>

          {/* Second Row (2 Cards) */}
          <div className={`${!isDesktop && 'loc-grid location-grid'}  ${isTablet && 'flex flex-col mt-7 gap-7'} flex flex-wrap w-full 2xl:gap-[35.2rem] lg:gap-[280px]`}>
            <Card
              image="/assets/office.jpg"
              className={`2xl:basis-[49%] 2xl:w-[268.4%] lg:w-[184%] h-72 md:[153%] xl:h-72 ${!isDesktop && 'min-w-[150%] px-0'}  ${isTablet && 'min-w-[300%]'}`}
              title="WEMPCOROAD"
              subtitle="MIXED-USE BUILDINGS"
              ContentSubtitle="Commercial/Office building"
              colour="none"
              href="/property/lascofedd-project"
            />

            <Card
              image="/assets/completed/Westgate.png"
              className={`2xl:basis-[49%] 2xl:w-[268.4%] lg:w-[184%] h-72 md:[153%] xl:h-72 ${!isDesktop && 'min-w-[150%] px-0'}  ${isTablet && 'min-w-[300%]'}`}
              title="Magodo"
              subtitle="Shopping"
              colour="black"
              ContentSubtitle="Mall"
              href="/property/west-gate-supermarket-and-pharmacy"
            />
          </div>
        </div>
      </div>
  );
};
