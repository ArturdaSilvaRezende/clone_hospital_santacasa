import { useId } from "react"

export default function CookiesPolicy() {
  const id = useId()
  return (
    <section aria-labelledby={`${id}-cookies-title`} className="my-16 max-sm:mt-10 max-sm:mb-14">
      <div className="container mx-auto max-sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <article className="rounded-2xl bg-white p-6 max-sm:p-4" role="article">
          <header className="mb-8">
            <h1 className="text-center text-[24px] font-semibold text-[#262626]" id={`${id}-cookies-title`}>
              Política de Cookies
            </h1>
          </header>

          <div className="space-y-8">
            <section aria-label="1. O que são Cookies?" className="space-y-2.5">
              <h2 className="text-[22px] font-medium text-[#2F2E41]">
                1. O que são Cookies?
              </h2>

              <p className="text-[16px] font-normal text-[#535353]">
                Cookies são pequenos arquivos que são gravados em seu computador
                quando você acessa sites na Internet. Quando um website é
                visitado, este envia o Cookie para o seu computador ou celular,
                o qual é armazenado em uma pasta localizada dentro do seu
                browser/navegador.
              </p>

              <p className="text-[16px] font-normal text-[#535353]">
                Os Cookies não transferem vírus ou malware para o seu computador
                ou celular, pois a informação de um Cookie não se altera quando
                se move o respectivo website de trás para frente, não havendo
                forma de alterar o funcionamento do seu dispositivo. Sendo
                assim, eles atuam como registros (atividades do usuário), sendo
                atualizados todas as vezes em que o website for acessado.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                Podemos obter informações sobre sua navegação uma vez concedida
                a coleta aos Cookies, enviado por meio de nosso website. Cookies
                são ferramentas essenciais na navegação online. Consistem em
                arquivos que identificam a interação entre você, nosso Website e
                nossas redes sociais ou anúncios, e que são transferidos para o
                seu equipamento (computador, tablet ou smartphone) visando
                otimizar e personalizar a sua experiência de navegação no
                Website.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                É por causa de Cookies, por exemplo, que você vê anúncios de
                coisas que você já procurou quando visita sites de mídias
                sociais, notícias e mais.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                O termo “cookie” pode ser usado para descrever uma série de
                tecnologias, incluindo, mas não se limitando a pixel tags, web
                beacons e identificadores de dispositivo móvel.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                O nosso Website usa tanto Cookies de sessão quanto Cookies
                persistentes.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                Os Cookies de sessão coletam informações que não permitem a
                identificação do usuário e são automaticamente deletados quando
                a janela do seu navegador for fechada.
              </p>
              <p className="text-[16px] font-normal text-[#535353]">
                Já os Cookies persistentes são armazenados no seu computador ou
                dispositivo móvel até sua expiração e coletam informações que
                podem identificar o indivíduo. Além disso, os Cookies utilizados
                no Website podem ser “proprietários”, isto é, Cookies definidos
                por nós – ou por um terceiro em nosso nome – ou “de terceiros”,
                que permitem que recursos ou funcionalidades de terceiros
                confiáveis sejam fornecidos nos Website ou por meio deles ou em
                serviços utilizados como anúncios, conteúdo interativo ou
                analytics. Esses terceiros podem reconhecer o seu dispositivo
                quando você navega em nosso Website ou utiliza nossos serviços
                ou quando você navega em outros websites ou utiliza outros
                serviços.
              </p>
            </section>

            <section
              aria-label="2. Como os Cookies são utilizados pelo Website"
              className="space-y-2.5"
            >
              <div className="mb-5">
                <h2 className="text-[22px] font-medium text-[#2F2E41]">
                  2. Como os Cookies são utilizados pelo Website
                </h2>

                <p className="text-[16px] font-normal text-[#535353]">
                  A seguir listamos os diferentes tipos de cookies utilizados no
                  Website.
                </p>
              </div>

              <div>
                <h3 className="mb-5 text-[16px] font-medium text-[#FD0003]">
                  Cookies Essenciais
                </h3>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Os Cookies essenciais são necessários para o funcionamento do
                  Website e prestação dos serviços a você. Sem estes Cookies, o
                  Website não funcionará tão bem como nós gostaríamos, e podemos
                  não ser capazes de fornecer determinados serviços ou recursos
                  a eles associados.
                </p>

                <ul className="mb-5 list-disc space-y-1 pl-6">
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Sessão:
                    </strong>
                    Os Cookies de sessão são usados para manter o estado da
                    aplicação.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Balanceamento de carga:
                    </strong>
                    Os Cookies de balanceamento de carga são usados para
                    distribuir e para diminuir a carga do servidor.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Identificação do usuário:
                    </strong>
                    Os Cookies de identificação de usuário são usados para
                    garantir que os usuários só vejam a sua própria informação.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Segurança:
                    </strong>
                    Os Cookies de segurança são usados para os controles de
                    segurança e verificações.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-[16px] font-medium text-[#FD0003]">
                  Cookies de Preferências
                </h3>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Os Cookies de preferências coletam informações sobre suas
                  escolhas e preferências, permitindo que o nosso Website se
                  lembre do idioma, localização, dispositivo utilizado ou outras
                  configurações e que a sua experiência seja personalizada de
                  acordo com essas preferências.
                </p>

                <ul className="list-disc space-y-1 pl-6">
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Idioma:
                    </strong>
                    Os Cookies de idioma são usados para armazenar a língua que
                    o usuário selecionou, e para mostrar as opções corretas.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Localização:
                    </strong>
                    O endereço aproximado do usuário (cidade, estado, país,
                    código postal), conforme determinado pelo endereço IP, é
                    armazenado para permitir selecionar automaticamente o país,
                    mostrando assim quais os estabelecimentos mais próximos do
                    usuário.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Mobile:
                    </strong>
                    Se o usuário visualiza o Website num dispositivo móvel, é
                    definido um cookie para indicar que foi selecionado o
                    website principal (ou seja, que o dispositivo suporta
                    Flash), ou o website móvel não-Flash.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Website de referência:
                    </strong>
                    O website de referência é registrado para melhor se entender
                    a preferência do usuário.
                  </li>
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Ultima Visita e atividade:
                    </strong>
                    As datas das últimas visitas e atividades e outras
                    informações semelhantes são gravadas para que se possa
                    fornecer aos usuários atualizações sobre “o que mudou no
                    website desde sua última visita”, e para melhor se
                    compreender as suas preferências.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Vídeos recentemente visualizados:
                    </strong>
                    As datas e títulos de vídeos recentemente visualizados são
                    registados para melhor se definir as preferências do
                    usuário.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Flash Cookies:
                    </strong>
                    Os Flashs Cookies são usados de forma a permitir a
                    reprodução de conteúdo de áudio e vídeo.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Histórico de Página:
                    </strong>
                    Os Cookies de histórico da página são usados para controlar
                    a sequência de páginas que o utilizador visita. Se o
                    utilizador receber uma mensagem de erro ao visitar o
                    Website, as informações do cookie são guardadas num ficheiro
                    de registo para o relatório de erros e resolução.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-[16px] font-medium text-[#FD0003]">
                  Cookies Analíticos
                </h3>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Os Cookies de preferências coletam informações sobre suas
                  escolhas e preferências, permitindo que o nosso Website se
                  lembre do idioma, localização, dispositivo utilizado ou outras
                  configurações e que a sua experiência seja personalizada de
                  acordo com essas preferências.
                </p>

                <ul className="mb-5 list-disc space-y-1 pl-6">
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Google Analytics:
                    </strong>
                    Os Cookies do Google Analytics recolhem dados estatísticos
                    para melhorar a apresentação e navegação no Website. A
                    Google completa os dados agregados com dados demográficos e
                    outra informação de interesse, para que possamos entender
                    melhor nossos visitantes.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-[16px] font-medium text-[#FD0003]">
                  Cookies de Publicidade
                </h3>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Os Cookies de publicidade são utilizados para fins de
                  marketing, permitindo o direcionamento dos anúncios que
                  aparecem para você com base nos seus interesses. O objetivo é
                  tornar o conteúdo publicitário mais relevante para você,
                  melhorar os relatórios sobre o desempenho da campanha e evitar
                  a exibição de anúncios que você já viu.
                </p>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Algumas das páginas que você visita no Website também podem
                  coletar informações através do uso de etiquetas de pixels (ou
                  pixel tags), que podem ser compartilhadas com terceiros que
                  apoiam diretamente as nossas atividades de promoção e
                  desenvolvimento do website.
                </p>

                <p className="mb-5 text-[16px] font-normal text-[#535353]">
                  Por exemplo, as informações de utilização do nosso Website,
                  podem ser compartilhadas com um terceiro, como uma agência de
                  publicidade, para que possamos melhor direcionar anúncios nos
                  banners em nosso website.
                </p>

                <ul className="list-disc space-y-1 pl-6">
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Publicidade:
                    </strong>
                    Distribuir publicidade direcionada/ comportamental.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Estudos de Mercado:
                    </strong>
                    Realizar estudos de mercado.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Campanha / Promoção:
                    </strong>
                    Medir a eficácia da campanha.
                  </li>

                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Website de referência:
                    </strong>
                    O website de referência é registrado para melhor se entender
                    a preferência do usuário.
                  </li>
                  <li className="text-[16px] text-[#535353]">
                    <strong className="mr-1 font-medium text-[#262626]">
                      Detecção de Fraude:
                    </strong>
                    Detectar a fraude do clique.
                  </li>
                </ul>
              </div>
            </section>

            <section
              aria-label="3. Plugins de Mídia Social"
              className="space-y-2.5"
            >
              <h2 className="text-[22px] font-medium text-[#2F2E41]">
                3. Plugins de Mídia Social
              </h2>

              <p className="mb-5 text-[16px] font-normal text-[#535353]">
                Também usamos botões e/ou plugins de mídia social no Website.
                Eles permitem que você se conecte com sua rede social de várias
                maneiras. Para que estes funcionem, os websites de mídia social,
                como, por exemplo, o Facebook, definirão as tecnologias de
                rastreamento em nosso Website que podem ser usados para
                aprimorar seu perfil em seus websites ou contribuir com os dados
                armazenados para vários fins delineados em sua respectiva
                política de privacidade.
              </p>
            </section>

            <section
              aria-label="4. Como gerir Cookies?"
              className="space-y-2.5"
            >
              <h2 className="text-[22px] font-medium text-[#2F2E41]">
                4. Como gerir Cookies?
              </h2>

              <p className="mb-5 text-[16px] font-normal text-[#535353]">
                Embora a maioria dos navegadores de Internet esteja inicialmente
                configurada para aceitar Cookies automaticamente, muitos também
                permitem que você altere as configurações para bloquear Cookies
                ou para alertá-lo quando os Cookies são enviados para o
                dispositivo.
              </p>

              <p className="mb-5 text-[16px] font-normal text-[#535353]">
                Para saber melhor consulte as opções de ajuda de seu navegador.
              </p>

              <p className="mb-5 text-[16px] font-normal text-[#535353]">
                Note que se os Cookies forem desativados ou removidos, nem todos
                os recursos do Website poderão funcionar como pretendido. Por
                exemplo, você pode não ser capaz de visitar certas áreas do
                nosso Website ou pode não receber informações personalizadas
                quando visitar o Website.
              </p>

              <p className="mb-5 text-[16px] font-normal text-[#535353]">
                Caso você use diferentes dispositivos para visualizar e acessar
                o Website (por exemplo, computador, smartphone, tablet, etc.),
                deve configurar cada navegador de cada dispositivo para atender
                às suas preferências de Cookies.
              </p>
            </section>

            <section aria-label="5. Contate-nos" className="space-y-2.5">
              <h2 className="text-[22px] font-medium text-[#2F2E41]">
                5. Contate-nos
              </h2>

              <p className="text-[16px] font-normal text-[#535353]">
                Caso tenha alguma dúvida acerca desta Política de Cookies, por
                favor contate-nos através dos nossos Canais de Atendimento
                disponíveis.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  )
}
