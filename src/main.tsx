import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "@solana/wallet-adapter-react-ui/styles.css";

createRoot(document.getElementById("root")!).render(<App />);
