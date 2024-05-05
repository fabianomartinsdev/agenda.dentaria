import { CircleUserRound, LogOut } from "lucide-react";

export default function Header() {
  const isLoggedIn = false;
  return (
    <header className="bg-teal-900">
      <div className="max-[600px]:w-2/3 w-1/2 flex items-center justify-between m-auto h-16 p-">
        <a href="#" className="hover:scale-105 transition">
          agenda<span className="text-teal-200">.dentária</span>
        </a>
        {!isLoggedIn ? (
          <div className="flex gap-6">
            <a href="#" className="hover:scale-105 transition">
              <CircleUserRound />
            </a>
            <a href="" className="hover:scale-105 transition">
              <LogOut />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
