import React, { useEffect, useCallback, useContext } from 'react';
import { AppStrings } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeAppState } from '../actions/authActionsTypes';
import NavigationService from '../navigation/NavigationService';
import Routes from '../navigation/routes';
import { reject } from 'lodash';

const { AUTH_STATE } = AppStrings;

const AppStateContext = React.createContext();

// interface AppContext {
//     state: string;
//     switchTo: () => void;
// }

export const useAppContext = () => useContext(AppStateContext);

export const AppContextProvider = props => {

    const dispatch = useDispatch();

    const switchTo = useCallback(
        (reqData, callback) => {
            new Promise((resolve, reject) => {
                dispatch(changeAppState({ reqData, resolve, reject }))
            })
                .then(() => {
                    callback && callback(true)
                })
                .catch(() => { /** Console error */ })
        },
        [],
    );

    const initialValues = {
       
        switchTo
    };
    // check loggedin on mount
    // useEffect(() => {
    //     NavigationService.navigate(Routes.MAIN_APP);
    // }, [appstate]);

    return (
        <AppStateContext.Provider value={initialValues}>
            {props.children}
        </AppStateContext.Provider>
    );
};

export default AppStateContext;