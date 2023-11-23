import styled from "styled-components";
// import "./App.css";
import { Bundle } from "./components/Bundle/Bundle";
import { useBundleData } from "./hooks/useBundleData";

const mobileBreakpoint = "756px";

const AppContainer = styled.div`
  background: url("/src/assets/main-cover.svg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: ${mobileBreakpoint}) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

function App() {
  const { data } = useBundleData();

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
    </AppContainer>
  );
}

export default App;
