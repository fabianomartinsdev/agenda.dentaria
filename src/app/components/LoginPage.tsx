import Image from "next/image";

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
        <div className="flex gap-4 mx-8 mt-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-xl font-semibold">Acesse sua agenda</p>
            <form action="" className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemplo@gmail.com"
                className="h-12 mt-2 p-4 rounded border border-teal-600 outline-none focus:outline-teal-800"
              />

              <label htmlFor="password" className="mt-2">
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="h-12 w-full mt-2 p-4 rounded border border-teal-600 outline-none focus:outline-teal-800"
              />
              <button type="submit">Entrar</button>
            </form>
            <button type="button">Criar conta</button>
          </div>
        </div>
      </div>
    </main>
  );
}
