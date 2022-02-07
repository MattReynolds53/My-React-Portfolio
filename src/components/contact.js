import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => alert(error));
  }

  const styles = {
    display: "flex",
    justifyContent: "center",
    contactCard: {
      marginLeft: "24%",
      minHeight: "59vh",
      width: "75%"
    },
    inputCard: {
      padding: "25px",
    },
    submitBtn: {
      padding: "25px",
      marginLeft: "32%",
    },
  };

  return (
    <>
      <div className="text-center">
        <div className="card-body">
          <h1 className="card-title">Contact Information</h1>
          <br></br>
          <h4 className="card-text">Email: mattreynolds53@gmail.com</h4>
          <h4 className="card-text">GitHub Profile: MattReynolds53</h4>
        </div>
      </div>
      <br></br>
      <br></br>

      <div style={styles.contactCard}>
        <form>
          <div
            className="form-group col-xl-8 col-lg-8 col-md-6 col-sm-6"
            style={styles.inputCard}
          >
            <h3 for="formGroupExampleInput">Name</h3>
            <br></br>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div
            className="form-group col-xl-8 col-lg-8 col-md-6 col-sm-6"
            style={styles.inputCard}
          >
            <h3 for="formGroupExampleInput2">Email</h3>
            <br></br>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div
            className="form-group col-xl-8 col-lg-8 col-md-6 col-sm-6"
            style={styles.inputCard}
          >
            <h3 for="formGroupExampleInput2">Message</h3>
            <br></br>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </div>
          <br></br>
          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white bg-dark border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            style={styles.submitBtn}
            onChange={(e) => setMessage(e.target.value)}
          >
            Submit
          </button>
        </form>
      </div>

      {/* <section id="contact" className="relative">
        <div
          className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"
          style={styles}
        >
          <form
            netlify
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <div className="relative mb-4">
              <p htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </p>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <p htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <p htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </p>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </form>
        </div>
      </section> */}
    </>
  );
}
