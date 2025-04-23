/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Políticas de Privacidade | Anunciei",
  description:
    "Nossas políticas de privacidade e como tratamos seus dados pessoais.",
};

export default function PoliticasPrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Política de Privacidade
          </h1>
          <p className="text-gray-600">
            Última atualização: 22 de Abril de 2025
          </p>
        </div>

        <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">Índice</h2>
            <ul className="space-y-1">
              {[
                { id: "introducao", titulo: "Introdução" },
                { id: "coleta", titulo: "Informações que coletamos" },
                { id: "uso", titulo: "Como usamos suas informações" },
                {
                  id: "compartilhamento",
                  titulo: "Compartilhamento de informações",
                },
                { id: "cookies", titulo: "Cookies e tecnologias semelhantes" },
                { id: "direitos", titulo: "Seus direitos e escolhas" },
                { id: "seguranca", titulo: "Segurança de dados" },
                { id: "menores", titulo: "Menores de idade" },
                { id: "alteracoes", titulo: "Alterações nesta política" },
                { id: "contato", titulo: "Como entrar em contato" },
              ].map((item) => (
                <li key={item.id} className="flex items-center">
                  <ChevronRight className="mr-1 h-4 w-4 text-gray-500" />
                  <a
                    href={`#${item.id}`}
                    className="text-gray-600 hover:text-gray-900 hover:underline"
                  >
                    {item.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <section id="introducao" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Introdução
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A Anunciei ("nós", "nosso" ou "nossa") está comprometida em
                proteger sua privacidade. Esta Política de Privacidade explica
                como coletamos, usamos, divulgamos e protegemos suas informações
                quando você utiliza nosso site e serviços de anúncios de
                veículos online ("Serviço").
              </p>
              <p>
                Ao utilizar nosso Serviço, você concorda com a coleta e uso de
                informações de acordo com esta política. Recomendamos que você
                leia este documento cuidadosamente para entender nossas práticas
                em relação aos seus dados pessoais.
              </p>
            </div>
          </section>

          <section id="coleta" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Informações que coletamos
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Coletamos vários tipos de informações para fornecer e melhorar
                nosso Serviço, incluindo:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Informações pessoais:</strong> Nome, endereço de
                  e-mail, número de telefone, endereço postal e outros dados que
                  você fornece ao criar uma conta ou anunciar um veículo.
                </li>
                <li>
                  <strong>Informações do veículo:</strong> Detalhes sobre os
                  veículos que você anuncia, incluindo marca, modelo, ano,
                  quilometragem, preço e fotos.
                </li>
                <li>
                  <strong>Informações de uso:</strong> Dados sobre como você
                  interage com nosso Serviço, incluindo páginas visitadas, tempo
                  gasto no site, anúncios visualizados e ações realizadas.
                </li>
                <li>
                  <strong>Informações do dispositivo:</strong> Dados sobre o
                  dispositivo que você usa para acessar nosso Serviço, incluindo
                  modelo do hardware, sistema operacional, identificadores
                  únicos e dados de rede móvel.
                </li>
                <li>
                  <strong>Informações de localização:</strong> Com sua
                  permissão, podemos coletar e processar informações sobre sua
                  localização para fornecer recursos baseados em localização.
                </li>
              </ul>
            </div>
          </section>

          <section id="uso" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Como usamos suas informações
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Fornecer, manter e melhorar nosso Serviço;</li>
                <li>Processar e gerenciar seus anúncios de veículos;</li>
                <li>Facilitar a comunicação entre compradores e vendedores;</li>
                <li>
                  Enviar notificações relacionadas à sua conta ou anúncios;
                </li>
                <li>
                  Personalizar sua experiência e fornecer conteúdo relevante;
                </li>
                <li>
                  Analisar como nosso Serviço é usado para melhorar a
                  funcionalidade;
                </li>
                <li>
                  Detectar, prevenir e resolver problemas técnicos e de
                  segurança;
                </li>
                <li>Cumprir obrigações legais.</li>
              </ul>
            </div>
          </section>

          <section id="compartilhamento" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Compartilhamento de informações
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Podemos compartilhar suas informações nas seguintes
                circunstâncias:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Com outros usuários:</strong> Quando você publica um
                  anúncio, certas informações (como seu nome, telefone e
                  localização) ficam visíveis para outros usuários interessados
                  no veículo.
                </li>
                <li>
                  <strong>Com prestadores de serviços:</strong> Compartilhamos
                  informações com terceiros que nos ajudam a operar, fornecer e
                  melhorar nosso Serviço (como processamento de pagamentos,
                  hospedagem de dados e análise).
                </li>
                <li>
                  <strong>Para conformidade legal:</strong> Podemos divulgar
                  informações quando acreditamos de boa-fé que a divulgação é
                  necessária para cumprir uma obrigação legal, proteger nossos
                  direitos, proteger sua segurança ou a segurança de outros.
                </li>
                <li>
                  <strong>Em caso de transferência de negócios:</strong> Se
                  estivermos envolvidos em uma fusão, aquisição ou venda de
                  ativos, suas informações podem ser transferidas como parte
                  desse processo.
                </li>
              </ul>
              <p>
                Não vendemos suas informações pessoais a terceiros para fins de
                marketing sem seu consentimento explícito.
              </p>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Cookies e tecnologias semelhantes
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Utilizamos cookies e tecnologias semelhantes para coletar
                informações e melhorar sua experiência. Cookies são pequenos
                arquivos de texto que são armazenados no seu dispositivo quando
                você visita nosso site.
              </p>
              <p>Usamos cookies para:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Manter você conectado à sua conta;</li>
                <li>Lembrar suas preferências e configurações;</li>
                <li>Entender como você interage com nosso Serviço;</li>
                <li>Analisar tendências e melhorar nosso site;</li>
                <li>
                  Personalizar anúncios e conteúdo com base em seus interesses.
                </li>
              </ul>
              <p>
                Você pode configurar seu navegador para recusar todos os cookies
                ou para indicar quando um cookie está sendo enviado. No entanto,
                algumas funcionalidades do nosso Serviço podem não funcionar
                corretamente sem cookies.
              </p>
            </div>
          </section>

          <section id="direitos" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Seus direitos e escolhas
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Você tem certos direitos em relação às suas informações
                pessoais:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Acesso e atualização:</strong> Você pode acessar e
                  atualizar suas informações pessoais através da sua conta no
                  nosso Serviço.
                </li>
                <li>
                  <strong>Exclusão:</strong> Você pode solicitar a exclusão da
                  sua conta e informações pessoais.
                </li>
                <li>
                  <strong>Restrição de processamento:</strong> Em certas
                  circunstâncias, você pode solicitar que limitemos o
                  processamento de suas informações pessoais.
                </li>
                <li>
                  <strong>Portabilidade de dados:</strong> Você pode solicitar
                  uma cópia de suas informações pessoais em um formato
                  estruturado e legível por máquina.
                </li>
                <li>
                  <strong>Oposição:</strong> Você pode se opor ao processamento
                  de suas informações pessoais em certas circunstâncias.
                </li>
                <li>
                  <strong>Comunicações de marketing:</strong> Você pode optar
                  por não receber nossas comunicações de marketing a qualquer
                  momento.
                </li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato conosco através
                das informações fornecidas na seção "Contato" abaixo.
              </p>
            </div>
          </section>

          <section id="seguranca" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Segurança de dados
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A segurança de suas informações é importante para nós.
                Implementamos medidas técnicas e organizacionais apropriadas
                para proteger suas informações pessoais contra acesso não
                autorizado, alteração, divulgação ou destruição.
              </p>
              <p>
                No entanto, nenhum método de transmissão pela Internet ou método
                de armazenamento eletrônico é 100% seguro. Portanto, não podemos
                garantir sua segurança absoluta.
              </p>
            </div>
          </section>

          <section id="menores" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Menores de idade
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nosso Serviço não se destina a pessoas menores de 18 anos. Não
                coletamos intencionalmente informações pessoais de crianças
                menores de 18 anos. Se você é pai ou responsável e sabe que seu
                filho nos forneceu informações pessoais, entre em contato
                conosco para que possamos tomar as medidas necessárias.
              </p>
            </div>
          </section>

          <section id="alteracoes" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Alterações nesta política
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Podemos atualizar nossa Política de Privacidade periodicamente.
                Notificaremos você sobre quaisquer alterações publicando a nova
                Política de Privacidade nesta página e atualizando a data de
                "última atualização" no topo.
              </p>
              <p>
                Recomendamos que você revise esta Política de Privacidade
                periodicamente para quaisquer alterações. As alterações a esta
                Política de Privacidade são efetivas quando publicadas nesta
                página.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/termos-de-uso"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 hover:underline"
          >
            Ver nossos Termos de Uso
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
