import MainNavigationBar from './components/MainNavigationBar'
import PrimaryBrandingBar from './components/PrimaryBrandingBar'
import TopUtilityBar from './components/TopUtilityBar'

export default function Header() {
  return (
    <header>
      <TopUtilityBar />
      <PrimaryBrandingBar />
      <MainNavigationBar />
    </header>
  )
}
