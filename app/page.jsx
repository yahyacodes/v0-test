import Boxes from "./components/Boxes";
import LandingPage from "./components/LandingPage";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage />
      <Logos />
      <Boxes />
    </main>
  );
}
