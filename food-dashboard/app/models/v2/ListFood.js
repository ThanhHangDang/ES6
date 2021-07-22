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
        });
    }

    updateFoodApi(food){
        /**
         * Check lại hình ảnh
         * Nếu như food.hinhAnh là rỗng => vẫn giữ lại hình ảnh trên sever
         * Nếu như food.hinhAnh khác rỗng => cập nhật lại hình ảnh trên sever
         */
        return this.getFoodById(food.id)
            .then((result) => {
                if(!food.hinhMon){
                    food.hinhMon = result.data.hinhMon;
                }

                return axios({
                    url: `https://60e9fcc55dd7ff0017b3972e.mockapi.io/api/Food/${food.id}`,
                    method: "PUT",
                    data: food,
                });
            })
       
    }

    deleteFoodApi(id){
        return axios({
            url: `https://60e9fcc55dd7ff0017b3972e.mockapi.io/api/Food/${id}`,
            method: "DELETE",
        })
    }
}