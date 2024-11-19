import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <>
      <div id="contactSection" className="max-w-1/2 w-full mx-auto p-4 md:p-8 shadow-input bg-neutral-950">
        <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mb-20 mx-auto text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans border-l-4 border-orange-500">
            Get in touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
