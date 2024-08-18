import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Componente de template de e-mail
const EmailTemplate = ({ firstName, Token }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>  We re excited to have you on board. If you have any questions, <a href={`http://localhost:3001/validar-token?token=${Token}`}>Verifique o acesso</a> feel free to reach out to us.</p>
    <span>Token: {Token}</span>
  </div>
);

// Função para gerar o HTML do template
export const generateEmailHtml = (props) => {
  return ReactDOMServer.renderToStaticMarkup(<EmailTemplate {...props} />);
};

// vou criar um codigo no login, que será enviado por email e precisará desse codigo para seguir na autenticação. 