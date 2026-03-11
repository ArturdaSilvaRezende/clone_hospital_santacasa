import CallToActionSections from '~/components/CallToAction'
import Banner from '~/view/pages/residenciaMedica/Banner'
import CoremeSection from '~/view/pages/residenciaMedica/CoremeSection'
import DiretoriaCoreme from '~/view/pages/residenciaMedica/DiretoriaCoreme'

export default function ResidenciaMedica() {
  return (
    <>
      <Banner />
      <CoremeSection />
      <DiretoriaCoreme />
      <CallToActionSections />
    </>
  )
}
