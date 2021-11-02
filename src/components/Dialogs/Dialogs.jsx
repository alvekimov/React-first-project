import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Alex</div>
                <div className={`${s.dialog} ${s.active}`}>Dima</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Kate</div>
                <div className={s.dialog}>Misha</div>
                <div className={s.dialog}>Petr</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Andrey</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    );
}

export default Dialogs;