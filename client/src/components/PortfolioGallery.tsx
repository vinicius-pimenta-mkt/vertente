// Cartografia Viva — galeria documental: imagens como pranchas de campo, com arraste e leitura ampliada.
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, MoveUpRight, X } from "lucide-react";
import { Link } from "wouter";
import type { Service } from "@/data/services";

type GalleryProps = { service: Service };

const fallbackImages = [
  "/manus-storage/vertente-hero_69fb3e42.jpg",
  "/manus-storage/vertente-reflorestar_389e947e.jpg",
  "/manus-storage/vertente-field_1381125a.jpg",
];

export default function PortfolioGallery({ service }: GalleryProps) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const images = service.gallery.slice(0, 10);
  const move = (direction: number) => scroller.current?.scrollBy({ left: direction * Math.min(scroller.current.clientWidth * 0.72, 480), behavior: "smooth" });
  const open = (imageIndex: number) => { setIndex(imageIndex); setActive(imageIndex); };
  const close = () => setActive(null);
  const previous = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const next = () => setIndex((current) => (current + 1) % images.length);
  return <div className="portfolio-gallery">
    <div className="mb-5 flex items-end justify-between gap-6">
      <div><p className="eyebrow text-ocre">{service.eyebrow}</p><h3 className="mt-2 font-display text-3xl text-forest md:text-4xl">{service.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60">{service.portfolioDescription}</p></div>
      <div className="hidden items-center gap-2 md:flex"><button type="button" onClick={() => move(-1)} className="grid size-10 place-items-center rounded-full border border-ink/15 text-forest hover:border-ocre hover:text-ocre" aria-label={`Voltar nas imagens de ${service.title}`}><ArrowLeft size={16} /></button><button type="button" onClick={() => move(1)} className="grid size-10 place-items-center rounded-full border border-ink/15 text-forest hover:border-ocre hover:text-ocre" aria-label={`Avançar nas imagens de ${service.title}`}><ArrowRight size={16} /></button></div>
    </div>
    <div ref={scroller} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {images.map((src, imageIndex) => <button type="button" key={src} onClick={() => open(imageIndex)} className="group relative min-w-[78%] snap-start overflow-hidden rounded-2xl bg-sand text-left sm:min-w-[48%] lg:min-w-[31.5%]" aria-label={`Ampliar imagem ${imageIndex + 1} de ${service.title}`}><div className="aspect-[4/3]"><img src={src} alt={`${service.title} — imagem ${imageIndex + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" onError={(event) => { event.currentTarget.src = fallbackImages[imageIndex % fallbackImages.length]; }} /></div><span className="absolute left-3 top-3 tag bg-forest/80 text-white">{String(imageIndex + 1).padStart(2, "0")}</span><span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-paper/90 text-forest transition group-hover:bg-ocre group-hover:text-white"><MoveUpRight size={15} /></span></button>)}
    </div>
    <div className="mt-4 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">arraste horizontalmente para explorar</span><Link href={`/servicos/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-ocre decoration-2 underline-offset-8">Ver mais <ArrowRight size={15} /></Link></div>
    {active !== null && <div className="fixed inset-0 z-[70] grid place-items-center bg-forest/95 p-5" role="dialog" aria-modal="true" aria-label={`Galeria ampliada de ${service.title}`}><button type="button" onClick={close} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10" aria-label="Fechar galeria"><X /></button><button type="button" onClick={previous} className="absolute left-4 grid size-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 md:left-8" aria-label="Imagem anterior"><ChevronLeft /></button><img src={images[index]} alt={`${service.title} — imagem ampliada ${index + 1}`} className="max-h-[82vh] max-w-[88vw] rounded-2xl object-contain" onError={(event) => { event.currentTarget.src = fallbackImages[index % fallbackImages.length]; }} /><button type="button" onClick={next} className="absolute right-4 grid size-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 md:right-8" aria-label="Próxima imagem"><ChevronRight /></button><p className="absolute bottom-6 text-xs uppercase tracking-[0.2em] text-white/50">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</p></div>}
  </div>;
}
