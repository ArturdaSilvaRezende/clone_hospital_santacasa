import BreadcrumbSection from '~/components/Breadcrumb'

export default function PreAgendamento() {
  return (
    <>
      <BreadcrumbSection
        title="Já realizou seu pré-agendamento"
        isShowButton={true}
      >
        <li className="flex items-center gap-3">
          <span className="h-4 w-px bg-white/60" aria-hidden="true" />
          <span className="font-medium">Pré Agendamento</span>
        </li>
      </BreadcrumbSection>
    </>
  )
}
