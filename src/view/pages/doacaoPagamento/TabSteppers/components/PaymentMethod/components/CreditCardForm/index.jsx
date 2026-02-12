'use client'

export default function CreditCardForm() {
  return (
    <div className="animate-in fade-in w-full duration-500">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Número do cartão <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 transition-all outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Nome no cartão <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Insira o nome como está no cartão"
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 transition-all outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            Validade <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="MM/AA"
            maxLength={5}
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 transition-all outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        {/* CVV */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="000"
            maxLength={4}
            className="rounded-xl border border-gray-100 bg-white p-3 text-gray-600 transition-all outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>
      </form>
    </div>
  )
}
