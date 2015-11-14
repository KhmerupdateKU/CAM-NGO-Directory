var CategoryModel={
    category:[],
    setCategory:function (){
        CategoryModel.category.push(
                {'id':'1',"name":"TRADITIONAL"},
                {'id':'2',"name":"EDOCATION"},
                {'id':'3',"name":"Politic"}
        );
    },
    getCategory:function (){
        return CategoryModel.category;
    }
}

