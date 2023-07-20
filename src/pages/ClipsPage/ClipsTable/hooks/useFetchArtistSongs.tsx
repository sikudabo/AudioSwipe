import { useQuery } from 'react-query';
import { getData } from '../../../../utils/helpers';
import { useUserData } from '../../../../hooks';

export default function useFetchArtistSongs() {
    const { artist } = useUserData();
    const { _id } = artist;
    return useQuery(['fetchArtistSongs'], async () => {
        const artistSongsResponse = await getData({
            url: `api/get-artist-audio/${_id}`,
        }).then(response => {
            return response;
        });
        return artistSongsResponse;
    },  {
            refetchOnMount: true,
            refetchInterval: 1000,
            refetchIntervalInBackground: true,
            staleTime: 1,
        },
    );
}