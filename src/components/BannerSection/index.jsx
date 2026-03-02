import Image from 'next/image'

export default function BannerSection({
  image,
  alt,
  title,
  subtitle,
  description = <></>,
  children
}) {
  return (
    <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-0">
      <div className="grid gap-8 max-sm:items-center md:grid-cols-2 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="relative order-1 lg:h-83.25">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={alt}
              className="object-cover"
              width={555}
              height={333}
              loading="eager"
            />
          </div>

          <nav className="absolute left-8 max-w-59.75 rounded-2xl bg-[#FD0003] p-2 text-white max-sm:-bottom-14 md:bottom-24 lg:-bottom-14">
            <ul className="rounded-2xl bg-red-50/25 p-3">
              <li className="text-[24px] font-bold">{title}</li>
              <li className="mb-2 text-[16px] font-medium">{subtitle}</li>
              {description}
            </ul>
          </nav>
        </div>

        <div className="order-2 max-sm:pt-15">{children}</div>
      </div>
    </div>
  )
}
