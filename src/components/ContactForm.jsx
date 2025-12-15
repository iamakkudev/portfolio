import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("https://formspree.io/f/xgvgqkee", {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-2xl flex flex-col justify-center items-center sm:px-14 p-6 gap-4 rounded-2xl text-light_100_dark_100 shadow-outer_light_dark100"
    >
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <input
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          className="w-full sm:w-1/2 p-4 input-prop"
          placeholder="First Name"
        />
        <input
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          className="w-full sm:w-1/2 p-4 input-prop"
          placeholder="Last Name"
        />
      </div>

      <input
        name="email"
        type="email"
        autoComplete="email"
        required
        className="w-full p-4 input-prop"
        placeholder="Enter Your Email"
      />

      <textarea
        name="message"
        required
        className="w-full h-32 p-4 input-prop"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary-100 px-4 py-2 text-black font-semibold rounded-xl self-end
                     disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-sm">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
