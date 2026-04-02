import { Skeleton } from '@mui/material'

export default function CardSkeleton({ viewType }) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white p-0 
    ${viewType === 'list' ? 'flex items-center gap-4 h-31.75 ' : 'w-75'}`}>
      <Skeleton
        variant="rectangular"
        width={`${viewType === 'list' ? '127px' : '100%'}`}
        height={`${viewType === 'list' ? '127px' : '300px'}`}
        sx={{ borderRadius: `${viewType === 'list' ? '1rem 0 0 1rem' : '1rem 1rem 0 0'}` }}
      />

      <div className={`p-4 ${viewType === 'list' ? 'w-full' : ''}`}>
        <Skeleton variant="text" width="40%" height={20} />
        <Skeleton variant="text" width="80%" height={28} />
        <Skeleton variant="text" width="30%" height={20} />
      </div>
    </div>
  )
}
