import Header from "../components/header";
import Navbar from "../components/navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex w-full min-h-[calc(100vh-80px)]">
        <Navbar />

        <div className="flex flex-col gap-2 max-w-[1440px] w-full p-2 sm:p-4 md:p-10 h-fit">
          {children}
        </div>
      </main>
    </>
  );
};
