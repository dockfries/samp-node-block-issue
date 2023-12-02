import "reflect-metadata";
import { AppDataSource } from "./dao/data-source";
import { GameMode } from "@infernus/core";

AppDataSource.initialize()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

GameMode.onInit(({ next }) => {
  console.log("game mode init");
  return next();
});
