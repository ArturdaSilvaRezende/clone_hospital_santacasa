import Image from 'next/image'

export default function HeroSection({
  banner,
  title,
  subtitle,
  description,
  children
}) {
  return (
    <section className="h-75 w-full bg-white" aria-labelledby={title}>
      <div className="relative container mx-auto max-w-285">
        <div className="flex items-center justify-start">
          <div className="w-150.5">
            <h2 className="text-[16px] font-semibold tracking-wide text-[#FD0003] uppercase">
              {subtitle}
            </h2>

            <h1 className="mb-2 text-[32px] leading-tight font-bold text-black">
              {title}
            </h1>

            <p className="mb-5 text-[16px] leading-relaxed font-normal text-[#727070]">
              {description}
            </p>

            {children}
          </div>

          <div className="relative -right-27 h-75 w-7/12">
            <Image
              src={banner}
              alt={subtitle}
              fill
              className="rounded-tl-[60px] object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
