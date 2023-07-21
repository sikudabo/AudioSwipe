import { useQuery } from 'react-query';
import { getData } from '../../../../utils/helpers';
import { useUserData } from '../../../../hooks';
import axios from 'axios';

export default function useFetchArtistSongs() {
    const { artist } = useUserData();
    const { _id } = artist;
    return useQuery(['fetchArtistSongs'], async () => {
        const artistSongsResponse = await axios({
            method: 'GET',
            url: `http://localhost:2000/api/get-artist-audio/${_id}`,
        }).then(response => {
            return response.data;
        });
        return artistSongsResponse;
    },  {
            refetchOnMount: true,
            refetchInterval: 1000,
            refetchIntervalInBackground: true,
        },
    );
}