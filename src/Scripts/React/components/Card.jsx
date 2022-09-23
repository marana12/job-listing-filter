import PropTypes from 'prop-types';
import '../../../Styles/components/card.css';

Card.propTypes = {
    id : PropTypes.number,
    company: PropTypes.string,
    logo: PropTypes.string,
    isNew: PropTypes.bool,
    isFeatured: PropTypes.bool,
    position: PropTypes.string,
    postedAt: PropTypes.string,
    role: PropTypes.string,
    contract: PropTypes.string,
    location: PropTypes.string,
    level: PropTypes.string,
    languages: PropTypes.array,
    tools: PropTypes.array,
    onHandlerFilter: PropTypes.func.isRequired
}

export default function Card(
    {
        id,
        company, 
        logo, 
        isNew, 
        isFeatured, 
        position,
        location, 
        postedAt, 
        role,
        contract,
        level,
        languages,
        tools,
        onHandlerFilter}){

        const handlerFilter = (type, text) => {
                onHandlerFilter(id, type, text);
            };

        return (
            <div className={`card jl-card ${isFeatured && 'jl-card--featured'}`}>
                <img className='card-logo' src={`./images/${logo}`} alt={company} />

                <div className='card__info'>
                    <div className='card__info-field'>
                        <div className='card__info-title'>{company}</div>

                        { isNew && 
                            <div className='jl-pill jl-pill--primary card__info-new-pill'>New!</div>
                        }

                        { isFeatured && 
                            <div className='jl-pill jl-pill--secondary card__info-featured-pill'>Featured</div>
                        }
                    </div>
                    
                    <div className='card__info-subtitle'>
                        {position}
                    </div>

                    <div className='card__info-small-text'>
                        <span>{postedAt}</span>
                        <span>{contract}</span>
                        <span>{location}</span>
                    </div>

                </div>

                <div className='card__skills'>
                    <button 
                        className='jl-button' 
                        onClick={()=> handlerFilter(Object.keys({role})[0], role)}>
                            {role}   
                    </button>

                    <button 
                        className='jl-button' 
                        onClick={()=> handlerFilter(Object.keys({level})[0], level)}>
                            {level}    
                    </button>

                    { languages?.map((language,index) =>
                        <button 
                            key={index} 
                            className='jl-button' 
                            onClick={()=> handlerFilter(Object.keys({languages})[0], language)}>
                                {language}    
                        </button>
                    )}

                    { tools?.map((tool,index) =>
                        <button 
                            key={index} 
                            className='jl-button' 
                            onClick={()=> handlerFilter(Object.keys({tools})[0], tool)}>
                                {tool}    
                        </button>
                    )}
                </div>
            </div>
        );
}