import axios from   "axios";
const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

class ClientService{

    async  fetchClientData(){
    
    const cancelTokenSource = axios.CancelToken.source();

    const data= await  axios.get(`${HOST_API}/api/customer/GetCustomers`,{
        cancelToken: cancelTokenSource.token
        })
        .then(({data})=>data)
        console.log("dataaa",data)
    cancelTokenSource.cancel();
    return await data;
        }
   

        async  fetchCities(){
    
            const cancelTokenSource = axios.CancelToken.source();
        
            const data= await  axios.get(`${HOST_API}/api/City/GetCities`,{
                cancelToken: cancelTokenSource.token
                })
                .then(({data})=>data)
     
            cancelTokenSource.cancel();
            return await data;
                }
        async  fetchBanks(){
                    const cancelTokenSource = axios.CancelToken.source();
                
                    const data= await  axios.get(`https://www.xnes.co.il/ClosedSystemMiddlewareApi/api/generalinformation`,{
                        cancelToken: cancelTokenSource.token
                        })
                        .then(({data})=>data)
                    cancelTokenSource.cancel();
                    return await data;
                    }
        async insertNewClient(customer)
        {
            
            
            let json=JSON.stringify(customer);
          
            let responseObj={iserror:false,data:""}
             const tracking=await axios({
                method: 'post',
                url: `${HOST_API}/api/customer/post`,
            
                headers: {'Content-Type': 'application/json'},
                       
                data: (json)  ,
              
                
              }).then(function(response) {
                responseObj={iserror:false,data:response.data}
            }).catch(function (error) {
              console.log(error.response);
                if (error.response) {
                  // Request made and server responded
                  responseObj={iserror:true,data:"data:"+error.response.data.ExceptionMessage}
                  return responseObj;
                } else if (error.request) {
                  // The request was made but no response was received
                  responseObj={iserror:true,data:error.request}
                  return responseObj;
                } else {
                  // Something happened in setting up the request that triggered an Error
                  responseObj={iserror:true,data:error.message}
                  return responseObj;
                }
            
              });
              return  responseObj ;

        }
           
                       
                           
    }
    export default new ClientService();