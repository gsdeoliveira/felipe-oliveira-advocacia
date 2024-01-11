import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import calendario from '@/assets/calendario.webp'
import Button from '@/components/Button'
import arrow from '@/assets/arrow.svg'
import Footer from '@/sections/Footer'
import { BlogPost } from '@/utils/getPosts'
import { formatarData } from '@/utils/formatarData'

async function getData({ page }: { page: string }) {
  const res = await fetch(
    `https://felipe-oliveira-blog.onrender.com/api/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=5`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const atualPage = searchParams.page ? searchParams.page : '1'
  const posts = await getData({ page: atualPage })
  const pagesCount = Array.from(
    { length: posts.meta.pagination.pageCount },
    (_, index) => index + 1,
  )

  return (
    <>
      <div className="bg-balanca">
        <Navbar />
        <div className="p-[20px] lg:p-[50px] lg:w-1/2 text-center lg:text-start">
          <h1 className="bg-text text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px]">
            Blog
          </h1>
          <p className="text-white">
            Explore o universo jurídico e além em nosso Blog. Aqui,
            compartilhamos insights, análises e artigos informativos sobre uma
            variedade de tópicos legais.
          </p>
        </div>
      </div>
      <h2 className="bg-text text-[30px] p-[20px] pb-0 lg:pb-0 mb-[10px] mt-[90px] lg:p-[50px]">
        Últimas Postagens
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px] lg:p-[50px] pt-0 lg:pt-0 text-white">
        {posts.data.map((post: BlogPost) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-gray pb-[20px] rounded-[5px] flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[350px]">
                <Image
                  src={post.attributes.imagemBg.data.attributes.url}
                  width={420}
                  height={350}
                  alt="Imagem do post"
                  className="w-full h-[350px] object-cover rounded-t-[5px]"
                />
                <div className="absolute bottom-0 left-0">
                  <Button className="text-base px-2 py-1 rounded-bl-none hover:brightness-100">
                    {post.attributes.categoria}
                  </Button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex gap-[10px] items-center p-[20px] pb-0">
                  <Image src={calendario} width={20} height={20} alt="Data" />
                  <p className="pt-[2px]">
                    {formatarData(post.attributes.publishedAt)}
                  </p>
                </div>
              </div>
              <h3 className="text-[18px] font-bold my-[20px] px-[20px]">
                {post.attributes.titulo}
              </h3>
              <p className="px-[20px] mb-[20px]">{post.attributes.descricao}</p>
            </div>
            <p className="bg-text uppercase px-[20px]">Continuar Lendo</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-[5px] my-[20px] justify-center items-center">
        <Link
          href={`/blog?page=${
            Number(atualPage) - 1 < 1 ? '1' : Number(atualPage) - 1
          }`}
          className="px-2 py-2 rounded-[5px] border border-gray"
        >
          <Image src={arrow} width={20} alt="Anterior" className="rotate-180" />
        </Link>

        {pagesCount.map((numero) => (
          <Link
            href={`/blog?page=${numero}`}
            className={`px-3 py-2 text-white rounded-[5px] border border-gray ${
              numero.toString() === atualPage ? 'bg-gold' : ''
            }`}
            key={numero}
          >
            {numero}
          </Link>
        ))}
        <Link
          href={`/blog?page=${
            Number(atualPage) + 1 > pagesCount[pagesCount.length - 1]
              ? pagesCount[pagesCount.length - 1]
              : Number(atualPage) + 1
          }`}
          className="px-2 py-2 rounded-[5px] border border-gray"
        >
          <Image src={arrow} width={20} alt="Anterior" />
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default page
