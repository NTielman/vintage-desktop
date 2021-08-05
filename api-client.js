const restUrl = 'https://rickandmortyapi.com/api';
const graphqlUrl = 'https://rickandmortyapi.com/graphql';

// Rest API
const fetchItems = async query => {
    return (await fetch(`${restUrl}/${query}`)).json();
}

// Graphql API
export const graphqlFetch = async query => {
    const targetQuery = `{
        ${query}s {
         info {
           count
         }
         results {
           name
         }
       }
       }`

    const response = await fetch(graphqlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: targetQuery })
    })
    const data = await response.json();
    const destructuredData = data.data[`${query}s`];
    return destructuredData;
}

// fetch queries from search
export default fetchItems;