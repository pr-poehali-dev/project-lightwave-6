import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              SPACE<span className="text-red-500">X</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Making Life Multiplanetary. Мы строим технологии, которые сделают человечество межпланетной цивилизацией.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/spacex" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/spacex" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/spacex" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/spacex" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Программы */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Программы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#technology"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Starship
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Starlink
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Миссия */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Миссия</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О SpaceX
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Пресс-центр
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 Space Exploration Technologies Corp. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Условия
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
