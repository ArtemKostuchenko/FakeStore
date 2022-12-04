export const filterPrice = (products, min, max) => {
    return products.filter(el => el.price >= min && el.price <= max) || [];
}
export const filterByCategories = (data, categories) => {
    let newData = [];
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < categories.length; j++){
            if(data[i].category === categories[j]){
                newData.push(data[i])
            }
        }
    }
    return newData;
}