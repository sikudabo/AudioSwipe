import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { useUserData } from "./useUserData";

export function useFetchArtistData() {
    const { artist } = useUserData();
    const { _id } = artist;
    
    return useQuery(['fetchArtistData', _id], async () => {
        const artistData = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASE_URI}api/fetch-artist/${_id}`,
        }).then(response => {
            const { artist } = response.data;
            return artist;
        }).catch(() => {
            
        });

        return artistData;
    }, {
        initialData: artist,
        staleTime: 2000,
    });
}
