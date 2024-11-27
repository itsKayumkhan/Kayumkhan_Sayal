import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const WebsiteTour = ({imgArray,title}:{imgArray:string[],title:string}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      const images = Array.from(gallery.querySelectorAll<HTMLImageElement>('.gallery-image'));
      images.forEach((image, index) => {
        gsap.fromTo(
          image,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            delay: index * 0.2,
            duration: 0.8,
            ease: 'power2.out',
          }
        );

        image.addEventListener('click', () => openLightbox(image.src));
      });
    }
  }, []);

  const openLightbox = (src: string) => {
    if (lightboxRef.current && lightboxImageRef.current) {
      lightboxImageRef.current.src = src;
      gsap.to(lightboxRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const closeLightbox = (e: any) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      gsap.to(lightboxRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  return (
    <>
      <style>
        {`
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
            margin: 0 auto;
            max-width: 1200px;
          }
          .gallery img {
            width: 100%;
            border-radius: 16px;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .gallery img:hover {
            transform: scale(1.05);
          }
          .lightbox {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            opacity: 0;
            visibility: hidden;
          }
          .lightbox img {
            max-width: 90%;
            max-height: 90%;
          }
          .lightbox .close {
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
          }
        `}
      </style>

      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  ">{title}</h2>
          <p className="text-lg text-gray-400">
            Explore the beauty of website
          </p>
        </div>
        <div ref={galleryRef} className="gallery ">
        {
            imgArray.map((image, index) => (
                <img src={image} key={index} alt="Gallery" className="gallery-image hover:scale-110" />
            ))
        }
        </div>

        <div ref={lightboxRef} className="lightbox z-50" onClick={(e)=>closeLightbox(e)}>

          <img ref={lightboxImageRef} src="" alt="Lightbox" />
        </div>
      </section>
    </>
  );
};

export default WebsiteTour;
