import { CirclePlus, CircleX, UserRoundSearch } from "lucide-react";
import Header from "@/app/components/Header";
import Link from "next/link";
import IconButton from "@/app/components/IconButton";

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
              <Link href="#newclient">
                <IconButton>
                  <CirclePlus />
                  Adicionar cliente
                </IconButton>
              </Link>
              <Link href="searchclient">
                <IconButton>
                  <UserRoundSearch />
                  Buscar cliente
                </IconButton>
              </Link>
              <Link href="deleteclient">
                <IconButton>
                  <CircleX />
                  Remover cliente
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
