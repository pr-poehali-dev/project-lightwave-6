import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Почему SpaceX делает ракеты многоразовыми?",
      answer:
        "Стоимость топлива для запуска Falcon 9 составляет около $300 000, тогда как сама ракета стоит $60 млн. Возвращая и повторно используя ступени, SpaceX снижает стоимость запуска в десятки раз — это принципиальное условие для сделать космос доступным.",
    },
    {
      question: "Когда первые люди полетят на Марс?",
      answer:
        "По планам SpaceX — первые грузовые миссии к Марсу около 2030 года (при благоприятном окне сближения планет), первые пилотируемые — в середине 2030-х. Илон Маск ставит амбициозную цель: миллион человек на Марсе к 2050 году.",
    },
    {
      question: "Что такое Starship и почему это важно?",
      answer:
        "Starship — полностью многоразовая двухступенчатая ракета высотой 121 метр и тягой более 7 500 тонн. Это самая мощная ракета в истории, способная доставить 100+ тонн на орбиту. Без неё колонизация Марса невозможна.",
    },
    {
      question: "Как Starlink связан с миссией на Марс?",
      answer:
        "Starlink — коммерческий проект, который финансирует разработку Starship и марсианской программы. Выручка от интернет-услуг позволяет SpaceX инвестировать миллиарды в межпланетные технологии без зависимости от государственных контрактов.",
    },
    {
      question: "Чем SpaceX отличается от NASA и других агентств?",
      answer:
        "SpaceX — частная компания с инженерной культурой стартапа: итерации, риск, скорость. NASA устанавливает стандарты безопасности и является ключевым партнёром, но SpaceX значительно быстрее внедряет инновации и снижает стоимость миссий.",
    },
    {
      question: "Зачем вообще лететь на Марс?",
      answer:
        "Философия SpaceX: человечество должно стать многопланетной цивилизацией, чтобы обезопасить себя от катастроф (астероиды, войны, климат). Марс — первый шаг к созданию резервной копии человеческой жизни во Вселенной.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на ключевые вопросы о миссии SpaceX, технологиях и плане колонизации Марса.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
