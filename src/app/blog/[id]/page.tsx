import Navbar from '@/components/Navbar'
import EntreEmContato from '@/sections/EntreEmContato'
import Footer from '@/sections/Footer'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

async function getData(id: string) {
  const res = await fetch(
    `https://felipe-oliveira-blog.onrender.com/api/blog-posts/${id}?populate=*`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getData(params.id)
  return (
    <>
      <Navbar />
      <div className="w-full px-[20px] sm:px-[50px] lg:px-[100px] flex flex-col items-start text-white">
        <Image
          width={980}
          height={500}
          src={post.data.attributes.imagemBg.data.attributes.url}
          className="w-full h-[700px] object-cover self-center rounded-[5px]"
          alt="Imagem Post"
        />
        <h1 className="text-[48px] my-[30px] bg-text">
          {post.data.attributes.titulo}
        </h1>
        <p className="text-[20px] mb-[50px]">
          {post.data.attributes.descricao}
        </p>
        <div className="whitespace-pre-line">
          <ReactMarkdown>{post.data.attributes.blogConteudo}</ReactMarkdown>
        </div>
      </div>
      <EntreEmContato />
      <Footer />
    </>
  )
}

export default page
