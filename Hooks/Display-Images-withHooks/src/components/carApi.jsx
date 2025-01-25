

// Create a Context
const CarContext = createContext();

// Parent Component
export function ChildComponent() {
  const carData = {
    make: "BMW",
    color: "Red",
    year: "2023",
    image: "https://example.com/car.jpg",
  };

  return (
    <CarContext.Provider value={carData}>
      <div className="app">
        <ChildComponent />
      </div>
    </CarContext.Provider>
  );
}
