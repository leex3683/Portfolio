import { useState } from "react";
import { checkPassword, validateEmail } from "../../utils/helpers";

function ContactMe() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [commentErrorMessage, setCommentErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "comment") {
      setComment(inputValue);
    }
  };

  const handleLiveForm = (e) => {
    handleLiveFormEmail(e);
    handleLiveFormName(e);
    handleLiveFormComment(e);
  };

  const handleLiveFormEmail = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Validate email
    if (!validateEmail(email)) {
      setEmailErrorMessage(
        "Please enter a valid email. Form will revalidate if clicked elsewhere"
      );
      return;
    }
    setEmailErrorMessage("");
  };

  const handleLiveFormName = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Validate name field
    if (userName == "") {
      setNameErrorMessage(
        "Please enter a Name. Form will revalidate if clicked elsewhere"
      );
      return;
    }
    setNameErrorMessage("");
  };

  const handleLiveFormComment = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Validate name field
    if (comment == "") {
      setCommentErrorMessage(
        "Please enter a Comment. Form will revalidate if clicked elsewhere"
      );
      return;
    }
    setCommentErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div
      className="form-control container text-center m-5 p-3 shadow"
      onClick={handleLiveForm}
    >
      <form className="form" onSubmit={handleFormSubmit}>
        <label
          for="exampleFormControlTextarea1"
          className="d-flex justify-content-start"
        >
          Email
        </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          id="email"
          placeholder="email"
          className="form-control my-3 p-3"
        />
        {emailErrorMessage && (
          <div>
            <p className="error-text" style={{ color: "red" }}>
              {emailErrorMessage}
            </p>
          </div>
        )}
        <label
          for="exampleFormControlTextarea1"
          className="d-flex justify-content-start"
        >
          Name
        </label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="form-control my-3 p-3"
        />
        {nameErrorMessage && (
          <div>
            <p className="error-text" style={{ color: "red" }}>
              {nameErrorMessage}
            </p>
          </div>
        )}
        <div className="form-group">
          <label
            for="exampleFormControlTextarea1"
            className="d-flex justify-content-start"
          >
            Comment
          </label>
          <textarea
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="text"
            rows="3"
            placeholder="Enter Comment"
            className="form-control my-3 p-3"
          />
          {commentErrorMessage && (
            <div>
              <p className="error-text" style={{ color: "red" }}>
                {commentErrorMessage}
              </p>
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
