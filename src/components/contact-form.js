import { useForm, ValidationError } from "@formspree/react";
import styleForm from './styleForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgoqjg");
  if (state.succeeded) {
      return <p>Menssagem enviada! <br/> 
        Aguande nosso retorno!</p>;
  }

  return (
    <form  className="Form_full" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input placeholder="exemple@email.com" id="email" type="email" name="email" />

      <label htmlFor="fone">Telefone</label>
      <input placeholder="()____-____" id="fone" type="fone" name="fone" />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="txt_area" placeholder="Mensage..." id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        ENVIAR
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
