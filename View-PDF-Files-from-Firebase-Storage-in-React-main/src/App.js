import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "./config/firebase";
import QrCode from "./components/QrCode";

function App() {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, "RESUME.pdf")).then((url) => {
      setResume(url);
      console.log(url);
      <QrCode link={url} />;
    });
  }, []);

  return (
    <div className="container">
      <br></br>

      <Button setModal={setModal} />

      {modal === true && <Modal setModal={setModal} resume={resume} />}
    </div>
  );
}

export default App;
