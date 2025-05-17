"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { register } from "swiper/element/bundle";

const SectionHeading = ({ title, highlight, description }) => {
  return (
    <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-24 mb-16">
      <div className="bg-gradient-to-r from-emerald-900/40 via-gray-900/60 to-emerald-900/40 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              {title}{" "}
              {highlight && (
                <span className="text-emerald-400">{highlight}</span>
              )}
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            {description && (
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Animation variants
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CertificatesSection = ({certificates}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Configure Swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      pagination: {
        clickable: true,
      },
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
        1280: {
          slidesPerView: 4,
        },
      },
      injectStyles: [
        `
          .swiper-pagination-bullet {
            background-color: #6ee7b7;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: #10b981;
            opacity: 1;
          }
          .swiper-button-next, .swiper-button-prev {
            color: #10b981;
            background: rgba(16, 185, 129, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }
          @media (max-width: 640px) {
            .swiper-button-next, .swiper-button-prev {
              display: none;
            }
          }
        `,
      ],
    };

    // Assign parameters to Swiper element
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, swiperParams);

      // Initialize Swiper
      swiperElRef.current.initialize();

      // Add resize listener to update Swiper layout on window size change
      const handleResize = () => {
        if (swiperElRef.current && swiperElRef.current.swiper) {
          swiperElRef.current.swiper.update(); // Forces Swiper to update layout on resize
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <SectionHeading
            title="Certifications and "
            highlight="Affiliations"
            description="We are proud to be certified by leading organizations in the agricultural industry."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="w-full"
        >
          <swiper-container
            ref={swiperElRef}
            init="false"
            class="certificates-swiper"
          >
            {certificates.map((certificate, index) => (
              <swiper-slide key={index}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 text-center h-full flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
                  <div
                    className={`relative w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 ${
                      [0, 2].includes(index) ? "bg-white" : ""
                    } rounded-full overflow-hidden flex items-center justify-center`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.name}
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 144px, 160px"
                        className="object-contain p-3 rounded-full transition-transform duration-700"
                        priority={index < 3} // Prioritize loading the first few images
                        onError={(e) => {
                          // Fallback for image loading errors
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-2 px-1">
                    {certificate.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 px-1">
                    {certificate.description}
                  </p>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;