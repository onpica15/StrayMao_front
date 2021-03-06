import {
  GET_RECOM,
  PET_CANCLE,
  PET_DISLIKE,
  PET_LIKE,
  PET_INIT,
  GET_LIST,
  GET_DETAIL,
  SET_DETAIL_PET_ID,
  MAP_OBJ,
  GET_ADOP_ID,
  SET_ADOP_ID,
  ADD_ADOP,
} from './actionTypes';

//actionCreater

export const setAdopId = (value) => {
  return { type: SET_ADOP_ID, value };
};
export const getAdopId = (value) => {
  return { type: GET_ADOP_ID, value };
};

export const getAdopPet = (value) => {
  return { type: ADD_ADOP, value };
};

export const getAdopPetAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/get_adop_pet';
    const pet = { petId: value, userId: 3 };
    const request = new Request(url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(pet),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data.data);
      await dispatch(getAdopPet(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const getRecommand = (value) => {
  return { type: GET_RECOM, value };
};

export const getRecommandAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/get_recom';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data.data);
      await dispatch(getRecommand(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};

export const getDetail = (value) => {
  return { type: GET_DETAIL, value };
};

export const getDetailAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = `http://localhost:3001/straymao/adoption/get_pet_list/${value}`;

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      // console.log(data.data);
      await dispatch(getDetail(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};
export const petLike = (value) => {
  return { type: PET_LIKE, like: value };
};
export const petDisLike = (value) => {
  return { type: PET_DISLIKE, like: value };
};
export const petInitLike = (value) => {
  return { type: PET_INIT, like: value };
};
export const petLikeAsync = (value) => {
  return async function addPetHeart(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/pet_heart';
    const pet = { petId: value, userId: 3 };
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      // console.log(data);

      await dispatch(petLike(true));
    } catch (error) {
      //setError(error)
    }
  };
};

export const petDisLikeAsync = (value) => {
  return async function addPetHeart(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/pet_heart';
    const pet = { petId: value, userId: 3 };
    const request = new Request(url, {
      method: 'DELETE',
      body: JSON.stringify(pet),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      // console.log(data);

      await dispatch(petDisLike(false));
    } catch (error) {
      //setError(error)
    }
  };
};

export const petInitLikeAsync = (value) => {
  return async function addPetHeart(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/pet_heart_init';
    const pet = { petId: value, userId: 3 };
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      if (value > 0) {
        const response = await fetch(request);
        const data = await response.json();
        // data會是一個物件值
        // console.log("init:", data.data);
        let dataValue = false;
        if (data.data.length > 0) {
          console.log('like:', true);
          dataValue = true;
        }
        await dispatch(petInitLike(dataValue));
      }
    } catch (error) {
      //setError(error)
    }
  };
};

export const getList = (value) => {
  // console.log("value:", value);
  return { type: GET_LIST, value };
};

export const getListAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    const url = 'http://localhost:3001/straymao/adoption/get_pet_list/m/111';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      // console.log(data.data);

      await dispatch(getList(data.data));
    } catch (error) {
      //setError(error)
    }
  };
};
export const petDetailIdAsync = (value) => {
  return async function getRecommandPet(dispatch, getState) {
    try {
      await dispatch(petDetailId(value));
    } catch (error) {
      //setError(error)
    }
  };
};
export const petDetailId = (value) => {
  // console.log("value:", value);
  return { type: SET_DETAIL_PET_ID, id: value };
};

export const MapObj = (value) => {
  return { type: MAP_OBJ, obj: value };
};
