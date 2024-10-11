import RealizationContainer from "@/components/RealizationContainer";

export default function Home() {
  return (
    <div>
      <section>
          <h2 className="text-4xl font-bold mb-6 xl:mb-9 text-gray-700">REALIZACJE</h2>
          <RealizationContainer />
      </section>
    </div>
  );
}
