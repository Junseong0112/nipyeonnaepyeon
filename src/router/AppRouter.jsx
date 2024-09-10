import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateVotePage from "../pages/CreateVotePage";
import VoteDetailPage from "../pages/VoteDetailPage";
import ProfilePage from "../pages/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create-vote" element={<CreateVotePage />} />
        <Route path="/vote/:id" element={<VoteDetailPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
