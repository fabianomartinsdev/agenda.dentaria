import { CirclePlus, CircleX, UserRoundSearch } from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";

export default async function Main() {
  const user = "Fabiano";

  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="max-[600px]:flex-col max-[600px]:w-2/3 w-1/2 rounded-xl m-auto flex bg-zinc-100 text-zinc-800 p-4">
          <div className="flex flex-col">
            <h1 className="text-lg text-zinc-900 font-semibold">
              Bem vindo, {user}!
            </h1>
            <div className="mt-4 flex gap-4">
              <Link
                href="/#"
                className="flex gap-4 p-4 rounded bg-teal-800 text-zinc-100 hover:bg-teal-700 transition"
              >
                <CirclePlus />
                Adicionar cliente
              </Link>
              <Link
                href="/#"
                className="flex gap-4 p-4 rounded bg-teal-800 text-zinc-100 hover:bg-teal-700 transition"
              >
                <UserRoundSearch />
                Buscar cliente
              </Link>
              <Link
                href="/#"
                className="flex gap-4 p-4 rounded bg-teal-800 text-zinc-100 hover:bg-teal-700 transition"
              >
                <CircleX />
                Remover cliente
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
