import { useSelector } from 'react-redux'

export default function DonationSummaryCard() {
  const { cart_total_price: cartTotalPrice, value_selected: valueSelected } =
    useSelector(store => store.donate)

  return (
    <div className="h-81.25 lg:w-[40%] md:w-78 max-sm:w-full rounded-xl border border-[#7270701A] bg-white px-6.5 py-5">
      <h2 className="mb-6 text-[18px] font-medium text-black">
        Resumo da Doação
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between text-[#535353]">
          <span className="text-[15px] font-normal">Nome da doação</span>
          <span className="font-normal text-[#535353]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
        </div>

        <div className="flex justify-between text-[#535353]">
          <span className="text-[15px] font-normal">Taxa de processamento</span>
          <span className="font-normal text-[#535353]">Grátis</span>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#535353]">Total</span>
          <span className="text-xl font-bold text-[#535353]">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(
              Number(cartTotalPrice || 0) + Number(valueSelected?.preco || 0)
            )}
          </span>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[#727070]">
        Os seus dados pessoais serão utilizados para processar a sua compra,
        apoiar a sua experiência em todo este site e para outros fins descritos
        na nossa{' '}
        <a href="#" className="text-[#FD0003] hover:underline">
          Política de Privacidade
        </a>
        .
      </p>
    </div>
  )
}
