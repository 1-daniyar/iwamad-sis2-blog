import { Link } from 'react-router'
import { PostCard } from '../components/PostCard'
import { posts } from '../data/posts'

export function Home() {
  const firstTwoPosts = posts.slice(0, 2)

  return (
    <>
      <section className="hero">
        <p className="eyebrow">A student founder's notebook</p>
        <h1>Notes on building a small online business while studying IT</h1>
        <p className="lead">
          I run an online store and study Information Technology at KBTU. This blog is where I
          write down what works, what does not, and what I learn about code on the way.
        </p>
        <Link to="/posts" className="button">
          Read all posts
        </Link>
      </section>

      <section>
        <h2 className="section-title">Start here</h2>
        <div className="grid">
          {firstTwoPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
