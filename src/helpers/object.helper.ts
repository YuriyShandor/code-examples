class ObjectHelper {
  normalizeSuperHeroObject(obj: any) {
    const superHero = { ...obj };
    Object.keys(superHero)
      .forEach((key) => {
        if (typeof superHero[key] === 'object') {
          Object.keys(superHero[key])
            .forEach((nestedKey) => {
              if (superHero[key][nestedKey] === 'null') {
                superHero[key][nestedKey] = '-';
              }
            });
        }
      });
    return superHero;
  }
}

export default new ObjectHelper();
