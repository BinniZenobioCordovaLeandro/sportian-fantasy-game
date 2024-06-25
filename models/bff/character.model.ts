import { IApiResponseObject, IApiResponsePagination } from "../api";
import { ICharacter } from "../character.model";

export interface ICharacterData {
  data: ICharacter;
};

export interface ICharacterDataArray {
  data: ICharacter[];
};

export interface ICharacterDataPagination {
  data: {
    results: ICharacter[];
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
  };
};

export interface ICharacterResponseObject extends IApiResponseObject<ICharacterData> { };

export interface ICharacterResponseArray extends IApiResponsePagination<ICharacterDataArray> { };

export interface ICharacterResponsePagination extends IApiResponsePagination<ICharacterDataPagination> { };
