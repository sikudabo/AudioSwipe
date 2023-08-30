import { useQuery } from '@tanstack/react-query';
import { useUserData } from '../../../../hooks';
import axios from 'axios';

export default function useFetchArtistSongs() {
    const { artist } = useUserData();
    const { _id } = artist;
    return useQuery(['fetchArtistSongs'], async () => {
        const artistSongsResponse = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASE_URI}api/get-artist-audio/${_id}`,
        }).then(response => {
            return response.data.artistAudio;
        });
        return artistSongsResponse;
    },  {
            refetchInterval: 1000,
            refetchIntervalInBackground: true,
        },
    );
}