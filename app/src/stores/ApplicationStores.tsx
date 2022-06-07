import EntitiesStore from "./EntitiesStore";
import React from "react";
import ComponentsStore from "./ComponentsStore";

/**
 * Global store for application
 */
interface ApplicationStoresProps {
  children: React.ReactNode;
}

const ApplicationStores = (props: ApplicationStoresProps) => {
  return (
    <EntitiesStore>
      <ComponentsStore>
        {props.children}
      </ComponentsStore>
    </EntitiesStore>
  );
}

export default ApplicationStores;
