import { FiCheckCircle } from 'react-icons/fi'

export default function ResponseSuccess({ responseMessage }) {
  return (
    <div className="mt-4 flex h-11.5 flex-row items-center gap-x-2 rounded-md bg-[#E6FFED] px-4 font-normal">
      <FiCheckCircle size={20} className="text-[#20A36C]" />
      <span className="text-[14px]">{responseMessage}</span>
    </div>
  )
}
