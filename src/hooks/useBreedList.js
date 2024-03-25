import { useState , useEffect } from "react";

const localCache = {};

export default function useBreedList(animal){

    const [breedList , setBreedList] = useState([])
    const [status , setStatus] = useState('unloaded')

    useEffect(() => {
        if(!animal){
            setBreedList([])
        }
        else if (localCache[animal]) {
            setBreedList(localCache[animal]);
          }
        else{
            requestBreedList()
        }
    } , [animal])

    async function requestBreedList(){
        setBreedList([]);
        setStatus("loading");
        const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        const data = await response.json();
        
        localCache[animal] = data.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
      }
      console.log('a' , [breedList, status])
      return [{data: breedList, status}];
}

