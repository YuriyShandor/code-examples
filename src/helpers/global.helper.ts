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

  setDynamicNumberingForDOMElements(elementSelector: string) {
    const questionItems = document.querySelectorAll(elementSelector);
    questionItems.forEach((item, index) => {
      // eslint-disable-next-line no-param-reassign
      item.textContent = `${index < 9 ? 0 : ''}${index + 1}. ${item.textContent}`;
    });
  }

  languageSelectOptions() {
    return [
      {
        value: 'eng',
        label: 'English',
        googleMapsCode: 'en',
      },
      {
        value: 'ukr',
        label: 'Українська',
        googleMapsCode: 'uk',
      },
    ];
  }
}

export default new GlobalHelper();
