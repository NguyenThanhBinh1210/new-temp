import Footer from "~/components/Footer";
import Header from "~/components/Header";

interface Props {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="h-1 bg-gray-200"></div>
      <div className="max-w-[1250px] mx-auto px-3">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
