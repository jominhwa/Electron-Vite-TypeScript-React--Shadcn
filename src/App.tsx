// App.tsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignInPage } from "./pages/auth/SignInPage";
import { Layout } from "./layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="signIn" element={<SignInPage />} />
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </>
    );
};

export default App;
