import { render, screen } from '@testing-library/react'
import Noticias from './page' 
import Home from './_components/noticias/Home'

jest.mock('./_components/noticias/Home', () => {
  return jest.fn(() => <div data-testid="mock-home">Home Component</div>)
})

global.fetch = jest.fn()

describe('Server Component: Noticias', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve buscar as notícias na API correta e passar a Promise para o Home', async () => {
    const mockData = {
      data: [{ id: 1, attributes: { titulo: 'Notícia Teste' } }]
    }

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
    })

    const Component = await Noticias()
    render(Component)

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:1337/api/noticias/?populate=*',
      expect.objectContaining({ next: { revalidate: 60 } })
    )

    expect(screen.getByTestId('mock-home')).toBeInTheDocument()

    const passedPromise = Home.mock.calls[0][0].newsPromise
    const result = await passedPromise
    expect(result).toEqual(mockData.data)
  })

  it('deve retornar um array vazio se a API falhar ou vier sem dados', async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: null })
    })

    const Component = await Noticias()
    render(Component)

    const passedPromise = Home.mock.calls[0][0].newsPromise
    const result = await passedPromise

    expect(result).toEqual([])
  })
})
