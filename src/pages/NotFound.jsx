import excuseMe from '../assets/images/excuseMe.png';
import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">Page Not Found</h1>
      <img src={excuseMe} alt="Excuse Me" className="mx-auto h-auto max-h-[60vh] w-full object-contain" />
    </div>
  )
}
