import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StoreProvider } from "./utils/GlobalState";

import Layout from "./components/layout/Layout";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import DeckPage from "./pages/DeckPage";
import CreateDeckPage from "./pages/CreateDeckPage";
import CardFlipPage from "./pages/CardFlipPage";
<<<<<<< HEAD
import Category from "./components/ui/Category";
import Cart from "./components/cart/Cart";
=======
import Category from './components/ui/Category'
import Cart from './components/cart/Cart'
>>>>>>> 135419f375b785ff8a161a403e90c44b4818a568

function App() {
  return (
    <Router>
      <Layout>
        <StoreProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/deck/:id/edit" element={<DeckPage />} />
            <Route path="/create-deck" element={<CreateDeckPage />} />
            <Route path="/deck/:title/:id" element={<CardFlipPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/checkout" element={<Cart />} />

            {/* <Route path='/user/:userId' element={<User />}/> */}
          </Routes>
        </StoreProvider>
      </Layout>
    </Router>
  );
}

export default App;
