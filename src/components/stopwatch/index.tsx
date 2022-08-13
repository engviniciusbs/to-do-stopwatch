import Button from "../button";
import Watch from "./watch";
import style from "./Stopwatch.module.scss"
import timeInSecond from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined,
  finishTask: () => void
}

const Stopwatch = ({ selected, finishTask }: Props) => {
  // console.log('conversao: ', timeInSecond('01:01:01'))
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time){
      setTime(timeInSecond((selected.time)))
    }
  }, [selected])
  
  const countDown = (count: number = 0) => {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1);
        return countDown(count - 1);
      }
      finishTask();
    }, 1000);
  }

  return(
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.wrapper}>
          <Watch time={time}/>
      </div>
      <Button onClick={() => countDown(time)}>
          Start
      </Button>
    </div>  
  )
}

export default Stopwatch;