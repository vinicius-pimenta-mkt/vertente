import { useEffect } from "react";

export function InstagramFeed() {
  useEffect(() => {
    // Injeta o script do Elfsight apenas uma vez para não pesar o site
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="eyebrow text-ocre">Nosso dia a dia</p>
          <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">Acompanhe no Instagram</h2>
        </div>
        
        {/* O Widget do Elfsight renderiza aqui dentro */}
        <div 
          className="elfsight-app-68a10c7f-1432-47c3-bd54-bebbc8ef3a47" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
