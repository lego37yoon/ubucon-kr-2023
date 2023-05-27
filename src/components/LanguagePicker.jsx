
import { languages } from "../i18n/ui";
import { Modal, List } from "@canonical/react-components";
import { useState } from "react";

export default function LanguagePicker(props) {
  let langSelectList = Object.entries(languages).map(([lang, label]) => {
    return (
      <a href={`/${lang}/`}>{label}</a>
    );
  });
  const [modalOpen, setModalOpen] = useState(false);
  const closeHandler = () => setModalOpen(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>🌐</button>
      {
        modalOpen ? (
          <Modal
            close={closeHandler}
            title="Choose language..."
           
          >
            <List items={langSelectList} divided />

          </Modal>
        ) : null
      }
    </>
  )
}
