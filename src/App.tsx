import "./App.css";
import { Bundle } from "./components/Bundle/Bundle";
import { useBundleData } from "./hooks/useBundleData";

function App() {
  const { data } = useBundleData();

  return (
    <div className="app">
      {data
        ? data.bundles.map((bundle) => {
            return (
              <Bundle
                key={bundle.id}
                timeLeftMs={bundle.timeLeftMs}
                available={bundle.available}
                maxAvailable={bundle.maxAvailable}
                price={bundle.price}
                products={bundle.products}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;
