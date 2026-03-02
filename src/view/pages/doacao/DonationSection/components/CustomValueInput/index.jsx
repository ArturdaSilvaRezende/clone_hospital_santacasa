import { useState, useEffect } from 'react'

export default function CustomValueInput({ valueSelected, onValueChange }) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (valueSelected?.reference_id !== 'custom') {
      setInputValue('')
    }
  }, [valueSelected])

  const handleChange = e => {
    const val = e.target.value.replace(/\D/g, '')
    const numericValue = Number(val) / 100 

    setInputValue(val)

    if (val !== '') {
      onValueChange({
        reference_id: 'custom',
        descricao: 'Valor personalizado',
        quantity: 1,
        preco: Number(val)
      })
    }
  }

  const isSelected = valueSelected?.reference_id === 'custom'

  return (
    <div className="flex w-45 items-center justify-center">
      <div
        className={`relative flex w-full max-w-xs items-center rounded-full border transition-all duration-300 ${
          isSelected
            ? 'border-[#FD0003] ring-1 ring-[#FD0003]'
            : 'border-gray-200'
        }`}
      >
        <span
          className={`absolute left-4 text-[17px] font-bold ${
            isSelected ? 'text-[#FD0003]' : 'text-[#727070] opacity-50'
          }`}
        >
          R$
        </span>

        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Outro valor"
          className="h-10.5 w-full rounded-full bg-transparent pl-11 text-lg text-black outline-none placeholder:text-gray-300"
        />
      </div>
    </div>
  )
}
