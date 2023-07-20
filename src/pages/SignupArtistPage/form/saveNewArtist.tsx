import { postBinaryData } from '../../../utils/helpers';


export default async function saveNewArtist({
    data,
}: { data: any }) {
    const newArtist = await postBinaryData({
        data,
        url: 'api/saveArtist',
    }).then((data: any) => {
        return data;
    }).catch(e => {
        return;
    });

    return newArtist;
}