import { render, screen } from '@testing-library/react'
import Page from './page'

global.fetch = jest.fn()

jest.mock('../../../components/CustomComponents/DataTime', () => {
  return function MockDataTime({ data }) {
    return <span data-testid="data-time">{data.createdAt}</span>
  }
})

describe('Page [id] de Notícias', () => {
  const mockParams = Promise.resolve({ id: '1' })

  const mockSingleNews = {
    data: {
      id: 1,
      title: 'Título da Notícia Teste',
      description:
        'Primeiro parágrafo.\nSubtítulo Curto Sem Ponto\n1. Item de lista\nOutro parágrafo comum.',
      createdAt: '2026-05-14T10:00:00Z',
      is_banner: false,
      news_image: { url: '/news.jpg' }
    }
  }

  const mockAllRes = { data: [] }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar o conteúdo da notícia e as chamadas de API corretamente', async () => {
    global.fetch
      .mockResolvedValueOnce({ ok: true, json: async () => mockSingleNews })
      .mockResolvedValueOnce({ ok: true, json: async () => mockAllRes })

    const ResolvedPage = await Page({ params: mockParams })
    render(ResolvedPage)

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/noticias/1?populate=*'),
      expect.any(Object)
    )

    expect(screen.getByText('Título da Notícia Teste')).toBeInTheDocument()
    expect(screen.getByTestId('data-time')).toHaveTextContent(
      '2026-05-14T10:00:00Z'
    )
  })

  it('deve lançar erro se a resposta do Strapi não for ok', async () => {
    global.fetch.mockResolvedValueOnce({ ok: false })

    await expect(Page({ params: mockParams })).rejects.toThrow(
      'Erro ao carregar dados do Strapi'
    )
  })
})
