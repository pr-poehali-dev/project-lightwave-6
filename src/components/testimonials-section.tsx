import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Илон Маск",
    role: "CEO SpaceX, основатель",
    avatar: "/placeholder-user.jpg",
    content:
      "Я хочу умереть на Марсе — только не при ударе о него. SpaceX создана, чтобы сделать человечество межпланетной цивилизацией.",
  },
  {
    name: "Гвинн Шотвелл",
    role: "Президент и COO SpaceX",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наша цель — снизить стоимость доступа в космос настолько, чтобы открыть его для всего человечества. Многоразовость — ключ к этому.",
  },
  {
    name: "Томас Песке",
    role: "Астронавт ESA, экипаж Crew Dragon",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Полёт на Crew Dragon — совершенно другой опыт. SpaceX переосмыслила всё — от интерфейса до комфорта. Это будущее космических путешествий.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Голоса миссии</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто создаёт и воплощает самую амбициозную космическую программу в истории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
