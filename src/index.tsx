import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";
import "./assets/bootstrap-override.scss";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

registerServiceWorker();
