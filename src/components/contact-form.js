import { useForm, ValidationError } from "@formspree/react";
import styleForm from './styleForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgoqjg");
  if (state.succeeded) {
      return <p className="msn_send" >Menssagem enviada! <br/> 
        Aguande nosso retorno!</p>;
  }

  return (
    <form  className="Form_full" onSubmit={handleSubmit}>
      <label htmlFor="email">Email*</label>
      <input required placeholder="exemple@email.com" id="email" type="email" name="email" />

      <label htmlFor="nome">Nome*</label>
      <input required placeholder="nome..." id="nome" type="nome" name="nome" />

      <label htmlFor="assunto">Assunto</label>
      <input required placeholder="assunto..." id="assunto" type="assunto" name="assunto" />

        Mensagem
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="txt_area" placeholder="Mensagem..." id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="btn" type="submit" disabled={state.submitting}>
        ENVIAR
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
