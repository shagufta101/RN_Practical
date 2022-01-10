import React, {useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as dashBoardAction from '../../actions/dashBoardActionTypes';
import {get} from 'lodash';
import {BaseStyle, Colors, Fonts, Images} from '../../constants';
import {HeaderX} from '../../components';
import {uuidv4} from '../../utils/helperFunctions';
import {normalize, scale, verticalScale} from '../../utils/responsiveFonts';

const Item = ({image}) => (
  <View style={styles.item}>
    <Image source={Images.ic_play_arrow} style={styles.playIconStyle} />
    <Image source={Images.ic_share} style={styles.imgShare} />
    <Image style={styles.image} source={{uri: image}} />
  </View>
);

const DashBoard = () => {
  const dispatch = useDispatch();

  const dashBoardReducer = useSelector((state) => state.dashBoardReducer);
  let DATA = get(dashBoardReducer, 'getVideos', []);
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState([]);

  useEffect(() => {
    dispatch(dashBoardAction.getVideoList());
  }, []);

  console.log('LIST DATA', listData);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    dispatch(dashBoardAction.getVideoList());

    setRefreshing(false);
  }, [refreshing]);

  const handleLoadMore = async () => {
    setTimeout(() => {
      setListData(listData.concat(...DATA));
      console.log('scrolled', listData);
    }, 1000);
  };

  const renderItem = ({item}) => <Item image={item.thumbnail_url} />;

  const FloatingActionButton = () => (
    <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacityStyle}>
      <Image source={Images.ic_share_app} style={styles.floatingButtonStyle} />
    </TouchableOpacity>
  );

  return (
    <>
      <HeaderX title={'Videos'} />
      <View style={styles.container}>
        <FlatList
          data={[...DATA,...listData]}
          renderItem={renderItem}
          keyExtractor={(item) => item.title + uuidv4()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReachedThreshold={8}
          onEndReached={handleLoadMore}
        />
      </View>
      <FloatingActionButton />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: Colors.wildSand,
  },
  item: {
    backgroundColor: Colors.white,
    // paddingHorizontal: scale(20),
    padding: verticalScale(20),
    margin: scale(20),
    elevation: 1,
    borderRadius: BaseStyle.BORDER_RADIUS,
  },
  title: {
    fontSize: normalize(14),
    ...Fonts.fontRegular,
  },
  playIconStyle: {
    height: scale(50),
    width: scale(50),
    position: 'absolute',
    zIndex: 1,
    top: BaseStyle.DEVICE_HEIGHT * 0.14,
    left: BaseStyle.DEVICE_WIDTH * 0.4,
    opacity: 0.7,
  },
  imgShare: {
    width: scale(35),
    height: scale(35),
    resizeMode: 'contain',
    tintColor: Colors.dodgerBlue,
    alignSelf: 'flex-end',
    left: scale(12),
    bottom: scale(10),
  },
  image: {
    width: BaseStyle.DEVICE_WIDTH * 0.8,
    height: BaseStyle.DEVICE_HEIGHT * 0.2,
    borderRadius: BaseStyle.BORDER_RADIUS,
    resizeMode: 'cover',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    right: scale(30),
    bottom: scale(30),
    backgroundColor: Colors.white,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: scale(55),
    height: scale(55),
    //backgroundColor:'black'
  },
});

export default DashBoard;
