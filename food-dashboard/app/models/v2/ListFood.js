export default class ListFood{
    addFoodApi(data){
        return axios({
            url: "https://60e9fcc55dd7ff0017b3972e.mockapi.io/api/Food",
            method: "POST",
            data, 
        });
    };

    getListFoodApi(){
        return axios({
            url: "https://60e9fcc55dd7ff0017b3972e.mockapi.io/api/Food",
            method: "GET",
        });
    };

    getFoodById(id){
        return axios({
            url: `https://60e9fcc55dd7ff0017b3972e.mockapi.io/api/Food/${id}`,
            method: "GET",
        })
    }
}