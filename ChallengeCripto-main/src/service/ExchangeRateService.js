import http from "../helpers/axiosInstance"; 
const seccion = 'exchangerate';



const getExchangeRate = (assetId,assetQuote) => {
  return http.get(`/${seccion}/${assetId}/${assetQuote}`);
};

const ExchangeRateService = {
    getExchangeRate, 
};

export default ExchangeRateService;