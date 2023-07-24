import { putBinaryData } from "../../../utils/helpers";


export default async function saveNewArtist({
    data,
}: { data: any }) {
    const newArtist = await putBinaryData({
        data,
        url: 'api/saveArtist',
    }).then((data: any) => {
        return data;
    }).catch(e => {
        return;
    });

    return newArtist;
}