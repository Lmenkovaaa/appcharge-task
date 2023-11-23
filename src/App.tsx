import { Bundle } from "./components/Bundle/Bundle";
import { useBundleData } from "./hooks/useBundleData";
import { AppContainer } from "./App.styles";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
  const { data, isLoading } = useBundleData();

  return (
    <AppContainer>
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
      {isLoading ? <Spinner /> : null}
    </AppContainer>
  );
}

export default App;
