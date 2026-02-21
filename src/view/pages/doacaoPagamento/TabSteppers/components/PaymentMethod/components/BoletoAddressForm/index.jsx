'use client'

export default function BoletoAddressForm() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 w-full duration-500">
      <form className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* CEP */}
        <div className="flex flex-col gap-2 md:col-span-6">
          <label className="text-sm font-semibold text-gray-700">
            CEP <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="00000-000"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        {/* Bairro */}
        <div className="flex flex-col gap-2 md:col-span-6">
          <label className="text-sm font-semibold text-gray-700">
            Bairro <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Insira o seu bairro"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500"
          />
        </div>

        {/* Rua */}
        <div className="flex flex-col gap-2 md:col-span-4">
          <label className="text-sm font-semibold text-gray-700">
            Rua <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Insira a sua rua"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500"
          />
        </div>

        {/* Número */}
        <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-2">
          <label className="text-sm font-semibold text-gray-700">
            Número <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="000"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500"
          />
        </div>

        {/* Complemento */}
        <div className="flex flex-col gap-2 md:col-span-6 lg:col-span-4">
          <label className="text-sm font-semibold text-gray-700">
            Complemento
          </label>
          <input
            type="text"
            placeholder="Insira o complemento"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500"
          />
        </div>

        {/* Cidade */}
        <div className="flex flex-col gap-2 md:col-span-6">
          <label className="text-sm font-semibold text-gray-700">
            Cidade <span className="text-red-500">*</span>
          </label>
          <select className="appearance-none rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500">
            <option value="">Selecione sua cidade</option>
          </select>
        </div>

        {/* Estado */}
        <div className="flex flex-col gap-2 md:col-span-6">
          <label className="text-sm font-semibold text-gray-700">
            Estado <span className="text-red-500">*</span>
          </label>
          <select className="appearance-none rounded-xl border border-gray-100 bg-white p-3 text-gray-600 outline-none focus:border-red-500">
            <option value="">Selecione seu estado</option>
          </select>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-400">
        Ao confirmar doação, irá abrir uma nova aba com o seu boleto.
      </p>
    </div>
  )
}
