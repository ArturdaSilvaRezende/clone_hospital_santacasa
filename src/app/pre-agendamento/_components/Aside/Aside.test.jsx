import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom' // Para matchers como toBeInTheDocument e toHaveClass
import Aside from '.'
import { useScheduleStore } from '../../_store'

jest.mock('../../_store', () => ({
  useScheduleStore: jest.fn()
}))

describe('Aside Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockCurrentStep = stepId => {
    useScheduleStore.mockImplementation(selector =>
      selector({ current_step: stepId })
    )
  }

  describe('Renderização e Estrutura Geral', () => {
    it('deve renderizar a navegação com a label de acessibilidade correta', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const navElement = screen.getByRole('navigation', {
        name: /progresso do agendamento/i
      })
      expect(navElement).toBeInTheDocument()
    })

    it('deve renderizar as duas estruturas de lista (desktop e mobile) no DOM', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const lists = screen.getAllByRole('list')
      expect(lists).toHaveLength(2)
    })
  })

  describe('Cenário Desktop (Lista Completa)', () => {
    it('deve renderizar os 5 passos configurados com seus respectivos títulos', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const [desktopList] = screen.getAllByRole('list')
      const items = within(desktopList).getAllByRole('listitem')
      expect(items).toHaveLength(5)

      expect(
        within(desktopList).getByText('Tipo de Retorno')
      ).toBeInTheDocument()
      expect(
        within(desktopList).getByText('Dados Paciente')
      ).toBeInTheDocument()
      expect(
        within(desktopList).getByText('Dados Pré-agendamento')
      ).toBeInTheDocument()
      expect(
        within(desktopList).getByText('Observação e Confirmação')
      ).toBeInTheDocument()
      expect(
        within(desktopList).getByText('Anote o Protocolo')
      ).toBeInTheDocument()
    })

    it('deve marcar o primeiro passo como ativo e nenhum como concluído quando o passo for "first"', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const [desktopList] = screen.getAllByRole('list')
      const items = within(desktopList).getAllByRole('listitem')

      expect(items[0]).toHaveAttribute('aria-current', 'step')
      expect(items[1]).not.toHaveAttribute('aria-current')

      const concluidoTexts = within(desktopList).queryAllByText('- Concluído')
      expect(concluidoTexts).toHaveLength(0)
    })

    it('deve atualizar o status de concluído e ativo quando o passo for o terceiro ("third")', () => {
      mockCurrentStep('third')
      render(<Aside />)

      const [desktopList] = screen.getAllByRole('list')
      const items = within(desktopList).getAllByRole('listitem')

      expect(items[0]).not.toHaveAttribute('aria-current')
      expect(items[1]).not.toHaveAttribute('aria-current')

      expect(items[2]).toHaveAttribute('aria-current', 'step')

      const leitoresDeTelaConcluido =
        within(desktopList).getAllByText('- Concluído')
      expect(leitoresDeTelaConcluido).toHaveLength(2)
    })
  })

  describe('Cenário Mobile (Lista Reduzida)', () => {
    it('deve renderizar apenas 4 passos na lista mobile', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const [, mobileList] = screen.getAllByRole('list')
      const mobileItems = within(mobileList).getAllByRole('listitem')

      expect(mobileItems).toHaveLength(4)
    })

    it('deve aplicar corretamente os textos de acessibilidade nos spans ocultos do mobile', () => {
      mockCurrentStep('second')
      render(<Aside />)

      const [, mobileList] = screen.getAllByRole('list')

      const passo1Acessivel = within(mobileList).getByText(
        'Tipo de Retorno (Concluído)'
      )
      expect(passo1Acessivel).toBeInTheDocument()

      const passo2Acessivel = within(mobileList).getByText('Dados Paciente')
      expect(passo2Acessivel).toBeInTheDocument()
      expect(
        within(mobileList).queryByText('Dados Paciente (Concluído)')
      ).not.toBeInTheDocument()
    })
  })

  describe('Comportamento de Classes e Estilos (Opcional, mas garante fidelidade visual)', () => {
    it('deve alterar a cor do texto do título baseado no estado ativo', () => {
      mockCurrentStep('first')
      render(<Aside />)

      const [desktopList] = screen.getAllByRole('list')

      const tituloAtivo = within(desktopList).getByText('Tipo de Retorno')
      expect(tituloAtivo).toHaveClass('text-[#1A1A1A]')

      const tituloInativo = within(desktopList).getByText('Dados Paciente')
      expect(tituloInativo).toHaveClass('text-[#727070]')
    })
  })
})
