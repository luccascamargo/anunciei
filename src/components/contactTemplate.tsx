import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: string;
  subject: string;
}

export const ContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  subject,
  type,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <h2 style={{ color: "#007BFF" }}>
      Temos um novo contato vindo do site Anuncie.app
    </h2>
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
      <li>
        <strong>Tipo:</strong> {type}
      </li>
      <li>
        <strong>Assunto:</strong> {subject}
      </li>
    </ul>
    <p>
      <strong>Mensagem do usuário:</strong>
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
  </div>
);
