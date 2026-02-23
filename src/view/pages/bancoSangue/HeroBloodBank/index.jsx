"use client";

import Image from "next/image";
import { 
  FaWhatsapp, 
  FaRegClock, 
  FaMapMarkerAlt 
} from "react-icons/fa"; 

export default function HeroBloodBank() {
  return (
    <section 
      className="relative w-full min-h-125 flex items-center justify-center py-16 px-4"
      aria-labelledby="hero-title"
    >
    
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-visita-ao-banco-de-sangue.jpg"
          alt="Profissional de saúde no Banco de Sangue"
          fill
          priority
          className="object-cover"
        />
     
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

    
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        <header className="mb-8">
          <p className="text-white font-bold uppercase tracking-widest text-sm mb-2">
            Horários de Atendimento
          </p>
          <h1 
            id="hero-title"
            className="text-white text-3xl md:text-4xl font-bold"
          >
            Visite o Banco de Sangue da SCMG
          </h1>
        </header>

      
        <article 
          className="bg-[#D32F2F] text-white w-full max-w-lg rounded-2xl p-6 md:p-8 shadow-2xl"
          aria-label="Informações de contato e horários"
        >
          <div className="flex flex-col gap-6 text-left">
            
          
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <span className="bg-white text-[#D32F2F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0" aria-hidden="true">
                D
              </span>
              <h2 className="font-semibold text-lg">Doações — Banco de Sangue</h2>
            </div>

           
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-xl mt-1 shrink-0" aria-hidden="true" />
              <a 
                href="tel:6232544283" 
                className="hover:underline transition-all"
                aria-label="Ligar para (62) 3254-4283"
              >
                (62) 3254-4283
              </a>
            </div>

     
            <div className="space-y-4 border-t border-white/20 pt-4">
              <div className="flex items-start gap-4">
                <FaRegClock className="text-xl mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium">7h às 12h, 13h às 16h</p>
                  <p className="text-sm opacity-90">Segunda a Quinta</p>
                </div>
              </div>

              <div className="flex items-start gap-4 ml-9 md:ml-9"> 
               
                <div>
                  <p className="font-medium">7h às 12h, 13h às 15h</p>
                  <p className="text-sm opacity-90">Sexta-feira</p>
                </div>
              </div>
            </div>

          
            <div className="flex items-start gap-4 border-t border-white/20 pt-4">
              <FaMapMarkerAlt className="text-xl mt-1 shrink-0" aria-hidden="true" />
              <address className="not-italic text-sm md:text-base opacity-90">
                R. Campinas, 1135, Vila Americano do Brasil, Goiânia - GO, 74530-240
              </address>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}