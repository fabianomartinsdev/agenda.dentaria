import { CirclePlus, CircleX, UserRound } from "lucide-react";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

export default function Main() {
  const user = "Fabiano";

  return (
    <>
      <Header />
      <main className="mt-16">
        <div className="max-[600px]:flex-col max-[600px]:w-2/3 w-1/2 rounded-xl m-auto flex bg-zinc-100 text-zinc-800 p-4">
          <div className="flex flex-col">
            <h1 className="text-zinc-900 font-semibold">Bem vindo, {user}!</h1>
            <div className="flex">
              <LinkButton name="Buscar cliente"></LinkButton>
              <LinkButton name="Adicionar cliente">
                <CirclePlus />
              </LinkButton>
              <LinkButton name="Remover cliente">
                <CircleX />
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
