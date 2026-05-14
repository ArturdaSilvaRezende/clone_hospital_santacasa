import { render, screen, act } from '@testing-library/react'
import {  Suspense } from 'react'
import Home from '.'


const renderWithSuspense = async (promise) => {
  let result;
  await act(async () => {
    result = render(
      <Suspense fallback={<div>Carregando...</div>}>
        <Home newsPromise={promise} />
      </Suspense>
    )
  })
  return result
}

describe('Componente Home (Listagem de Notícias)', () => {
  const mockNews = [
    {
      id: 1,
      documentId: 'doc-1',
      title: 'Notícia Normal 1',
      description: 'Descrição da notícia 1',
      createdAt: '2026-05-14T10:00:00Z',
      is_banner: null,
      news_image: { url: '/foto1.jpg' }
    },
    {
      id: 2,
      documentId: 'doc-2',
      title: 'Notícia Banner',
      description: 'Esta não deve aparecer',
      createdAt: '2026-05-14T10:00:00Z',
      is_banner: true, 
      news_image: { url: '/foto2.jpg' }
    }
  ]

  it('deve filtrar e exibir apenas notícias que não são banners', async () => {
    const promise = Promise.resolve(mockNews)
    await renderWithSuspense(promise)

    const titulo = await screen.findByText('Notícia Normal 1')
    expect(titulo).toBeInTheDocument()

    const tituloBanner = screen.queryByText('Notícia Banner')
    expect(tituloBanner).not.toBeInTheDocument()
  })

  it('deve formatar a data corretamente para o padrão brasileiro', async () => {
    const promise = Promise.resolve([mockNews[0]])
    await renderWithSuspense(promise)

    const dataFormatada = await screen.findByText(/14 de maio de 2026/i)
    expect(dataFormatada).toBeInTheDocument()
  })

  it('deve renderizar o link correto com documentId', async () => {
    const promise = Promise.resolve([mockNews[0]])
    await renderWithSuspense(promise)

    const link = await screen.findByRole('link', { name: /ler mais sobre notícia normal 1/i })
    expect(link).toHaveAttribute('href', '/noticias/doc-1')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('deve retornar null (não renderizar nada) se a lista de notícias filtrada for vazia', async () => {
    const promise = Promise.resolve([{ ...mockNews[1] }])
    const { container } = await renderWithSuspense(promise)

    await new Promise((r) => setTimeout(r, 0))
    
    expect(container.firstChild).toBeNull()
  })
})