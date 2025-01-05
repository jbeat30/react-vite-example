import Card from './Card.tsx'

export default function CardList() {
  return (
    <section className="bg-gray-2 pb-10 pt-10 dark:bg-dark">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle="50+ Best creative website themes & templates"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <Card
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle="Creative Card Component designs graphic elements"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <Card
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
            CardTitle="The ultimate UX and UI guide to card design"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </div>
    </section>
  )
}