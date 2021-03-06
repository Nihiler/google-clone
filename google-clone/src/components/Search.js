import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
// import { ActionTypes} from "..reducer";
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState ("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log("Search Button -> Hit; Data: ", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        //do something with input. come back and fix
        history.push('/search');
    }

    return (
        <div>
            <form className='search'>
            <div className='search__input'>
                 <SearchIcon className="search__inputIcon" /> 
                 <input value={input} onChange={e=>setInput(e.target.value)}/>
                 <MicIcon/>
            </div>

             { !hideButtons ? (
                <div className='search__buttons'>

                    <Button type= "submit" onClick={search}
                     variant ="outlined">Search</Button>
                    <Button variant ="outlined">I'm feeling lucky</Button>
                    </div>

             ):(

                    <div className='search__buttonsHidden'>

                    <Button className='search__buttonsHidden'
                    type= "submit" onClick={search}
                     variant ="outlined">Search</Button>

                    <Button className='search__buttonsHidden'
                    variant ="outlined">I'm feeling lucky</Button>
                    </div>
             )}

            
              {/* <div className='search__buttons'>

               <Button type= "submit" onClick={search} variant ="outlined">Google Search</Button>
              <Button variant ="outlined">I'm feeling lucky</Button>
              </div>  */}
             

            </form>
        </div>
    )
}

export default Search
