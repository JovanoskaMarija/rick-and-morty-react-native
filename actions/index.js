export const fetchCharactersSuccess = (data) => { 
    return {
        type: "FETCH_CHARACTERS_SUCCESS",
        data:data
    }
}

export const fetchCharactersLoading = () => { 
    return {
        type: "FETCH_CHARACTERS_LOADING",
        // data:data
    }
}




export const fetchCharactersFail = () => { 
    return {
        type: "FETCH_CHARACTERS_FAIL",
        // data:data
    }
}

export const fetchCharacters = () => {
  return dispatch => {
    dispatch(fetchCharactersLoading()) ;
    fetch('https://rickandmortyapi.com/api/character/', {method: 'get'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(fetchCharactersSuccess(data.results)) 
      })
      .catch(() => {
        dispatch(fetchCharactersFail()) 
      })
  };
};
