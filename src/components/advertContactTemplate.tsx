import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  slug: string;
}

export const AdvertContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  slug,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <h2 style={{ color: "#007BFF" }}>Novo interesse no seu anúncio!</h2>
    <p>Olá,</p>
    <p>
      Um usuário demonstrou interesse no seu anúncio. Aqui estão os detalhes do
      contato:
    </p>
    <ul>
      <li>
        <strong>Nome:</strong> {name}
      </li>
      <li>
        <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
      </li>
      <li>
        <strong>Telefone:</strong> <a href={`tel:${phone}`}>{phone}</a>
      </li>
    </ul>
    <p>
      <strong>Mensagem do interessado:</strong>
    </p>
    <blockquote
      style={{
        margin: "10px 0",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        borderLeft: "4px solid #007BFF",
      }}
    >
      {message}
    </blockquote>
    <p>Para visualizar o anúncio, clique no link abaixo:</p>
    <p>
      <a
        href={`${process.env.NEXT_PUBLIC_API_URL}/ad/${slug}`}
        style={{
          color: "#007BFF",
          textDecoration: "none",
        }}
      >
        Visualizar Anúncio
      </a>
    </p>
    <p>Atenciosamente,</p>
    <p>A equipe do Anunciei</p>
  </div>
);
