class GlobalHelper {
  paramsToQueryString(params: any) {
    let queryParamsString = '';
    if (params !== undefined && Object.keys(params).length) {
      let isFistIteration = true;
      Object.keys(params)
        .forEach((key) => {
          queryParamsString += `${(isFistIteration ? '?' : '&') + key}=${params[key]}`;
          isFistIteration = false;
        });
    }
    return queryParamsString;
  }
}

export default new GlobalHelper();
