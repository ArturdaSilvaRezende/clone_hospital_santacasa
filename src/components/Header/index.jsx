import MainNavigationBar from './components/MainNavigationBar'
import TopUtilityBar from './components/TopUtilityBar'

export default function Header() {
  return (
    <header className="bg-white">
      <TopUtilityBar />
      <MainNavigationBar />
    </header>
  )
}
