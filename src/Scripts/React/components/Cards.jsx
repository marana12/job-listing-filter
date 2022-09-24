import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import CardFilter from './CardFilter';
import Card from './Card';
import '../../../Styles/components/cards.css';
import { filterData, dinsintArrayObj } from '../../Common/Helper';

Cards.propTypes = {
    data : PropTypes.array
}

export default function Cards({data}){
    const [filtersArr, setFiltersArr] = useState([]);
    const [companyList, setCompanyList] = useState(data ?? []);
    
    const searchFilters = useCallback((id, filterType, filterText) =>{
        setFiltersArr(filters => {
            const array = [...filters, {filterText, id, type: filterType}];

            const sortedKey = Object.keys({filterText})[0];

            return dinsintArrayObj(array, sortedKey);
        });

        setCompanyList(filterData(filterType, filterText, companyList));

    },[companyList])

    const clearFilter = useCallback((filterText) => {
        const filtersArrSet = filtersArr.filter(f => f.filterText !== filterText);
        
        setFiltersArr(filtersArrSet)

        if(filtersArrSet.length === 0){
            setCompanyList(data);

            return;
        }

        const filteredCompany = [];

        filtersArrSet.forEach(value => {
            filteredCompany.push(filterData(value.type, value.filterText))
        });

        setCompanyList(...filteredCompany);
    },[data, filtersArr]);

    const clearAllFilters = useCallback(() =>{
        setCompanyList(data);

        setFiltersArr([])
    },[data])

    return(
        <div className='cards'>          
            <div className='cards__lists'>
                {
                    filtersArr.length > 0 &&
                        <CardFilter 
                        filters={filtersArr} 
                        onClearFilter = {clearFilter}
                        onHandlerClearAllFilters={clearAllFilters} />
                }

                {
                    companyList?.map((company,i) => {
                       return <Card key={i}
                       onHandlerFilter = {searchFilters}
                       {...company}/>
                    })
                }
            </div>
        </div>
    );
}