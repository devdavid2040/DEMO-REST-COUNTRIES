/* export const SET_COUNTRY_LIST="SET_COUNTRY_LIST";
 */


import axios from "axios";

export function getCharacters(page, order, filtro) {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/character?page="+ page + "&order="+order + "&filter="+filtro, {
      //status: status,
    });
    return dispatch({ type: "GET_CHARACTERS", payload: json.data });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character/" + id);
      return dispatch({ type: "GET_DETAILS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameCharacters(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character?name=" + name);

      return dispatch({ type: "GET_NAME_CHARACTERS", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNameCharactersForm(name) {
  return async function (dispatch) {
    try {
      var json = await axios("http://localhost:3001/character?name=" + name);
      return dispatch({ type: "GET_NAME_CHARACTERS_FORM", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function clearNameCharactersForm() {
  return  function (dispatch) {
   return dispatch({ type: "CLEAR_NAME_CHARACTERS_FORM" });
  }
}

export function postCapter(name, charid) {
  return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/episode",{
      name,
      charid,
    });
    console.log(response);
    return response;
  }
} 
