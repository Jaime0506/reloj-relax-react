import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import dayjs from 'dayjs';

import { useChronometerStore } from '../../hooks';
import { SelectTime, SelectedClockValues } from './';

import type { TimerTypeSelection, Timer as TypeTimer } from '../../types';

import './index.css'

const initialState: TypeTimer = {
    uid: null,
    work: {
        minute: dayjs().set('minute', 20).minute(),
        seconds: 0
    },

    relax: {
        minute: dayjs().set('minute', 5).minute(),
        seconds: 0
    }
}

interface ClockWrapperProps {
    closeModal: () => void
}

export const ClockWrapper = ({ closeModal }: ClockWrapperProps) => {
    const { onAddTimer } = useChronometerStore()

    const [timer, setTimer] = useState<TypeTimer>(initialState)
    const [timerSelected, setTimerSelected] = useState<TimerTypeSelection>("focus")
    const [hasChanged, setHasChanged] = useState({
        work: false,
        relax: false,
    })

    const changeTimerSelected = (type: TimerTypeSelection) => {
        setTimerSelected(type)
    }

    const handleAddTimer = () => {
        closeModal()

        setTimer({...timer})
        onAddTimer(timer)
    }

    return (
        <main className='flex flex-col gap-4 p-5'>
            <div className='flex w-full flex-row text-center gap-10'>
                <SelectTime
                    setTimer={setTimer}
                    setHasChanged={setHasChanged}
                    timerSelected={timerSelected}
                    timer={timer}
                    hasChanged={hasChanged}
                />
                <SelectedClockValues
                    changeTimerSelected={changeTimerSelected}
                    hasChanged={hasChanged}
                    timer={timer}
                    timerSelected={timerSelected}
                />
            </div>


            <AnimatePresence>
                {hasChanged.work && hasChanged.relax && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center items-center h-10 flex-col gap-2"
                        onClick={handleAddTimer}
                    >
                        <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8 hover:bg-black transition-colors ease-in duration-300 shadow-xl text-black hover:cursor-pointer hover:text-white">
                            <i className="fa-solid flex fa-plus"></i>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </main>
    )
}