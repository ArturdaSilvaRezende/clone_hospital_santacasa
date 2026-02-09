import { RiErrorWarningLine } from 'react-icons/ri'

export default function ResponseError({ responseMessage }) {
  return (
    <div className="mt-4 flex h-11.5 flex-row items-center gap-x-2 rounded-md bg-[#FDEDED] px-4 font-normal">
      <RiErrorWarningLine size={20} className="text-[#FD0003]" />
      <span className="text-[14px]">{responseMessage}</span>
    </div>
  )
}
