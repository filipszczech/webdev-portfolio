import ContactForm from "@/components/ContactForm";
import RealizationContainer from "@/components/RealizationContainer";

export default function Home() {
  return (
    <div>
      <section className="my-12">
          <h2 className="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">REALIZACJE</h2>
          <RealizationContainer />
      </section>
      <section className="my-24">
          <h2 className="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">KONTAKT</h2>
          <ContactForm />
      </section>
    </div>
  );
}
