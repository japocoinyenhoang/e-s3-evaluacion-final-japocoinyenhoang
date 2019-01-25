const ENDPOIND='https://hp-api.herokuapp.com/api/characters/?results=25';
const fetchApi=()=>fetch(ENDPOIND).then (response=>response.json());
export{fetchApi};