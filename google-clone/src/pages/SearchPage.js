import React from 'react'
import './SearchPage.css'
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import {Link} from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import MapIcon from '@material-ui/icons/Map';
import MoreIcon from '@material-ui/icons/More';
import ShopIcon from '@material-ui/icons/LocalOffer';
import ImageIcon from '@material-ui/icons/Image';
import imageEngine from "./engine.jpg";

function SearchPage() {
//https://developers.google.com/custom-search/v1/using_rest

// https://cse.google.com/cse/create/new

//API KEY = AIzaSyCiCibhrhdNRs8SiDePpdKodnR4TbfbmqU

    const [{term}, dispatch] = useStateValue();

    // LIVE API CALL
    const {data} = useGoogleSearch(term); 

    //MOCK API
    // const data=Response;

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to ="/">

                    <img className='searchPage__logo'
                    //  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" GOOGLE LOGO
                    src= {imageEngine}
                     alt =""/>

                </Link>

            <div className='searchPage__headerBody'>
                <Search hideButtons />
                    <div className='searchPage__options'>
                        <div class="searchPage__optionsLeft">
                            <div className='searchPage_option'>
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage_option'>
                                <DescriptionIcon/>
                                <Link to="/all">News</Link>
                            </div>
                            <div className='searchPage_option'>
                                <ImageIcon/>
                                <Link to="/all">Images</Link>
                            </div>
                            <div className='searchPage_option'>
                                <ShopIcon/>
                                <Link to="/all">Shooping</Link>
                            </div>
                            <div className='searchPage_option'>
                                <MapIcon/>
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className='searchPage_option'>
                                <MoreIcon/>
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div class="searchPage__optionsRight">
                        <div className='searchPage_option'>
                               
                                <Link to="/all">Settings</Link>
                            </div>
                            <div className='searchPage_option'>
                                
                                <Link to="/all">Tools</Link>
                            </div>
                        </div>



                    </div>
            </div>

                {/* <h1>{term}</h1> */}
            </div>
{true && (
            <div className='searchPage__results'>
                <p className='searchPage__resultCount'>

                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
            {data?.items.map(item=>(

                    <div className='searchPage__result'>
                        <a href={item.link}> {item.displayLink}</a>  
                        <a className='searchPage__resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>

                        <p className='searchPage__resultSnippet'>{item.snippet}</p>
                    </div>

            ))}

            </div>   )}         
        </div>
    )
}

export default SearchPage
