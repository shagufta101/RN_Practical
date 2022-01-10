import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, ViewStyle } from 'react-native'
import LottieView from 'lottie-react-native';
import { BaseStyle } from '../../constants';

const loader = require('../../assets/lottie/load-ars.json');

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieContainer: {
        width: BaseStyle.DEVICE_WIDTH * 0.2,
        height: BaseStyle.DEVICE_WIDTH * 0.2
    }
})

export interface Props {
    loading: Boolean;
    style: ViewStyle;
}

export default ({ loading = false, style }: Props) => {
    const visible = useSelector(state => state.appReducer.visible) || loading
    return visible
        ? <View style={style ? style : { ...styles.container }} >
            <LottieView style={styles.lottieContainer} source={loader} autoPlay loop />
        </View>
        : null

}