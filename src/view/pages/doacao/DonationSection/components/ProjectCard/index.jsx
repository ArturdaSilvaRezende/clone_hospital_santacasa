import Image from 'next/image'
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai'

export default function ProjectCard({ project, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      role="radio"
      aria-checked={isSelected}
      className={`order-red-600 relative w-full cursor-pointer rounded-lg border-2 bg-white p-6 text-left transition-all duration-300 hover:shadow-md ${
        isSelected ? 'border-[#FD0003] h-full' : 'border-gray-200 h-auto'
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FD0003] transition-all duration-300">
          <AiOutlineCheck className="text-lg text-white" />
        </div>
      )}

      <div className="mt-5 mb-3 flex items-center gap-3 max-sm:mt-6">
        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-full bg-[#FFE2E2]">
          <AiOutlineHeart className="mt-1 shrink-0 text-2xl text-[#FD0003]" />
        </div>

        <h3 className="text-lg font-semibold text-black">{project.nome}</h3>
      </div>

      {!isSelected && (
        <p className="mb-4 line-clamp-2 text-sm text-[#727070]">
          {project.descricao}
        </p>
      )}

      {isSelected && (
        <figure className="mb-4">
          <Image
            src={project.url}
            alt={project.nome}
            height={160}
            width={310}
            className="rounded-[20px] object-cover"
          />

          <figcaption className="mt-2 line-clamp-2 text-sm text-[#727070]">
            {project.descricao}
          </figcaption>
        </figure>
      )}

      <div className="space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#F1F1F1]">
          <div
            className="h-full bg-[#FD0003] transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <div className="flex justify-end">
          <span className="text-sm font-medium text-[#727070]">
            R$
            {project.preco.toLocaleString('pt-BR', {
              minimumFractionDigits: 2
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
