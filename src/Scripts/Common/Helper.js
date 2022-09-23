import data from '../../DB/data.json';

export default data;

export function filterData(filterType, filterText, dataToFilter = data){
    const result = [];
    
    dataToFilter?.forEach(f => {
        if (Array.isArray(f[filterType]) && f[filterType].length > 0){
            f[filterType].forEach(function (filterArray) 
            {
                if (filterArray === filterText){
                    result.push(f)
                }
            });
        }else {
            if (f[filterType] === filterText){
                result.push(f)
            }
        }
    });

    return result
}

export function dinsintArrayObj(arr, key){
    const arrayUniqueByKey = [...new Map(arr.map(item =>
        [item[key], item])).values()];

    return arrayUniqueByKey;
}