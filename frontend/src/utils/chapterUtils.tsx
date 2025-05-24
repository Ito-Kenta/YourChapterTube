export const transformNumberToTime = (seconds: number | undefined) => {
    let time: string | undefined;
    if (seconds != undefined) {
        time = new Date(seconds * 1000).toISOString().substr(12, 7);
    } else {
        time = undefined;
    }
    return time;
}