export type TAsyncThunkPayload = any | undefined;

export type TUserState = {
  user: any;
  isAppLoading: boolean;

  isRegisterAdminLoading: boolean;
  registerAdminError: any;
  registerAdminSuccess: any;

  isLoginAdminLoading: boolean;
  loginAdminSuccess: any;
  loginAdminError: any;

  isRegisterLoading: boolean;
  registerError: any;
  registerSuccess: any;

  isLoginLoading: boolean;
  loginSuccess: any;
  loginError: any;
};

export type TDashboardState = {
  dashboard: any;
  isDashboardLoading: boolean;
  dashboardError: any;
  dashboardSuccess: any;
};

export type TProductCategoryState = {
  productCategories: any[];
  isProductCategoriesLoading: boolean;
  productCategoriesError: any;
  productCategoriesSuccess: any;

  productCategory: any;
  isProductCategoryLoading: boolean;
  productCategoryError: any;
  productCategorySuccess: any;

  isAddProductCategoryLoading: boolean;
  addProductCategoryError: any;
  addProductCategorySuccess: any;

  isUpdateProductCategoryLoading: boolean;
  updateProductCategoryError: any;
  updateProductCategorySuccess: any;

  isDeleteProductCategoryLoading: boolean;
  deleteProductCategoryError: any;
  deleteProductCategorySuccess: any;
};