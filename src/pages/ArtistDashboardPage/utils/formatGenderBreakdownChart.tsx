import { SongDataType } from "../../ClipsPage/typings/songTableRowType";

export default function formatGenderBreakdownChart(songs: SongDataType[]) {
    let femaleCount = 0;
    let maleCount = 0;

    if (songs) {
        songs.map((song: SongDataType) => {
            song?.disLikes?.map((dislike: any) => {
                if (dislike.gender === 'male') {
                    maleCount += 1;
                    return;
                }

                femaleCount += 1;
            })
        });
    }

    return {
        femaleCount,
        maleCount,
    };
}