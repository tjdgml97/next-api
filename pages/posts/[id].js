export async function getStaticPaths() {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/`)
    const posts = await res.json()

    // const paths = [{params: { id: "1" }}, {params: { id: "2" }}]
    const paths = posts.map((post) => {
        return {params: { id: post.id.toString() }}
    })

    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${params.id}/`)
    const post = await res.json()
    return { props: { post } }
}

export default function Post({post}) {
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}