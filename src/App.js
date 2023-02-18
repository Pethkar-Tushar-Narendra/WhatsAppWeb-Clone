import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./Screens/BackGround/Background";
import ChatScreen from "./Screens/ChatScreens/ChatScreen";
import MobileScreen from "./Screens/MobileScreen/MobileScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/web"
          element={
            // <LoginRoute>
            <>
              <Background />
              <ChatScreen />
            </>
            //  </LoginRoute>
          }
        />
        <Route path="/" element={<MobileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
