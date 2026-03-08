import CallToActionSections from '~/components/CallToAction'
import Banner from '~/view/pages/guiaDoPaciente/Banner'
import FrequentlyQuestions from '~/view/pages/guiaDoPaciente/FrequentlyQuestions'
import HospitalMap from '~/view/pages/guiaDoPaciente/HospitalMap'

export default function GuiaDoPaciente() {
  return (
    <>
      <Banner />
      <FrequentlyQuestions />
      <HospitalMap />
      <CallToActionSections />
    </>
  )
}
