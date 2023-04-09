import { actionType } from "./category.constant";

export const categorieLoading = () => {
  return {
    type: actionType.ON_CATEGORIE_LOADING,
  };
};

export const categorieSuccess = () => {
  return {
    type: actionType.ON_CATEGORIE_SUCCESS,
  };
};
export const categorieCreate = () => {
  return {
    type: actionType.ON_CATEGORIE_DATA,
  };
};
export const categorieError = () => {
  return {
    type: actionType.ON_CATEGORIE_ERROR,
  };
};
