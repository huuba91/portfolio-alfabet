import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type Slide = { src: string; alt: string; caption?: string };

export function ProjectCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a + slides.length - 1) % slides.length)),
    [slides.length],
  );
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % slides.length)),
    [slides.length],
  );

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const slide = active === null ? null : slides[active];

  return (
    <>
      <Carousel className="mt-8" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={slide.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm border border-border text-left"
                aria-label={`Open ${slide.alt} full size`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </span>
              </button>
              {slide.caption ? (
                <figcaption className="mt-3 text-xs text-muted-foreground">
                  {slide.caption}
                </figcaption>
              ) : null}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-5 flex gap-2">
          <CarouselPrevious className="static translate-y-0 rounded-sm border-border" />
          <CarouselNext className="static translate-y-0 rounded-sm border-border" />
        </div>
      </Carousel>

      {slide ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={slide.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-sm p-2 text-white/70 transition-colors hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 rounded-sm p-2 text-white/70 transition-colors hover:text-white md:left-6"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-full flex-col items-center"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="max-h-[80vh] max-w-full rounded-sm border border-white/10 object-contain"
            />
            {slide.caption ? (
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/70">
                {slide.caption}
              </figcaption>
            ) : null}
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 rounded-sm p-2 text-white/70 transition-colors hover:text-white md:right-6"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      ) : null}
    </>
  );
}
