import Image from "next/image";
import Button from "./Button";
import Input from "./Input";

export default function LoginPage() {
  return (
    <main className="mt-16">
      <div className="max-[600px]:flex-col max-[600px]:w-2/3 w-1/2 rounded-xl m-auto flex bg-zinc-100 text-zinc-800">
        <Image
          src="/tooth.jpg"
          width={260}
          height={260}
          alt="Dentes"
          className="rounded-l-xl"
        />
        <div className="flex gap-4 mx-8 mt-4 w-full p-2">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-xl font-semibold">Acesse sua agenda</p>
            <form action="" className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="exemplo@gmail.com"
              />
              <label htmlFor="password" className="mt-2">
                Senha
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
              />
              <Button type="submit" name="Entrar" />
              <Button type="button" name="Criar conta" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
