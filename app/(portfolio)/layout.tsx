import Header from '@/components/header';
import Footer from '@/components/footer';
import AppearanceChanger from '@/components/appearance-changer';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-indigo-500/20 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-indigo-700/30" />
      <div className="bg-pink-500/20 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-pink-700/30" />
      <Header />
      <div className="pt-28 sm:pt-36">{children}</div>
      <Footer />
      <AppearanceChanger />
    </>
  );
}
