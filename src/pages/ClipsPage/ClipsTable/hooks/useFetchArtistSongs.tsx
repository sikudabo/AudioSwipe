import { useQuery } from 'react-query';
import { getData } from '../../../../utils/helpers';
import { useUserData } from '../../../../hooks';
import axios from 'axios';

const data = [
    {
        albumCover: '1689809436654-albumCover.jpeg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg', 'kdnakgkdkagmk', 'dakdmgakgakgka', 'kdsmgaksdgmagmkla', 'kdgakmkgmkamgkgak'],
        _id: 1,
        likes: ['jdnjagnoagdo', 'jkdnoagndagdg', 'dkadokdglng'],
        name: 'Down on donors',
        songMediaId: '1689812059779-song.mp3',
    },
    {
        albumCover: '1689812059752-albumCover.jpg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg'],
        _id: 2,
        likes: ['kdgkjnakgjdagl', 'jkndagnaglkaa', 'dkamdagoad', 'kdnakgnjkaggawk', 'jdnajknkadskgamko'],
        name: 'The liberal truth',
        songMediaId: '1689809436712-song.mp3',
    },
    {
        albumCover: '1689854702677-albumCover.jpg',
        disLikes: ['kdngakgkdakdkmkag', 'kdmkamgkagka', 'dkkdagkadmgks', 'damgkegadkmgdka', 'dkagndkagkgmakldla', 'kdnkagkdadkmkgldgak', 'kdmgkakglalgldaldla', 'kndgakamgkdakgdsmkdgak', 'dmagkdmgkagamdgsdmglamlg', 'dskmklgamalmldgdlamg'],
        _id: 3,
        likes: ['kdgkjnakgjdagl', 'jkndagnaglkaa', 'dkamdagoad', 'kdnakgnjkaggawk', 'jdnajknkadskgamko'],
        name: 'Tucker & Tim',
        songMediaId: '1689854702706-song.mp3',
    },
];

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