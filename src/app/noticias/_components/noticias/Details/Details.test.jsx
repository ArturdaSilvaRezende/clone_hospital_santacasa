import { render, screen } from '@testing-library/react'
import Details from '.' 

global.fetch = jest.fn()

describe('Server Component: Details', () => {
  const mockParams = { id: 'noticia-123' }
  const mockNewsData = {
    title: 'Título da Notícia Detalhada',
    content: 'Conteúdo completo da notícia aqui...'
  }

  beforeEach(() => {
    jest.clearAllMocks()
    process.env.NEXT_PUBLIC_API = 'http://api-teste.com'
  })

  it('deve buscar a notícia usando o ID dos params e renderizar corretamente', async () => {
    (global.fetch).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockNewsData),
    })

    const ResolvedComponent = await Details({ params: mockParams })
    render(ResolvedComponent)

    expect(global.fetch).toHaveBeenCalledWith(
      'http://api-teste.com/api/news/noticia-123',
      { cache: "no-store" }
    )

    expect(screen.getByRole('heading', { name: mockNewsData.title })).toBeInTheDocument()
    expect(screen.getByText(mockNewsData.content)).toBeInTheDocument()
  })

  it('deve quebrar se a API retornar um erro (Teste de Resiliência)', async () => {
    (global.fetch).mockRejectedValue(new Error('Falha na API'))

    await expect(Details({ params: mockParams })).rejects.toThrow('Falha na API')
  })
})