import models from "../../models";

import geojson from "./mx_states.json";

export default async function () {
  let toAddTab = [];

  for (let i = 0; i < geojson.features.length; i++) {
    let { state_code, state_name } = geojson.features[i].properties;
    let newObject = { name: state_name, state_code, insects: [] };
    const newEstado = new models.Estado(newObject);
    toAddTab.push(newEstado.save());
  }
  await Promise.all(toAddTab);

  return;
}
