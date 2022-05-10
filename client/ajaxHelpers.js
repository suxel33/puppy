// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2109-UNF-HY-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
        try {
          const response = await fetch(`${APIURL}/players`);
          const result = await response.json();
          if (result.error) throw result.error;
          return result.data.players;
        } catch (err) {
          console.error('Uh oh, trouble fetching players!', err);
        }

}
export const fetchSinglePlayer = async (playerId) => {
    const response = await fetch(`${APIURL}/players/PLAYER-ID`);
    const result = await response.json();
    return result;
};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
