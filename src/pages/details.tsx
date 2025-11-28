export function Details() {

  const mockmovie =
      {
        title: "00,,0",
        cover_image: "/mock.jpeg",
        duration: "5 hours",
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
        director: "Saïd Fettahi",
        cast: ["Gab", "Gaëtan", "Azario"],
        age_restriction: 45,
        categories: ["horror", "romance", "comedy"],
      }
  return (
    <div>
      <div className="backdrop-blur-2xl bg-cover bg-center h-140 mx-50"
      style={{ backgroundImage: `url(${mockmovie.cover_image})` }}>
        <div className="text-white flex items-center justify-center bg-linear-to-b from-secondary-grey to-primary-grey absolute bottom-0 left-0">
          <h1 className="text-3xl">{mockmovie.title}</h1>
        </div>
      </div>
    </div>
  )
}
