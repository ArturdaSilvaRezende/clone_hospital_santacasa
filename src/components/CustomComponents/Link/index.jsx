import Link from 'next/link'

export default function CustomLink({
  classNameContainer,
  classNameLink,
  href,
  label
}) {
  return (
    <div
      className={`flex h-10 cursor-pointer items-center justify-center rounded-full px-6 py-3 text-center text-[15px] transition-all duration-300 ${classNameContainer}`}
    >
      <Link href={`${href}`} className={classNameLink}>
        {label}
      </Link>
    </div>
  )
}
