import React, { useState, useEffect } from "react";
import { Snackbar, useTheme } from 'react-native-paper';
import { toastActionsCreators } from "../../actions/toastActionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../constants";

const UniversalToast = ({ }) => {

    const dispatch = useDispatch();
    const toastReducer = useSelector(state => state.toastReducer);
    const { message, error, warning, duration } = toastReducer;

    const hideToast = () => dispatch(toastActionsCreators.hide());

    const [present, changePresent] = useState(false)
    const [timer, changeTimer] = useState(false)

    useEffect(() => {
        if (message) {
            var dismissTimeout = setTimeout(function () { hideToast() }, duration);
            clearTimeout(timer);
            changePresent(true);
            changeTimer(dismissTimeout);
        } else {
            changePresent(false)
        }
    }, [message])

    if (error || warning) {
        return (
            <Snackbar
                theme={{
                    colors: {
                        surface: Colors.white,
                        accent: Colors.white
                    }
                }}
                style={{
                    backgroundColor: Colors.black,
                }}
                // duration={5000}
                visible={present}
                onDismiss={() => { }}
                action={{
                    label: `\u2715`,
                    onPress: () => {
                        hideToast();
                        clearTimeout(timer);
                    },
                }}
            >
                {message}
            </Snackbar>
        )
    }

    if (message) {
        return (
            <Snackbar
                theme={{
                    colors: {
                        surface: Colors.white,
                        accent: Colors.white
                    }
                }}
                style={{
                    backgroundColor: Colors.black,
                }}
                // duration={5000}
                visible={present}
                onDismiss={() => { }}
                action={{
                    label: `\u2715`,
                    onPress: () => {
                        hideToast();
                        clearTimeout(timer);
                    },
                }}
            >
                {message}
            </Snackbar>
        )

    } else {
        return null
    }
}

export default UniversalToast;