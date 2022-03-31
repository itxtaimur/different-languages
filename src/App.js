import React from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const App = (props) => {
  const { t } = useTranslation();

  const languageChangeHandler = (value) => {
    const { i18n } = props;
    i18n.changeLanguage(value);
  };

  const languageLists = (t) => {
    return [
      { id: Math.random(), text: "English", translateKey: "en" },
      { id: Math.random(), text: "German", translateKey: "de" },
      { id: Math.random(), text: "French", translateKey: "fr" },
      { id: Math.random(), text: "Danish", translateKey: "dn" },
      { id: Math.random(), text: "Estonian", translateKey: "et" },
      { id: Math.random(), text: "Italian", translateKey: "it" },
      { id: Math.random(), text: "Portuguese", translateKey: "pt" },
      { id: Math.random(), text: "Swedish", translateKey: "es" },
      { id: Math.random(), text: "Finnish", translateKey: "fi" },
      { id: Math.random(), text: "Spanish", translateKey: "sp" },
    ];
  };

  return (
    <div>
      <Dropdown
        className="px-3"
        style={{ cursor: "pointer", fontSize: "20px" }}
      >
        <Dropdown.Toggle as="div" id="dropdown-basic">
          <span>{t("HeaderDropdown.Languages")}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="mt-1">
          {languageLists(t).map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => languageChangeHandler(item.translateKey)}
              className="dr-item"
            >
              {item.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div className="m-5">
        <h6>{t("Navigation.MyTickets")}</h6>

        <ClassComponent t={t} />

        <FunctionalComponent t={t} />
      </div>
    </div>
  );
};

export default App;
