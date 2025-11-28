
export function _404() {
  return (
    <div className="min-h-screen bg-primary-grey flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-transparent bg-primary-green bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-4">Page non trouvée</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
		  href="/"
            className="inline-flex items-center px-6 py-3 text-primary-green font-semibold rounded-lg hover:bg-primary-green hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}
