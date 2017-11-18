import RequestHandler from './RequestHandler';

export const PokemonList = ({
  params = {},
  data = {},
  urlVariables = {},
  headers = {},
  config = {}
}) => {
  return RequestHandler({
    method: 'GET',
    url: '/pokemon',
    params,
    data,
    urlVariables,
    headers,
    config
  });
};
