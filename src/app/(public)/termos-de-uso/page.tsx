/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Anunciei",
  description:
    "Termos e condições para utilização da nossa plataforma de anúncios de veículos.",
};

export default function TermosDeUsoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Termos de Uso
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
                { id: "aceitacao", titulo: "Aceitação dos Termos" },
                { id: "servico", titulo: "Descrição do Serviço" },
                { id: "contas", titulo: "Contas e Registro" },
                { id: "anuncios", titulo: "Anúncios de Veículos" },
                { id: "conteudo", titulo: "Conteúdo do Usuário" },
                { id: "propriedade", titulo: "Propriedade Intelectual" },
                { id: "pagamentos", titulo: "Pagamentos e Taxas" },
                {
                  id: "responsabilidade",
                  titulo: "Limitações de Responsabilidade",
                },
                { id: "indenizacao", titulo: "Indenização" },
                { id: "rescisao", titulo: "Rescisão" },
                { id: "alteracoes", titulo: "Alterações nos Termos" },
                { id: "lei", titulo: "Lei Aplicável" },
                { id: "contato", titulo: "Contato" },
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
          <section id="aceitacao" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Aceitação dos Termos
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Bem-vindo à Anunciei. Ao acessar ou usar nosso site e serviços
                de anúncios de veículos online (coletivamente, o "Serviço"),
                você concorda em cumprir e ficar vinculado a estes Termos de Uso
                ("Termos"). Se você não concordar com estes Termos, não poderá
                acessar ou usar o Serviço.
              </p>
              <p>
                Estes Termos constituem um acordo legal entre você e Anunciei
                ("nós", "nosso" ou "nossa") e regem seu uso do Serviço.
                Recomendamos que você leia cuidadosamente estes Termos antes de
                usar o Serviço.
              </p>
            </div>
          </section>

          <section id="servico" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Descrição do Serviço
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A Anunciei é uma plataforma online que permite aos usuários
                publicar, pesquisar e visualizar anúncios de veículos para venda
                ou compra. Nosso Serviço facilita a conexão entre compradores e
                vendedores de veículos, mas não somos parte de nenhuma transação
                entre usuários.
              </p>
              <p>
                Não garantimos a qualidade, segurança ou legalidade de qualquer
                veículo anunciado, a veracidade ou precisão dos anúncios, a
                capacidade dos vendedores de vender veículos ou a capacidade dos
                compradores de pagar pelos veículos.
              </p>
            </div>
          </section>

          <section id="contas" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Contas e Registro
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Para acessar determinados recursos do nosso Serviço, você pode
                precisar criar uma conta. Ao criar uma conta, você concorda em
                fornecer informações precisas, atuais e completas. Você é
                responsável por manter a confidencialidade de sua senha e por
                todas as atividades que ocorrem em sua conta.
              </p>
              <p>Você concorda em:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Criar apenas uma conta por pessoa;</li>
                <li>Não compartilhar sua conta ou senha com terceiros;</li>
                <li>
                  Notificar-nos imediatamente sobre qualquer uso não autorizado
                  de sua conta;
                </li>
                <li>
                  Ser o único responsável por todas as atividades que ocorrem
                  sob sua conta, mesmo se não autorizadas por você.
                </li>
              </ul>
              <p>
                Reservamo-nos o direito de encerrar ou suspender sua conta a
                nosso critério, sem aviso prévio, por qualquer motivo, incluindo
                violação destes Termos.
              </p>
            </div>
          </section>

          <section id="anuncios" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Anúncios de Veículos
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ao publicar um anúncio de veículo em nossa plataforma, você
                concorda que:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Você é o proprietário legal do veículo ou está autorizado a
                  vendê-lo;
                </li>
                <li>
                  Todas as informações fornecidas sobre o veículo são
                  verdadeiras, precisas, completas e não enganosas;
                </li>
                <li>
                  O veículo está em condições legais de ser vendido e
                  transferido;
                </li>
                <li>
                  As imagens do veículo são atuais, representam com precisão o
                  veículo anunciado e você tem direitos sobre essas imagens;
                </li>
                <li>
                  O preço anunciado é em moeda local (Real) e inclui todos os
                  custos obrigatórios;
                </li>
                <li>
                  Você cumprirá todas as leis e regulamentos aplicáveis
                  relacionados à venda de veículos e publicidade.
                </li>
              </ul>
              <p>
                Reservamo-nos o direito de remover qualquer anúncio que viole
                estes Termos ou que consideremos inadequado, a nosso critério
                exclusivo.
              </p>
            </div>
          </section>

          <section id="conteudo" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Conteúdo do Usuário
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nosso Serviço permite que você publique, envie, armazene ou
                compartilhe conteúdo, incluindo textos, imagens e outras
                informações ("Conteúdo do Usuário"). Você mantém todos os
                direitos sobre seu Conteúdo do Usuário.
              </p>
              <p>
                Ao fornecer Conteúdo do Usuário em nosso Serviço, você nos
                concede uma licença mundial, não exclusiva, isenta de royalties,
                transferível e sublicenciável para usar, reproduzir, modificar,
                adaptar, publicar, traduzir, distribuir e exibir esse Conteúdo
                do Usuário em conexão com a operação e promoção do nosso
                Serviço.
              </p>
              <p>Você declara e garante que:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Você possui ou tem os direitos necessários para usar e
                  autorizar-nos a usar seu Conteúdo do Usuário;
                </li>
                <li>
                  Seu Conteúdo do Usuário não viola direitos de terceiros,
                  incluindo direitos de propriedade intelectual, privacidade ou
                  publicidade;
                </li>
                <li>
                  Seu Conteúdo do Usuário não é difamatório, obsceno,
                  pornográfico, assediador, ameaçador, odioso ou de outra forma
                  inadequado.
                </li>
              </ul>
              <p>
                Reservamo-nos o direito de remover qualquer Conteúdo do Usuário
                que viole estes Termos ou que consideremos inadequado, a nosso
                critério exclusivo.
              </p>
            </div>
          </section>

          <section id="propriedade" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Propriedade Intelectual
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                O Serviço e seu conteúdo original, recursos e funcionalidades
                são e permanecerão propriedade exclusiva da Anunciei e de seus
                licenciadores. O Serviço é protegido por direitos autorais,
                marcas registradas e outras leis do Brasil e de outros países.
              </p>
              <p>
                Nossas marcas registradas e identidade visual não podem ser
                usadas em conexão com qualquer produto ou serviço sem o
                consentimento prévio por escrito da Anunciei.
              </p>
            </div>
          </section>

          <section id="pagamentos" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Pagamentos e Taxas
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Podemos cobrar taxas por certos recursos do nosso Serviço, como
                anúncios em destaque ou pacotes de anúncios. Quando você compra
                um serviço pago, concorda em pagar todas as taxas aplicáveis
                conforme descrito no momento da compra.
              </p>
              <p>
                Todas as taxas são em Reais (R$) e não são reembolsáveis, exceto
                quando exigido por lei ou conforme estabelecido em nossa
                política de reembolso.
              </p>
              <p>
                Reservamo-nos o direito de alterar nossas taxas a qualquer
                momento. Notificaremos você sobre quaisquer alterações de preço
                antes que elas entrem em vigor.
              </p>
            </div>
          </section>

          <section id="responsabilidade" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Limitações de Responsabilidade
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Em nenhuma circunstância a Anunciei, seus diretores,
                funcionários, parceiros, agentes, fornecedores ou afiliados
                serão responsáveis por quaisquer danos indiretos, incidentais,
                especiais, consequenciais ou punitivos, incluindo, sem
                limitação, perda de lucros, dados, uso, boa vontade ou outras
                perdas intangíveis, resultantes de:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Seu acesso ou uso ou incapacidade de acessar ou usar o
                  Serviço;
                </li>
                <li>Qualquer conduta ou conteúdo de terceiros no Serviço;</li>
                <li>Qualquer conteúdo obtido do Serviço;</li>
                <li>
                  Acesso não autorizado, uso ou alteração de suas transmissões
                  ou conteúdo, seja com base em garantia, contrato, ato ilícito
                  (incluindo negligência) ou qualquer outra teoria legal.
                </li>
              </ul>
              <p>
                Não somos responsáveis por quaisquer transações entre usuários.
                Todas as transações são realizadas por sua conta e risco.
              </p>
            </div>
          </section>

          <section id="indenizacao" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Indenização
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Você concorda em defender, indenizar e isentar a Anunciei, seus
                diretores, funcionários, parceiros, agentes, contratados,
                licenci Anunciei, seus diretores, funcionários, parceiros,
                agentes, contratados, licenciadores e fornecedores de quaisquer
                reclamações, responsabilidades, danos, perdas e despesas,
                incluindo, sem limitação, honorários advocatícios razoáveis,
                decorrentes de ou de qualquer forma relacionados a:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Seu uso do Serviço;</li>
                <li>Seu Conteúdo do Usuário;</li>
                <li>Sua violação destes Termos;</li>
                <li>Sua violação de quaisquer direitos de terceiros.</li>
              </ul>
            </div>
          </section>

          <section id="rescisao" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Rescisão
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Podemos encerrar ou suspender sua conta e acesso ao Serviço
                imediatamente, sem aviso prévio ou responsabilidade, por
                qualquer motivo, incluindo, sem limitação, se você violar estes
                Termos.
              </p>
              <p>
                Após a rescisão, seu direito de usar o Serviço cessará
                imediatamente. Se você deseja encerrar sua conta, você pode
                simplesmente descontinuar o uso do Serviço ou excluir sua conta
                através das configurações da conta.
              </p>
              <p>
                Todas as disposições dos Termos que, por sua natureza, devem
                sobreviver à rescisão, sobreviverão à rescisão, incluindo, sem
                limitação, disposições de propriedade, isenções de garantia,
                indenização e limitações de responsabilidade.
              </p>
            </div>
          </section>

          <section id="alteracoes" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Alterações nos Termos
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Reservamo-nos o direito, a nosso critério exclusivo, de
                modificar ou substituir estes Termos a qualquer momento. Se uma
                revisão for material, tentaremos fornecer um aviso com pelo
                menos 30 dias de antecedência antes que quaisquer novos termos
                entrem em vigor.
              </p>
              <p>
                O que constitui uma alteração material será determinado a nosso
                critério exclusivo. Ao continuar a acessar ou usar nosso Serviço
                após essas revisões se tornarem efetivas, você concorda em ficar
                vinculado aos termos revisados. Se você não concordar com os
                novos termos, deixe de usar o Serviço.
              </p>
            </div>
          </section>

          <section id="lei" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Lei Aplicável
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis
                do Brasil, sem considerar suas disposições de conflito de leis.
              </p>
              <p>
                Nossa falha em fazer valer qualquer direito ou disposição destes
                Termos não será considerada uma renúncia a esses direitos. Se
                qualquer disposição destes Termos for considerada inválida ou
                inexequível por um tribunal, as disposições restantes destes
                Termos permanecerão em vigor.
              </p>
              <p>
                Estes Termos constituem o acordo completo entre nós em relação
                ao nosso Serviço e substituem quaisquer acordos anteriores que
                possamos ter tido entre nós em relação ao Serviço.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/politicas-de-privacidade"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 hover:underline"
          >
            Ver nossa Política de Privacidade
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
