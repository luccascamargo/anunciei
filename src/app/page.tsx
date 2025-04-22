import Link from "next/link";
import {
  Search,
  Car,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchBox } from "@/components/searchBox";
import SuccessModal from "@/components/succesModal";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <SuccessModal />
      {/* Hero Section */}
      <section className="relative pt-24 md:h-[800px] flex items-center justify-center">
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Encontre o veículo perfeito para você
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A plataforma mais completa para comprar e vender veículos no
              Brasil. Anuncie com facilidade e encontre as melhores ofertas.
            </p>

            {/* Search Box */}
            <SearchBox />
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-background rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold">50mil+</p>
              <p className="text-sm text-muted-foreground">
                Veículos anunciados
              </p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold">2mil+</p>
              <p className="text-sm text-muted-foreground">Vendas por mês</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold">500mil+</p>
              <p className="text-sm text-muted-foreground">Usuários ativos</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold">4.8/5</p>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos as melhores ferramentas para você anunciar e encontrar
              veículos com facilidade e segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Estatísticas Avançadas</CardTitle>
                <CardDescription>
                  Acompanhe o desempenho dos seus anúncios em tempo real com
                  dados detalhados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Visualizações por dia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Taxa de conversão e contatos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Comparativo com o mercado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Segurança Garantida</CardTitle>
                <CardDescription>
                  Transações seguras e verificação de anúncios para sua
                  tranquilidade.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Verificação de contato</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Proteção contra fraudes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Avaliação de usuários</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maior Visibilidade</CardTitle>
                <CardDescription>
                  Alcance milhares de compradores interessados em todo o Brasil.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Destaque nos resultados de busca</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Integração com whatsapp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Recomendações personalizadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Anunciar ou encontrar um veículo nunca foi tão fácil. Siga estes
              simples passos:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">1</span>
                <div className="absolute w-8 h-0.5 bg-primary/30 right-[-2rem] top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie sua conta gratuitamente em menos de 1 minuto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">2</span>
                <div className="absolute w-8 h-0.5 bg-primary/30 right-[-2rem] top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crie seu anúncio</h3>
              <p className="text-muted-foreground">
                Adicione fotos e informações detalhadas do seu veículo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">3</span>
                <div className="absolute w-8 h-0.5 bg-primary/30 right-[-2rem] top-1/2 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receba contatos</h3>
              <p className="text-muted-foreground">
                Compradores interessados entrarão em contato diretamente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feche negócio</h3>
              <p className="text-muted-foreground">
                Negocie e venda seu veículo com segurança e facilidade.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/advert/create">
                <Car className="mr-2 h-5 w-5" />
                Anuncie seu veículo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milhares de pessoas já tiveram sucesso em vender ou encontrar
              veículos em nossa plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6">
                  "Vendi meu carro em apenas 3 dias! A plataforma é muito
                  intuitiva e as estatísticas me ajudaram a precificar
                  corretamente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">RM</span>
                  </div>
                  <div>
                    <p className="font-medium">Ricardo Mendes</p>
                    <p className="text-sm text-muted-foreground">
                      São Paulo, SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6">
                  "Como revendedor, o plano profissional me deu um retorno
                  incrível. Aumentei minhas vendas em 40% no primeiro mês."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">CS</span>
                  </div>
                  <div>
                    <p className="font-medium">Carlos Silva</p>
                    <p className="text-sm text-muted-foreground">
                      Belo Horizonte, MG
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6">
                  "Encontrei meu carro dos sonhos por um preço justo. A
                  plataforma tem filtros muito úteis e os anúncios são
                  detalhados."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">AF</span>
                  </div>
                  <div>
                    <p className="font-medium">Amanda Ferreira</p>
                    <p className="text-sm text-muted-foreground">
                      Curitiba, PR
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para anunciar ou encontrar seu próximo veículo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de usuários satisfeitos e experimente a
              plataforma mais completa do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/advert/create">
                  <Car className="mr-2 h-5 w-5" />
                  Anunciar Veículo
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/stock/carros">
                  <Search className="mr-2 h-5 w-5" />
                  Explorar Estoque
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
