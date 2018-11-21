import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},              // 歌手
  playing: false,          // 播放状态
  fullScreen: false,       // 播放器展开和收起
  playlist: [],            // 播放列表
  sequenceList: [],        // 歌曲列表，有可能是顺序或者随机
  mode: playMode.sequence, // 播放模式
  currentIndex: -1,        // 当前播放的索引 - 当前播放的是哪首歌
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state