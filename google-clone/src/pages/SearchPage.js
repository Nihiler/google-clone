import React from 'react'
import './SearchPage.css'
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
//https://developers.google.com/custom-search/v1/using_rest

// https://cse.google.com/cse/create/new

//API KEY = AIzaSyCiCibhrhdNRs8SiDePpdKodnR4TbfbmqU

    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <h1>{term}</h1>
            </div>

            <div className='searchPage__results'>
                
            </div>            
        </div>
    )
}

export default SearchPage
