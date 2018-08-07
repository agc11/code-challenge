import axios from 'axios';

export default function(query, variables = '') {
  return new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_API}/graphql${variables}`, { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}
