import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";
import "./assets/bootstrap-override.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

registerServiceWorker();
