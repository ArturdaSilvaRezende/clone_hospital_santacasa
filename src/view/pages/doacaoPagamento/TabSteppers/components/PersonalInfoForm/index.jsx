'use client'

import { FaArrowRight } from 'react-icons/fa6'

export default function PersonalInfoForm({
  setActiveStep = () => {},
  steps = [],
  activeStep = 0
}) {
  const handleNextStep = () => {
    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
  }
  return (
    <>
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Informações pessoais
      </h2>

      <form className="space-y-6">
        {/* Grid de Inputs */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* CPF */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              CPF <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="text"
              placeholder="Insira seu CPF."
              className="rounded-xl border border-gray-200 p-3 text-gray-600 outline-none focus:border-gray-400"
            />
          </div>

          {/* Nome Completo */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Nome completo <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="text"
              placeholder="Insira seu nome completo"
              className="rounded-xl border border-gray-200 p-3 text-gray-600 outline-none focus:border-gray-400"
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              E-mail <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com.br"
              className="rounded-xl border border-gray-200 p-3 text-gray-600 outline-none focus:border-gray-400"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Telefone <span className="text-[#FF0909]">*</span>
            </label>
            <input
              type="tel"
              placeholder="Insira seu telefone."
              className="rounded-xl border border-gray-200 p-3 text-gray-600 outline-none focus:border-gray-400"
            />
          </div>

          {/* Período da recorrência */}
          <div className="flex flex-col gap-2 md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">
              Período da recorrência <span className="text-[#FF0909]">*</span>
            </label>
            <select className="appearance-none rounded-xl border border-gray-200 bg-white p-3 text-gray-600 outline-none focus:border-gray-400">
              <option>6 meses</option>
              <option>12 meses</option>
            </select>
          </div>
        </div>

        {/* Checkbox Comunicação */}
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-gray-700">
            Nós adoraríamos poder entrar em contato com você sobre esta e outras
            campanhas.
          </p>
          <label className="flex items-center gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
            />
            Sim, por favor. Desejo receber essas comunicações.
          </label>
        </div>

        {/* Mensagem e Doador Anônimo */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700">
              Deixe sua mensagem
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
              />
              Quero ser um doador anônimo.
            </label>
          </div>
          <textarea
            placeholder="Insira sua mensagem."
            rows={4}
            className="w-full rounded-xl border border-gray-200 p-3 text-gray-600 outline-none focus:border-gray-400"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-500">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300 accent-[#FF0909]"
          />
          Li e aceito as{' '}
          <span className="cursor-pointer text-[#FD0003] hover:underline">
            Políticas de Privacidade.
          </span>
        </label>

        <button
          type="button"
          onClick={handleNextStep}
          className="group ml-auto flex h-10 w-65 items-center justify-center gap-2 rounded-full bg-[#FF0909] font-bold text-white transition-all hover:bg-red-700"
        >
          <span> Continuar para pagamento</span>

          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <FaArrowRight className="text-lg" />
          </span>
        </button>
      </form>
    </>
  )
}
