import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Многоразовые ракеты",
    description: "Falcon 9 и Falcon Heavy — первые в мире орбитальные ракеты с возвращаемыми первыми ступенями. Снижение стоимости запуска в 10 раз.",
    icon: "rocket",
    badge: "Реализовано",
  },
  {
    title: "Starship",
    description: "Самая мощная ракета в истории человечества. Полностью многоразовая, рассчитана на 100+ пассажиров. Ключ к межпланетным перелётам.",
    icon: "star",
    badge: "Тестирование",
  },
  {
    title: "Starlink",
    description: "Глобальная сеть из тысяч спутников низкой орбиты, обеспечивающая высокоскоростной интернет по всей планете.",
    icon: "globe",
    badge: "Активен",
  },
  {
    title: "Марсианская база",
    description: "Первая постоянная человеческая колония на Марсе. Самодостаточное поселение на тысячи жителей — цель к 2050 году.",
    icon: "target",
    badge: "Цель",
  },
  {
    title: "Межпланетная система",
    description: "ITS — транспортная система для перевозки людей и грузов между планетами. Путь до Марса — около 6 месяцев.",
    icon: "link",
    badge: "Разработка",
  },
  {
    title: "Точка невозврата",
    description: "Цель Илона Маска — сделать человечество межпланетной цивилизацией, способной пережить любую катастрофу на Земле.",
    icon: "zap",
    badge: "Миссия",
  },
]

export function FeaturesSection() {
  return (
    <section id="technology" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Технологии, меняющие всё</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            От многоразовых ракет до колоний на Марсе — SpaceX переписывает правила освоения космоса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "rocket" && "🚀"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "globe" && "🌍"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "🔗"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
