import MainNavigationBar from './components/MainNavigationBar'
import TopUtilityBar from './components/TopUtilityBar'

export default function Header() {
  return (
    <header>
      <TopUtilityBar />
      <MainNavigationBar />
    </header>
  )
}
