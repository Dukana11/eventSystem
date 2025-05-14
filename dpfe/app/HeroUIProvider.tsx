import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";
import LoginPage from "./(pages)/login/page";

function App() {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      <LoginPage />
    </HeroUIProvider>
  );
}