export default function Contact() {
  return (
    <section className="py-24 bg-dark text-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-4">
        CONTACT
      </h2>

      <p className="text-graysoft mb-10">
        If you are interested, feel free to contact me
      </p>

      <div className="flex flex-col items-center gap-6">
        <button className="px-8 py-3 rounded-full border border-primary
          hover:bg-primary hover:text-black transition duration-300">
          Email
        </button>

        <button className="px-8 py-3 rounded-full border border-primary
          hover:bg-primary hover:text-black transition duration-300">
          Discord
        </button>
      </div>
    </section>
  );
}
