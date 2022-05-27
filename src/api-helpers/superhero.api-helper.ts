import axios from 'axios';

class SuperHeroApiHelper {
  findSuperHero(superheroName: string) {
    return axios.get(`https://superheroapi.com/api.php/${process.env.VUE_APP_SUPER_HERO_API_ACCESS_TOKEN}/search/${superheroName}`);
  }
}

export default new SuperHeroApiHelper();
