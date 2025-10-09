import React from "react"
import AppRouter from "./routes";
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
            <AppRouter />
    </React.StrictMode>
)
