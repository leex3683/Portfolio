// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>

        <img
          className="rounded-circle img-fluid py-2"
          src="./src/assets/images/Portrait2.jpg"
          alt="Picture of Face"
          width="200"
          height="200"
        />

      <ul className="nav border-bottom nav-pills nav-fill">
        <li className="h1 nav-item">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            AboutMe
          </a>
        </li>
        <li className="h1 nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="h1 nav-item">
          <a
            href="#MyApps"
            onClick={() => handlePageChange("MyApps")}
            // Check to see if the currentPage is `MyApps`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "MyApps" ? "nav-link active" : "nav-link"
            }
          >
            MyApps
          </a>
        </li>
        <li className="h1 nav-item">
          <a
            href="#ContactMe"
            onClick={() => handlePageChange("ContactMe")}
            // Check to see if the currentPage is `ContactMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "ContactMe" ? "nav-link active" : "nav-link"
            }
          >
            ContactMe
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
