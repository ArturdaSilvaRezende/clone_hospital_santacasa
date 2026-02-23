import Certifications from '~/view/pages/bancoSangue/Certifications'
import Why from '~/view/pages/bancoSangue/Why'
import HeroBloodBank from '~/view/pages/bancoSangue/HeroBloodBank'
import CallToActionSections from '~/components/CallToAction'
import Faq from '~/view/pages/bancoSangue/Faq'
import WhyDonate from '~/view/pages/bancoSangue/WhyDonate'

export default function BancoDeSangue() {
  return (
    <>
      <Why />
      <WhyDonate />
      <Certifications />
      <HeroBloodBank />
      <Faq />
      <CallToActionSections />
    </>
  )
}
