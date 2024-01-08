export interface BlogPost {
  id: number
  attributes: {
    titulo: string
    descricao: string
    blogConteudo: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    categoria: string
    imagemBg: {
      data: {
        id: number
        attributes: {
          url: string
        }
      }
    }
  }
}

// Função para buscar os posts da API
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Realize a requisição GET à API usando fetch
    const response = await fetch(
      'https://felipe-oliveira-blog.onrender.com/api/blog-posts',
    )

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar os posts da API. Código de status: ${response.status}`,
      )
    }

    // Extraia os dados da resposta
    const data = await response.json()

    // Extraia os posts do objeto de dados
    const posts: BlogPost[] = data.data

    return posts
  } catch (error) {
    console.error('Erro ao buscar os posts da API:', error)
    throw error
  }
}
