import Image from 'next/image'

export default function HeroSection({
  banner,
  title,
  subtitle,
  description,

  imageAlt,
  children
}) {
  const headingId = 'hero-heading'

  return (
    <section
      className="lg:auto relative w-full bg-white max-sm:h-max md:h-auto md:py-16 lg:py-16 xl:py-0"
      aria-labelledby={headingId}
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="z-10 container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-[90%] lg:w-[90%] xl:w-[42%]">
          <h1
            id={headingId}
            className="mb-2 leading-tight font-medium max-sm:w-full max-sm:text-[28px] max-sm:text-black md:w-[80%] md:text-[20px] md:text-white lg:w-full lg:text-[28px] lg:text-white xl:text-black"
          >
            {title}
          </h1>

          <p
            className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase"
            aria-hidden="false"
          >
            {subtitle}
          </p>

          <p className="mb-5 leading-relaxed font-normal max-sm:w-full max-sm:text-[14px] max-sm:text-[#5f5f5f] md:w-[90%] md:text-[13px] md:text-white lg:w-full lg:text-[16px] lg:text-white xl:text-[#5f5f5f]">
            {description}
          </p>

          {children}
        </div>

        <div
          className="absolute inset-0 z-0 overflow-hidden bg-[#BE3131] max-sm:hidden xl:hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${banner}')` }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative w-175 max-sm:block max-sm:h-75 max-sm:w-full md:hidden md:h-85 lg:hidden lg:h-75 xl:block">
          <Image
            src={banner}
            alt={imageAlt ?? ''}
            fill
            className="rounded-tl-[60px] object-cover object-center max-sm:h-auto max-sm:w-full max-sm:rounded-tl-none max-sm:rounded-bl-[60px]"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
