import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
  Button,
  Hr,
  Heading,
  Link,
} from "@react-email/components";
interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  slug: string;
  imageUrl: string;
}

export function AdvertContactTemplate({
  name,
  email,
  phone,
  message,
  brand,
  model,
  price,
  year,
  slug,
  imageUrl,
}: EmailTemplateProps) {
  const baseUrl = "https://anunciei.app";
  return (
    <Html>
      <Head />
      <Preview>Novo contato sobre seu anúncio: {`${brand} ${model}`}</Preview>
      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "0 auto",
            padding: "20px 0",
            maxWidth: "600px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Cabeçalho */}
          <Section
            style={{
              padding: "20px 30px",
              borderBottom: "1px solid #e6ebf1",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "#1f2937",
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 15px",
              }}
            >
              Anunciei.app
            </Heading>
          </Section>

          {/* Título do Email */}
          <Section
            style={{
              padding: "30px 30px 0",
            }}
          >
            <Heading
              style={{
                color: "#1f2937",
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 15px",
              }}
            >
              Novo contato sobre seu anúncio
            </Heading>
            <Text
              style={{
                color: "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
                margin: "0 0 20px",
              }}
            >
              Um potencial comprador demonstrou interesse no seu veículo
              anunciado.
            </Text>
          </Section>

          <Hr
            style={{
              borderColor: "#e6ebf1",
              margin: "30px 0",
            }}
          />

          {/* Informações do Veículo */}
          <Section
            style={{
              padding: "0 30px",
            }}
          >
            <Heading
              as="h2"
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
                margin: "0 0 15px",
              }}
            >
              Informações do veículo
            </Heading>

            <Section
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "20px 0",
              }}
            >
              {imageUrl && (
                <Img
                  src={imageUrl}
                  width="250"
                  height="150"
                  alt={`${brand} ${model}`}
                  style={{
                    borderRadius: "6px",
                    marginRight: "15px",
                    objectFit: "cover",
                  }}
                />
              )}

              <Section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                }}
              >
                <Text
                  style={{
                    color: "#1f2937",
                    fontSize: "18px",
                    fontWeight: "600",
                    margin: "0 0 5px",
                  }}
                >
                  {`${brand} ${model}`}
                </Text>

                <Text
                  style={{
                    color: "#059669",
                    fontSize: "20px",
                    fontWeight: "700",
                    margin: "0 0 10px",
                  }}
                >
                  {price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>

                <Text
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    margin: "0 0 15px",
                  }}
                >
                  Ano: {year} • Marca: {brand} • Modelo:{model}
                </Text>

                <Button
                  style={{
                    backgroundColor: "#3b82f6",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "inline-block",
                    padding: "10px 20px",
                  }}
                  href={`${baseUrl}/anuncio/${slug}`}
                >
                  Ver anúncio
                </Button>
              </Section>
            </Section>
          </Section>

          <Hr
            style={{
              borderColor: "#e6ebf1",
              margin: "30px 0",
            }}
          />

          {/* Dados do Interessado */}
          <Section>
            <Heading
              as="h2"
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
                margin: "0 0 15px",
                padding: "0 30px",
              }}
            >
              Dados do interessado
            </Heading>

            <Text
              style={{
                color: "#4b5563",
                fontSize: "16px",
                margin: "0 0 10px",
                padding: "0 30px",
              }}
            >
              <strong>Nome:</strong> {name}
            </Text>

            <Text
              style={{
                color: "#4b5563",
                fontSize: "16px",
                margin: "0 0 10px",
                padding: "0 30px",
              }}
            >
              <strong>E-mail:</strong>{" "}
              <Link
                href={`mailto:${email}`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                {email}
              </Link>
            </Text>

            <Text
              style={{
                color: "#4b5563",
                fontSize: "16px",
                margin: "0 0 10px",
                padding: "0 30px",
              }}
            >
              <strong>Telefone:</strong>{" "}
              <Link
                href={`tel:${phone}`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                {phone}
              </Link>
            </Text>

            <Section
              style={{
                backgroundColor: "#f9fafb",
                borderRadius: "6px",
                margin: "20px 30px",
                padding: "15px",
              }}
            >
              <Heading
                as="h3"
                style={{
                  color: "#1f2937",
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0 0 10px",
                }}
              >
                Mensagem:
              </Heading>

              <Text
                style={{
                  color: "#4b5563",
                  fontSize: "15px",
                  lineHeight: "24px",
                  margin: "0",
                  whiteSpace: "pre-line",
                }}
              >
                {message}
              </Text>
            </Section>
          </Section>

          <Hr
            style={{
              borderColor: "#e6ebf1",
              margin: "30px 0",
            }}
          />

          {/* Call to Action */}
          <Section
            style={{
              padding: "0 30px",
              textAlign: "center",
            }}
          >
            <Heading
              as="h2"
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
                margin: "0 0 15px",
              }}
            >
              Responda ao interessado
            </Heading>

            <Text
              style={{
                color: "#4b5563",
                fontSize: "16px",
                lineHeight: "24px",
                margin: "0 0 20px",
              }}
            >
              Responda diretamente a este e-mail ou utilize os dados de contato
              acima para entrar em contato com o potencial comprador.
            </Text>

            <Button
              style={{
                backgroundColor: "#059669",
                borderRadius: "6px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                textAlign: "center",
                display: "inline-block",
                margin: "10px 0 20px",
                padding: "10px 20px",
              }}
              href={`mailto:${email}?subject=Re: Interesse no ${`${brand} ${model}`}&body=Olá ${name},%0D%0A%0D%0AObrigado pelo seu interesse no ${`${brand} ${model}`}.%0D%0A%0D%0A`}
            >
              Responder por e-mail
            </Button>
          </Section>

          <Hr
            style={{
              borderColor: "#e6ebf1",
              margin: "30px 0",
            }}
          />

          {/* Rodapé */}
          <Section
            style={{
              backgroundColor: "#f9fafb",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: "#6b7280",
                fontSize: "14px",
                margin: "0 0 10px",
              }}
            >
              © {new Date().getFullYear()} Anunciei. Todos os direitos
              reservados.
            </Text>

            <Text
              style={{
                color: "#6b7280",
                fontSize: "14px",
                margin: "0 0 10px",
              }}
            >
              Este e-mail foi enviado para você porque você tem um anúncio ativo
              em nossa plataforma.
            </Text>

            <Text
              style={{
                color: "#6b7280",
                fontSize: "14px",
                margin: "20px 0 0",
              }}
            >
              <Link
                href={`${baseUrl}/termos`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                Termos de Uso
              </Link>{" "}
              •{" "}
              <Link
                href={`${baseUrl}/privacidade`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                Política de Privacidade
              </Link>{" "}
              •{" "}
              <Link
                href={`${baseUrl}/ajuda`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                Central de Ajuda
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
