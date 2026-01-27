import Link from 'next/link'

export default function CustomLink({
  classNameContainer,
  classNameLink,
  href,
  label
}) {
  return (
    <div
      className={`cursor-pointer rounded-full px-6 py-3 text-center text-[16px] font-semibold ${classNameContainer}`}
    >
      <Link href={`${href}`} className={classNameLink}>
        {label}
      </Link>
    </div>
  )
}
