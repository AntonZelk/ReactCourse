import React from "react";
import { withData, withChildFunction } from "../hoc";
import ItemList from "../components/item-list";
import ItemsDetail from "../components/ItemsDetail";
import Record from "../components/Record";
import SwapiService from "../services/swapi-service";
import { withConnect } from "../hoc";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const renderName = (item) => `${item.name}`;

const RenderPersonaList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const renderPersonaDetail = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemsDetail
      selectedItem={itemId}
      getItem={getPerson}
      getImage={getPersonImage}
      getMessage={`Нужно выбрать персонажа`}
    >
      <Record label={`Gender`} field={`gender`} />
      <Record label={`Birth Year`} field={`birthYear`} />
      <Record label={`Eye Color`} field={`eyeColor`} />
    </ItemsDetail>
  );
};

const RenderPersonaDetail = withConnect(renderPersonaDetail);

const RenderPlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const renderPlanetDetail = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemsDetail
      selectedItem={itemId}
      getItem={getPlanet}
      getImage={getPlanetImage}
      getMessage={`Нужно выбрать планету`}
    >
      <Record label={`Population`} field={`population`} />
      <Record label={`Rotation Period`} field={`rotationPeriod`} />
      <Record label={`Diameter`} field={`diameter`} />
    </ItemsDetail>
  );
};

const RenderPlanetDetail = withConnect(renderPlanetDetail);

const RenderShipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);

const renderShipDetail = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemsDetail
      selectedItem={itemId}
      getItem={getStarship}
      getImage={getStarshipImage}
      getMessage={`Нужно выбрать звездный корабль`}
    >
       <Record label={`Model`} field={`model`} />
        <Record label={`Manufacturer`} field={`manufacturer`} />
        <Record label={`Cost`} field={`costInCredits`} />
        <Record label={`length`} field={`length`} />
        <Record label={`Cargo Capacity`} field={`cargoCapacity`} />
        <Record label={`Minimum Crew`} field={`crew`} />
        <Record label={`Passengers`} field={`passengers`} />
    </ItemsDetail>
  );
};

const RenderShipDetail = withConnect(renderShipDetail);

export { RenderPersonaList, RenderPersonaDetail, RenderPlanetList, RenderPlanetDetail, RenderShipList, RenderShipDetail };
