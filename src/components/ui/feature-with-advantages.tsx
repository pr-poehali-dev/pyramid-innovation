import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генерация по промпту",
    description: "Опишите интерфейс словами — ИИ создаст готовый код за секунды.",
  },
  {
    title: "Визуальный редактор",
    description: "Правьте результат прямо в браузере без знания программирования.",
  },
  {
    title: "Экспорт в продакшен",
    description: "Один клик — и ваш проект уже в облаке с реальным URL.",
  },
  {
    title: "История версий",
    description: "Возвращайтесь к любому предыдущему состоянию в один клик.",
  },
  {
    title: "Командный доступ",
    description: "Приглашайте коллег и работайте над проектами вместе.",
  },
  {
    title: "API и интеграции",
    description: "Подключайте внешние сервисы и расширяйте возможности платформы.",
  },
]

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Возможности</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Всё, что нужно для запуска продукта
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              От первой идеи до готового сайта — без кода, дизайнеров и долгих согласований.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-row gap-6 w-full items-start">
                  <Icon name="Check" size={17} className="mt-2 text-white flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom">{feature.title}</p>
                    <p className="text-gray-300 text-sm font-open-sans-custom">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }