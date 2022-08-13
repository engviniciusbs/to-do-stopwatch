const timeInSecond = (time: string) => {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":")

    const hoursInSeconds = Number(hours) * 3600;
    const minutesInSeconds = Number(hours) * 60;

    return hoursInSeconds + minutesInSeconds + Number(seconds);
}

export default timeInSecond