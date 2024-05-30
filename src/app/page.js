import ParticlesComponent from "@/Particles";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main className="App">
        <ParticlesComponent id="particles"/>
      <div>
        <Quiz />
      </div>
    </main>
  );
}
