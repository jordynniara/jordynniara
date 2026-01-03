import excuseMe from '../assets/images/excuseMe.png';
import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="min-h-screen p-8 items-center flex flex-col justify-center">
      <img src={excuseMe} alt="Excuse Me" className="mx-auto max-h-screen max-w-full object-contain" />
    </div>
  )
}
