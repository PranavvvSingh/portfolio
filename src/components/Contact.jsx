import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ywvdj6d","template_v9nx5sm",form.current,"IjE3npLZjjNK_35OR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName(""); setMessage(""); setEmail("");
  };
  return (
    <>
      <div className="flex flex-col items-center mt-32 m-10">
        <h1 className="text-4xl">Contact</h1>
      </div>
      <div className="flex flex-wrap justify-around p-10 items-center">
        <div className="w-1/3 ">{`Let's connect`}</div>
        <div className="w-2/5 bg-neutral-950 p-8 rounded-xl">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-4">
              <h1 className="text-xl">Email Me</h1>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="bg-transparent border border-neutral-700 rounded-lg p-3"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="bg-transparent border border-neutral-700 rounded-lg p-3"
                required
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="bg-transparent border border-neutral-700 rounded-lg p-3"
                required
              />
              <button
                type="submit"
                value="Send"
                onClick={sendEmail}
                className="p-3 rounded-lg"
                style={{
                  background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
                }}
              >Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
