import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import AuthActions from "@/modules/auth/actions/auth-actions";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <>
      <form
        action={AuthActions.createAccount}
        className="flex flex-col text-zinc-900"
      >
        <h1>Cadastre-se</h1>
        <label htmlFor="name">Nome</label>
        <Input id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <Input id="email" name="email" type="email" required />
        <label htmlFor="password">Senha</label>
        <Input id="password" name="password" type="password" required />
        <div className="flex justify-between">
          <Button type="submit">Criar conta</Button>
          <Link href="/portal/login">Já tenho conta</Link>
        </div>
      </form>
    </>
  );
}
