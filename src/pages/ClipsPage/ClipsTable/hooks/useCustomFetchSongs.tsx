import axios from 'axios';
import { useUserData } from '../../../../hooks';

export default async function useCustomFetchSongs() {
    const { artist } = useUserData();
    const { _id } = artist;
    const data = await axios({
        method: 'GET',
        url: `http://localhost:2000/api/get-artist-audio/${_id}`,
    }).then(response => {
        return response.data;
    }).catch(e => {
        console.log(e.message);
    });

    return data;
}