import NavBar from "./components/NavBar";
import CarDetails from "./pages/CarDetails";

export default function App() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="px-15 py-5">
        <CarDetails />
      </div>
    </div>
  );
}
