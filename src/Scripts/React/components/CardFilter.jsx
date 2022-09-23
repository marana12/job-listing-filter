import PropTypes from 'prop-types';
import { useCallback } from 'react';
import '../../../Styles/components/card-filter.css';

CardFilter.propTypes = {
    filters: PropTypes.array.isRequired,
    onClearFilter: PropTypes.func.isRequired,
    onHandlerClearAllFilters: PropTypes.func.isRequired,
}
export default function CardFilter({filters, onClearFilter, onHandlerClearAllFilters}){
    const clearHandler = useCallback((filter) =>{
        const {filterText, type} = filter;
        
        onClearFilter(filterText, type);
        
    },[onClearFilter]);

    return(
        <div className="jl-card card-filter">
            <div className="card-filter__items">
                {
                    filters?.map((filter, index) =>
                        <div key={index} className='card-filter__buttons'>
                            <button 
                            className='jl-button jl-button--with-icon'
                            onClick={()=>clearHandler(filter)}>
                                {filter?.filterText}

                                <div className='jl-button__icon'>
                                    <i className='svg-icon svg-icon-remove'></i>
                                </div>
                            </button>                 
                        </div>
                    )
                }
            </div>

            <button 
                className='jl-button jl-button--link card-filter__clear'
                onClick={onHandlerClearAllFilters}>
                    Clear
            </button>
        </div>
    );
}