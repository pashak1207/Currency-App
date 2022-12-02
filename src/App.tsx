import React, { useEffect } from "react";
import { PartComponent } from "./components/PartComponent";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Error } from "./components/Error";
import { Loader } from "./components/Loader";

const App: React.FC = () => {
  const { fetchAddCurrencyListAction } = useActions();
  const appSettings = useTypedSelector((state) => state.app);
  const currencyState = useTypedSelector(
    (state) => state.currency.currencyList
  );

  useEffect(() => {
    if (!currencyState.length) {
      fetchAddCurrencyListAction();
    }
  }, []);

  return (
    <div className="App bg-gradient-to-r from-indigo-500 h-full via-purple-500 to-pink-500 pb-20">
      {appSettings.error && !appSettings.loading && <Error />}
      {appSettings.loading && !appSettings.error && <Loader />}
      <h2
        className={
          "text-center text-white pt-20 pb-10 font-medium leading-tight text-4xl"
        }
      >
        Обмін валют
      </h2>
      <div className="container flex items-center justify-center mx-auto">
        <PartComponent />
        <PartComponent isReadonly={true} />
      </div>
    </div>
  );
};

export default App;
