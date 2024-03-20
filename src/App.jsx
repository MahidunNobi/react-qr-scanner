import { useState } from "react";
import "./App.css";
import QrReader from "./components/QrReader";

function App() {
  const [qrScanned, setQrScanned] = useState({
    status: false,
    value: "",
  });
  console.log(qrScanned);
  return (
    <>
      <h1>QR code scanner</h1>
      {!qrScanned.status && (
        <QrReader qrScanned={qrScanned} setQrScanned={setQrScanned} />
      )}
      <h2> QR-scanned value: {qrScanned.value} </h2>
    </>
  );
}

export default App;
