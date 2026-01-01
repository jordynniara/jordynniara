import excuseMe from '../assets/images/excuseMe.png';
import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="min-h-screen p-8 items-center">
      {/* add back to home button top left */}
      <Link to="/" className="absolute top-4 left-4 font-body text-wetsoil hover:underline">
        &larr; Back to Home
      </Link>
      <img src={excuseMe} alt="Excuse Me" className="mx-auto max-h-screen max-w-full object-contain" />
    </div>
  )
}
