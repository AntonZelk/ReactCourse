export default class CoffeeService {
  getBestsellers() {
    return fetch('http://localhost:5000/bestsellers')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
}
