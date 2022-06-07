import EntitiesStore from "./EntitiesStore";
import React from "react";

/**
 * Global store for application
 */
interface ApplicationStoresProps {
  children: React.ReactNode;
}

const ApplicationStores = (props: ApplicationStoresProps) => {
  return (
    <EntitiesStore>
      {props.children}
    </EntitiesStore>
  );
}

export default ApplicationStores;
