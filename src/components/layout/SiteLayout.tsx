import Navbar from "./Navbar";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;
