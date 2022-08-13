import { Fragment } from "react";
import style from "./Watch.module.scss"

interface Props{
    time: number | undefined
}

const Watch = ({ time = 0 }: Props) => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [tenMinute, unityMinute] = String(minutes).padStart(2, "0");
    const [tenSecond, unitySecond] = String(seconds).padStart(2, "0");
    
    return(
        <Fragment>
            <span className={style.numberWatch}>{tenMinute}</span>
            <span className={style.numberWatch}>{unityMinute}</span>
            <span className={style.divisionWatch}>:</span>
            <span className={style.numberWatch}>{tenSecond}</span>
            <span className={style.numberWatch}>{unitySecond}</span>
        </Fragment>
    )
}

export default Watch;