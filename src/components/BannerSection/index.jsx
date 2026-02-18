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
    <div className="mx-auto max-w-265 max-sm:px-5 md:px-8 lg:px-8 xl:px-0">
      <div className="grid max-sm:items-center lg:items-center gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
        <div className="relative order-1 lg:h-83.25">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt={alt}
              className="object-cover"
              width={555}
              height={333}
            />
          </div>

          <nav className="absolute lg:-bottom-14 max-sm:-bottom-14  md:bottom-24 left-8 max-w-59.75 rounded-2xl bg-[#FD0003] p-2 text-white">
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
