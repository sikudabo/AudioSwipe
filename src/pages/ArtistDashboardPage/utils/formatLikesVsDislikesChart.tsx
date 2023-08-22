import { SongDataType } from "../../ClipsPage/typings/songTableRowType";

export default function formatLikesVsDislikesChart(songs: SongDataType[]) {
    let likesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let dislikesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (songs) {
        songs.map((song: SongDataType) => {
            song?.disLikes?.map((dislike: any) => {
                dislikesData[dislike.month] += 1;
            });
    
            song?.likes?.map((like: any) => {
                likesData[like.month] += 1;
            });
        });
    }

    return {
        dislikesData,
        likesData,
    };
}