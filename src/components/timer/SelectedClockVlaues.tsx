import type { Timer, TimerTypeSelection } from "../../types"

interface Props {
    changeTimerSelected: (value: TimerTypeSelection) =>  void
    hasChanged: {
        pomodoro: boolean
        relax: boolean
    }
    timer: Timer
    timerSelected: TimerTypeSelection
}

export const SelectedClockValues = ({ changeTimerSelected, hasChanged, timer, timerSelected }: Props) => {
    return (
        <section className='flex flex-col items-center flex-1 justify-around'>
            <article className='p-2 flex flex-col gap-2'>
                <h2 className=' text-left underline-offset-1'>Focus Time</h2>
                <p
                    className={`${hasChanged.pomodoro ? "bg-black" : "bg-black/30"} text-white rounded-sm font-clock hover:cursor-pointer text-4xl pl-3 pr-3 pt-1 pb-1 ${timerSelected === 'focus' && "animate-bounce_clock"}`}
                    onClick={() => changeTimerSelected("focus")}
                >
                    {timer.pomodoro.minute != undefined && timer.pomodoro.minute > 9 ? timer.pomodoro.minute : "0" + timer.pomodoro.minute} : 00
                </p>

            </article>

            <article className='p-2 flex flex-col gap-2'>
                <h2 className='text-left'>Relax Time</h2>
                <p
                    className={`${hasChanged.relax ? "bg-black" : "bg-black/30"} text-white rounded-sm font-clock hover:cursor-pointer text-4xl pl-3 pr-3 pt-1 pb-1 ${timerSelected === 'relax' && "animate-bounce_clock"}`}
                    onClick={() => changeTimerSelected("relax")}
                >
                    {timer.relax.minute != undefined && timer.relax.minute > 9 ? timer.relax.minute : "0" + timer.relax.minute} : 00
                </p>
            </article>
        </section>
    )
}
