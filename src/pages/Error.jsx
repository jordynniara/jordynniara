import { Sticker } from "../components/sticker"


export const Error = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="flex flex-col items-center justify-center min-h-screen p-8 bg-pebble/20">
      <div className="max-w-2xl bg-white border-4 border-wetsoil rounded-lg p-8 shadow-lg">
        <h1 className="text-h1 font-title text-strawberry mb-4">Oops! Something went wrong</h1>
        <p className="font-body text-wetsoil mb-4">
          We're sorry, but something unexpected happened. Don't worry, we've logged the error and will look into it.
        </p>
        <details className="mb-4">
          <summary className="font-accent text-wetsoil cursor-pointer hover:text-sky">
            Error details
          </summary>
          <pre className="mt-2 p-4 bg-wetsoil/10 rounded text-sm overflow-auto">
            {error.message}
          </pre>
        </details>
        <button
          onClick={resetErrorBoundary}
          className="bg-wetsoil text-white px-6 py-3 rounded-lg font-accent hover:bg-sky transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}