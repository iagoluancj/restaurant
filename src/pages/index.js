import { Inter } from "next/font/google";
import HomePage from "./HomePage";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
