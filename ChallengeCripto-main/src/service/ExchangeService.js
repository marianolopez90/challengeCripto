import http from "../helpers/axiosInstance"; 
const seccion = 'exchanges';



const getAll = () => {
  return http.get(`/${seccion}`);
};

const getAllImage =data=>{
    return http.get(`/${seccion}/icons/${data}`);
};

const ExchangeService = {
  getAll,
  getAllImage,
 
};

export default ExchangeService;