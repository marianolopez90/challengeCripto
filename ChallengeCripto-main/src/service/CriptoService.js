import http from "../helpers/axiosInstance"; 
const seccion = 'assets';



const getAll = () => {
  return http.get(`/${seccion}`);
};

const getAllImage =data=>{
    return http.get(`/${seccion}/icons/${data}`);
};

const CriptoService = {
  getAll,
  getAllImage,
 
};

export default CriptoService;