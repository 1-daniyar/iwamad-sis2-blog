export interface Post {
  id: number
  title: string
  excerpt: string
  date: string // ISO date, e.g. "2026-09-14"
  readingMinutes: number
  tag: string
  body: string[] // one string per paragraph
  baseLikes: number
}

// All posts live in this one array. Add an object here and a new card
// and a new /posts/<id> page appear - no component needs to change.
export const posts: Post[] = [
  {
    id: 1,
    title: 'Why I started selling online instead of looking for a job',
    excerpt:
      'A small online store taught me more about money, customers and discipline than any part-time job could.',
    date: '2026-09-02',
    readingMinutes: 4,
    tag: 'Business',
    baseLikes: 12,
    body: [
      'When I was eighteen, I had two options: send CVs to companies or try to build something of my own. I chose the second one, mostly out of curiosity.',
      'An online store looked like the cheapest way to start. You do not need an office, and you can learn the basics of sourcing, pricing and customer service while studying.',
      'The first weeks were slow. But every order, even a small one, felt more meaningful than a salary, because I could see exactly which decision caused it.',
    ],
  },
  {
    id: 2,
    title: 'How I choose products for my store',
    excerpt:
      'Three simple questions I ask before I add any new product to the catalogue.',
    date: '2026-09-09',
    readingMinutes: 3,
    tag: 'E-commerce',
    baseLikes: 8,
    body: [
      'Question one: would I buy this myself? If I hesitate, customers will too.',
      'Question two: what is the real margin after delivery, commission and returns? A product that looks cheap on the supplier page can be a loss after all costs.',
      'Question three: how many competitors already sell it, and what do they do badly? Bad photos and slow answers are an easy place to be better.',
    ],
  },
  {
    id: 3,
    title: 'Balancing university and a business',
    excerpt:
      'Deadlines at university do not move when a big order arrives. Here is the schedule that works for me.',
    date: '2026-09-16',
    readingMinutes: 5,
    tag: 'Student life',
    baseLikes: 21,
    body: [
      'The biggest mistake is to treat the business as a hobby that fits in the free minutes. There are no free minutes. You have to book time for it like a lecture.',
      'I keep one block every morning for orders and messages, and the rest of the day belongs to study. Evenings are for the work that needs real focus, such as coding assignments.',
      'On the weekend I plan the whole next week. Ten minutes of planning saves hours of panic.',
    ],
  },
  {
    id: 4,
    title: 'Why I am learning React',
    excerpt:
      'Components, state and routing: the ideas behind modern web apps are simpler than they look.',
    date: '2026-10-05',
    readingMinutes: 4,
    tag: 'Programming',
    baseLikes: 17,
    body: [
      'A React app is a tree of small components. Each component receives props, remembers some state and returns a piece of the page.',
      'Once this idea is clear, even a big interface becomes a set of small, testable parts. A like button, a post card and a navigation bar are all just functions.',
      'For my store, I want to build my own tools one day: a price tracker, a stock dashboard, maybe a mini storefront. React is a good place to start.',
    ],
  },
  {
    id: 5,
    title: 'Five habits for a first-year founder',
    excerpt:
      'Nothing magical: just small routines that keep a young business alive during exam weeks.',
    date: '2026-10-12',
    readingMinutes: 3,
    tag: 'Habits',
    baseLikes: 15,
    body: [
      'Write down every expense, even the small ones. Numbers you do not track will surprise you later.',
      'Answer customers fast and politely. A short, friendly reply wins more orders than a perfect description.',
      'Keep a simple folder with all documents and receipts. It makes tax time calm instead of stressful.',
      'Test one new idea per week and measure it. Keep what works, drop what does not.',
      'Rest. A tired founder makes expensive mistakes.',
    ],
  },
]

export function findPost(id: number): Post | undefined {
  return posts.find((post) => post.id === id)
}
