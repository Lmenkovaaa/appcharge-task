import { Bundle } from "./components/Bundle/Bundle";
import { useBundleData } from "./hooks/useBundleData";
import { AppContainer } from "./App.styles";
import { Spinner } from "./components/Spinner/Spinner";

function App() {
  const { data, isLoading } = useBundleData();

  return (
    <AppContainer>
      {isLoading ? <Spinner /> : null}
      {data?.bundles.map(
        ({ id, timeLeftMs, available, maxAvailable, price, products }) => {
          return (
            <Bundle
              key={id}
              timeLeftMs={timeLeftMs}
              available={available}
              maxAvailable={maxAvailable}
              price={price}
              products={products}
            />
          );
        },
      )}
    </AppContainer>
  );
}

export default App;
