import { useQuery } from 'react-query';
import { getData } from '../../../../utils/helpers';
import { useUserData } from '../../../../hooks';

export default function useFetchArtistSongs() {
    const { artist } = useUserData();
    const { _id } = artist;
    return useQuery(['fetchArtistSongs'], async () => {
        const artistSongsResponse = await getData({
            url: `api/getArtistAudio/${_id}`,
        }).then(response => {
            return response;
        });

        console.log('The artist songs are:', artistSongsResponse);
        return artistSongsResponse;
    }, {
        refetchOnMount: true,
    });
}