import Image from 'next/image'

export default function MemberCard({ name, role, imageSrc, description }) {
  return (
    <article
      className="flex w-100 flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md max-sm:w-full md:w-[48%] lg:w-100"
      role="listitem"
    >
      <div className="relative mb-4 h-52.5 w-52.5 overflow-hidden rounded-full border-4 border-gray-50">
        <Image
          src={imageSrc}
          alt={`Retrato de ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 210px"
        />
      </div>

      <header>
        <p className="mb-1 text-sm font-normal tracking-wide text-[#FD0003]">
          {role}
        </p>
        <h3 className="mb-3 text-xl font-bold text-gray-900">{name}</h3>
      </header>

      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      <button
        aria-label={`Ver mais detalhes sobre ${name}`}
        className="rounded-full border border-red-500 px-6 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:outline-none"
      >
        Ver mais detalhes
      </button>
    </article>
  )
}
