export default function Navbar() {
  return (
    <nav class="sticky top-0 z-50 bg-secondary-grey shadow-lg border-b border-primary-green">
      <div class="max-w-6xl mx-auto px-1">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-bleu-light-citef rounded-lg flex items-center justify-center">
                <img src="/images/logoverttext.svg" class="w-10 h-10" alt="Letterflixd" />
              </div>
            </div>
          </div>

          <ul class="flex items-center space-x-1">
            <li>
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  route("/login")
                }}
                class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-primary-green hover:text-white hover:bg-primary-green">
                Se connecter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
}
