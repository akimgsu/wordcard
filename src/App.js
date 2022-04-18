import Day from "./component/book/Day";
import DayList from "./component/book/DayList";
import Header from "./component/book/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import EmptyPage from "./component/book/EmptyPage";
import CreateWord from "./component/book/CreateWord";
import CreateDay from "./component/book/CreateDay";
import UseSate from "./component/testing/UseState";
import UseEffect from "./component/testing/UseEffect";
import UseRef from "./component/testing/UseRef";
import UseMemo from "./component/testing/UseMemo";
import UseCallback from "./component/testing/UseCallback";
import UseReducer from "./component/testing/UseReducer";
import UseReducerII from "./component/testing/UseReducerII";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route path="/state">
            <UseSate />
          </Route>
          <Route path="/effect">
            <UseEffect />
          </Route>
          <Route path="/ref">
            <UseRef />
          </Route>
          <Route path="/memo">
            <UseMemo />
          </Route>
          <Route path="/callback">
            <UseCallback />
          </Route>
          <Route path="/reducer">
            <UseReducer />
          </Route>
          <Route path="/reducerii">
            <UseReducerII />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
