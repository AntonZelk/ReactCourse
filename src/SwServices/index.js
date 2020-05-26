import React from "react";
import { withData, withChildFunction } from "../hoc";
import ItemList from "../components/item-list";
import ItemsDetail from "../components/ItemsDetail";
import Record from "../components/Record";
import SwapiService from "../services/swapi-service";
import { withConnect } from "../hoc";

const { getAllPeople } = new SwapiService();

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

export { RenderPersonaList, RenderPersonaDetail };
