export default function ValueButton({ isSelected, onSelect, children }) {
  return (
    <button
      onClick={onSelect}
      role="radio"
      aria-checked={isSelected}
      aria-pressed={isSelected}
      className={`rounded-full px-6 py-2.5 block w-27.5 max-sm:w-[30%] font-medium transition-all duration-300 ${
        isSelected
          ? 'bg-[#FD0003] text-white'
          : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400'
      }`}
    >
      {children}
    </button>
  )
}
