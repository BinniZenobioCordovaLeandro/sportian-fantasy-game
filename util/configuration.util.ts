interface IConfiguration {
  API_BASE: () => string;
}

export const configuration: IConfiguration = {
  API_BASE: () => {
    return 'https://rickandmortyapi.com/api/';
  },
}