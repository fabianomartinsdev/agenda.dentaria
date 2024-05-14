import Header from "@/app/components/Header";
import SignUpForm from "@/modules/auth/components/sign-up-form";

export default function SignUp() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <SignUpForm />
      </main>
    </>
  );
}
