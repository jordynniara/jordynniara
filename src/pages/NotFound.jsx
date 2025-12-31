import excuseMe from '../assets/excuseMe.png';

export const NotFound = () => {
  return (
    <div className="min-h-screen p-8 items-center">
      {/* add back to home button top left */}
      <img src={excuseMe} alt="Excuse Me" className="mx-auto max-h-screen max-w-full object-contain" />
    </div>
  )
}
