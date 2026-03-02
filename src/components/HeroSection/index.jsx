import Image from 'next/image'

export default function HeroSection({
  banner,
  title,
  subtitle,
  description,
  children
}) {
  return (
    <section
      className="w-full bg-white max-sm:h-max md:h-70 max-sm:md:h-75 lg:h-75"
      aria-labelledby={title}
    >
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="container mx-auto max-sm:order-2 max-sm:mt-5 max-sm:mb-8 max-sm:w-full max-sm:px-6 md:w-full md:pl-9 lg:w-150.5 lg:px-5">
          <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
            {subtitle}
          </h2>

          <h1 className="mb-2 leading-tight font-medium text-black max-sm:text-[28px] md:text-[20px] lg:text-[32px] lg:w-[80%] md:w-[70%] max-sm:w-full">
            {title}
          </h1>

          <p className="mb-5 lg:w-150 md:w-[90%] max-sm:w-full leading-relaxed font-normal text-[#727070] max-sm:text-[14px] md:text-[13px] lg:text-[16px]">
            {description}
          </p>

          {children}
        </div>

        <div className="relative w-175 max-sm:h-75 max-sm:w-full md:h-70 lg:h-75">
          <Image
            src={banner}
            alt={subtitle}
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
