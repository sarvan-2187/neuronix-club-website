import NeuronixAbout from "@/components/NeuronixAbout";
import NeuronixFAQ from "@/components/NeuronixFAQ";
import NeuronixFooter from "@/components/NeuronixFooter";
import NeuronixHeader from "@/components/NeuronixHeader";
import NeuronixHero from "@/components/NeuronixHero";
import NeuronsBook from "@/components/NeuronsBook";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NeuronixHeader/>
      <NeuronixHero />
      <NeuronixAbout />
      <NeuronsBook />
      <NeuronixFAQ />
      <NeuronixFooter/>
    </main>
  );
}
