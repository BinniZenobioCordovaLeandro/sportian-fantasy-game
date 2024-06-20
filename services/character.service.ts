import { ICharacterResponseObject, ICharacterResponsePagination } from "@/models/bff/character.model";
import { http } from "./http.service";

interface ICharacterService{
    single: (id: number) => Promise<ICharacterResponseObject>;
    pagination: (page?: number) => Promise<ICharacterResponsePagination>;
}

export const characterService: ICharacterService = {
    single: (id: number): Promise<ICharacterResponseObject> => {
        return http.get<ICharacterResponseObject>('character/' + id);
    },
    pagination: (page: number = 1): Promise<ICharacterResponsePagination> => {
        return http.get<ICharacterResponsePagination>(`character?page=${page}`);
    }
};