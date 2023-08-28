import ReactDOM from "react-dom/client";
import UserSearch from "./refs/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./state/UserSearch";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
      {/* <EventComponent /> */}
    </div>
  );
};

root.render(<App />);
