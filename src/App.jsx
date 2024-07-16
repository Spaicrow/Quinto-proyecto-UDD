import Asaid from "./components/Asaid";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <section className="bg-[#f6f8fc] h-screen font-outfit overflow-y-auto">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]
       ">
        <Pokemons/>
        <Asaid />
      </main>
    </section>
  );
}

export default App
