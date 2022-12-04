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

export const dataSort = (data, sortMethod) => {
    let sortArray;
    switch (sortMethod) {
        case 'asc':
            sortArray = data.sort(function (p1, p2) {
                if (p1.price < p2.price) {
                    return 1;
                }
                if (p1.price > p2.price) {
                    return -1;
                }
                return 0;
            })
            break;
        case 'desc':
            sortArray = data.sort(function (p1, p2) {
                if (p1.price > p2.price) {
                    return 1;
                }
                if (p1.price < p2.price) {
                    return -1;
                }
                return 0;
            })
            break;
        case 'rating':
            sortArray = data.sort(function (p1, p2) {
                if (p1.rating.rate < p2.rating.rate) {
                    return 1;
                }
                if (p1.rating.rate > p2.rating.rate) {
                    return -1;
                }
                return 0;
            })
            break;
    }
    return sortArray;
}