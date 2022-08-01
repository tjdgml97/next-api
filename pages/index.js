import styles from '../styles/Home.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/posts/')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
          )})}
          {console.log(posts)}
        </ul>
      </main>
    </div>
  )
}