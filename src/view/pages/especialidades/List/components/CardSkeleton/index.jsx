import { Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-0 w-75">
   
    <Skeleton 
      variant="rectangular" 
      width="100%" 
      height="300px" 
      sx={{ borderRadius: '1rem 1rem 0 0' }} 
    />
   
    <div className="p-4">
      <Skeleton variant="text" width="40%" height={20} /> 
      <Skeleton variant="text" width="80%" height={28} /> 
      <Skeleton variant="text" width="30%" height={20} /> 
    </div>
  </div>
  );
}