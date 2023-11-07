import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import MyApps from "./pages/MyApps";
import ContactMe from "./pages/ContactMe";
import NavTabs from "./NavTabs";
import Footer from "./Footer";

export default function BodyContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "MyApps") {
      return <MyApps />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3 ">{renderPage()}
            
      </main>
<Footer/>
    </div>
  );
}
