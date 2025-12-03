export function Details() {
  const mockmovie = {
    title: "00,,0",
    cover_image: "./mock.jpeg",
    duration: "5 hours",
    description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
    director: "Saïd Fettahi",
    cast: ["Gab", "Gaëtan", "Azario"],
    age_restriction: 45,
    categories: ["horror", "romance", "comedy"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1d4b1d] to-[#123412]">

      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${mockmovie.cover_image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{mockmovie.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-white mb-4">
              <span className="bg-primary-green text-secondary-grey px-3 py-1 rounded-full text-sm font-semibold">
                {mockmovie.age_restriction}+
              </span>
              <span>{mockmovie.duration}</span>
              <span>Réalisé par {mockmovie.director}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {mockmovie.categories.map((category, index) => (
                <span
                  key={index}
                  className="border border-primary-green text-primary-green px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">{mockmovie.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Casting</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mockmovie.cast.map((actor, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-secondary-grey rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-green font-semibold">
                        {actor.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white">{actor}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-secondary-grey bg-opacity-50 rounded-lg p-6 sticky top-8">
              <button className="w-full bg-primary-green text-secondary-grey py-4 px-6 rounded-lg font-bold text-lg mb-4 hover:bg-opacity-90 transition-colors">
                Louer le film
              </button>

              <div className="space-y-3">
                <button className="w-full border border-primary-green text-primary-green py-3 px-6 rounded-lg font-semibold hover:bg-primary-green hover:text-secondary-grey transition-colors">
                  Ajouter à la liste de souhaits
                </button>
                <button className="w-full border border-primary-green text-primary-green py-3 px-6 rounded-lg font-semibold hover:bg-primary-green hover:text-secondary-grey transition-colors">
                  Partager
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <h3 className="text-white font-semibold mb-3">Informations</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Durée:</span>
                    <span>{mockmovie.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Réalisateur:</span>
                    <span>{mockmovie.director}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public:</span>
                    <span>{mockmovie.age_restriction}+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}