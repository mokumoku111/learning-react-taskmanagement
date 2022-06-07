import React from "react";
import { data, statuses } from "../components/data/Items";
import DropWrapper from "../components/DropWrapper";
import Column from "../components/Column";

function Show() {
  return (
    <div className="row">
      {statuses.map((s) => (
        <div key={s.status} className={"col-wrapper"}>
          <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
        </div>
      ))}
    </div>
  );
}

export default Show;
