import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "2002–2015: Начало",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Основание SpaceX в 2002 году. Первые неудачные запуски Falcon 1 и исторический успех в 2008 году — первая
            частная ракета, достигшая орбиты. Контракт с NASA на снабжение МКС.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2008 — Falcon 1 впервые достигает орбиты
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2010 — Dragon впервые в открытом космосе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2012 — Dragon стыкуется с МКС
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2015–2020: Революция",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Эпоха многоразовых ракет. Первая посадка первой ступени Falcon 9, запуск Starlink и первый пилотируемый
            полёт на орбиту в рамках программы Commercial Crew.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2015 — Первая посадка ступени Falcon 9
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2019 — Запуск первых 60 спутников Starlink
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2020 — Crew Dragon доставляет астронавтов на МКС
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021–2026: Starship",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Разработка и испытания Starship — самой мощной ракеты в истории. Первые орбитальные тесты, интеграция
            с Artemis NASA и подготовка к лунным миссиям.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2023–2024 — Серия интегрированных испытаний IFT
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2025 — Поимка ускорителя SuperHeavy механическими "руками"
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              2026 — Лунная посадка в рамках Artemis NASA
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2030+: Марс",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Первые грузовые миссии на Марс, затем пилотируемые полёты и закладка первой постоянной базы.
            К 2050 году — самодостаточный город на Красной планете.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ~2030 — Первые грузовые Starship на Марс
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ~2035 — Первые люди ступают на Марс
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ~2050 — Марсианский город на 1 000 000 человек
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Дорожная карта SpaceX</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От первых частных ракет до межпланетной цивилизации — каждый шаг SpaceX приближает человечество
            к звёздам.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
