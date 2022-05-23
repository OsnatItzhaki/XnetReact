import axios from   "axios";
const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

class ClientUseService{

    async  fetchGraphData(clientCode){
    
    const cancelTokenSource = axios.CancelToken.source();

    const data= await  axios.get(`${HOST_API}/api/UseGraph/Get`,{
        params: {
            clientCode:clientCode 
        }, cancelToken: cancelTokenSource.token
        })
        .then(({data})=>data)

    cancelTokenSource.cancel();
    return await data;
        }
   
    }
    export default new ClientUseService();