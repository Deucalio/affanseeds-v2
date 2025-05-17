"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { register } from "swiper/element/bundle";
// import { SectionHeading } from "./SectionHeading"; // Assuming this is your existing component

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

const certificates = [
  {
    name: "Federal Seeds Certification & Registration Department, Government Of Pakistan",
    description:
      "Regulates and certifies seed quality in Pakistan to ensure reliable agricultural production and support the farming sector.",
    image: "/cert/c1-removebg-preview.png",
    // image: "https://logowik.com/content/uploads/images/491_pakistan.jpg"
  },
  {
    name: "KCCI Karachi Chamber Of Commerce",
    description:
      "Supports and represents Karachi's business community, promoting trade, industry, and economic growth.",
    image: "/cert/kcci.webp",
  },
  {
    name: "Federal Board Of Revenue, Revenue Division - Government Of Pakistan",
    description:
      "Pakistan's key tax authority, responsible for tax collection, enforcement, and implementing fiscal policies.",
    image: "/cert/fbr-logo.png",
  },
  {
    name: "PSW - Pakistan Single Window",
    description:
      "A digital platform for trade facilitation, streamlining customs and regulatory processes for importers and exporters.",
    image: "/cert/psw logo.png",
  },
  {
    name: "Alibaba Supplier",
    description:
      "A global e-commerce platform connecting buyers and suppliers, facilitating international trade and commerce.",
    image: "/cert/alibaba.png",
  },
];
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

const CertificatesSection = ({ certificates }) => {
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
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
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
    Object.assign(swiperElRef.current, swiperParams);

    // Initialize Swiper
    swiperElRef.current.initialize();
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
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center h-full flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
                  <div
                    className={`relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 ${[0, 2].includes(index) && "bg-white"} rounded-full overflow-hidden`}
                  >
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={certificate.name}
                      fill
                      className="object-cover rounded-full transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {certificate.name}
                  </h3>
                  <p className="text-gray-400 text-xs">
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