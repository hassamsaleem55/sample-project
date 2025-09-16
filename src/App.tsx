import NavBar from "./components/NavBar";
import CarDetails from "./pages/CarDetails";

export default function App() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="mx-0 md:mx-8 lg:mx-16 py-5">
        <CarDetails />
      </div>
    </div>
  );
}
