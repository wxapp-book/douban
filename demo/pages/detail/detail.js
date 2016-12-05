var service = require( '../../service/douban/douban' ),
  utils = require( '../../common/utils/utils' ),
  _fn;

Page( {
  data : {
    movie : {},
    screen : {
      minHeight : 'auto'
    }
  },
  onLoad : function( query ) {
    var self = this;
    utils.showLoading();
    // 设置页面高度，避免底部出现白色区域。
    wx.getSystemInfo( {
      success : function( info ) {
        self.setData( {
          'screen.minHeight' : info.windowHeight + 'px'
        } );
      }
    } )
    // 获取数据
    service.getMovieDetail( query.id, function( data ) {
      data = data || movieDetail;
      utils.hideLoading();
      _fn.render.call( self, data );

    } );
  }
} );

_fn = {
  render : function( data ) {
    // 设置描述
    data.genresStr = data.genres.join( '/' );
    // 把演员和导演都罗列出来
    data.staff = data.directors.concat( data.casts );
    this.setData( {
      movie : data
    } );
  }
}

var movieDetail = {"rating": {"max": 10, "average": 7, "stars": "35", "min": 0}, "reviews_count": 1396, "wish_count": 19931, "douban_site": "", "year": "2016", "images": {"small": "https://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2378133884.jpg", "large": "https://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2378133884.jpg", "medium": "https://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2378133884.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/26630781\/", "id": "26630781", "mobile_url": "https:\/\/movie.douban.com\/subject\/26630781\/mobile", "title": "\u6211\u4e0d\u662f\u6f58\u91d1\u83b2", "do_count": null, "share_url": "https:\/\/m.douban.com\/movie\/subject\/26630781", "seasons_count": null, "schedule_url": "https:\/\/movie.douban.com\/subject\/26630781\/cinema\/", "episodes_count": null, "countries": ["\u4e2d\u56fd\u5927\u9646"], "genres": ["\u5267\u60c5", "\u559c\u5267"], "collect_count": 41236, "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1050059\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/1691.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/1691.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/1691.jpg"}, "name": "\u8303\u51b0\u51b0", "id": "1050059"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1274274\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/39703.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/39703.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/39703.jpg"}, "name": "\u90ed\u6d9b", "id": "1274274"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1324043\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/58870.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/58870.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/58870.jpg"}, "name": "\u5927\u9e4f", "id": "1324043"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1275044\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/28615.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/28615.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/28615.jpg"}, "name": "\u5f20\u5609\u8bd1", "id": "1275044"}], "current_season": null, "original_title": "\u6211\u4e0d\u662f\u6f58\u91d1\u83b2", "summary": "\u4e00\u4e2a\u666e\u901a\u7684\u519c\u6751\u5987\u5973\u674e\u96ea\u83b2\uff08\u8303\u51b0\u51b0 \u9970\uff09\uff0c\u4e3a\u4e86\u7ea0\u6b63\u4e00\u53e5\u8bdd\uff0c\u4e0e\u4e0a\u4e0a\u4e0b\u4e0b\u3001\u65b9\u65b9\u9762\u9762\u6253\u4e86\u5341\u5e74\u4ea4\u9053\u3002\u6253\u4ea4\u9053\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5979\u6ca1\u60f3\u5230\u4e00\u4ef6\u4e8b\u53d8\u6210\u4e86\u53e6\u4e00\u4ef6\u4e8b\uff0c\u63a5\u7740\u53d8\u6210\u4e86\u7b2c\u4e09\u4ef6\u4e8b\u3002\u5341\u5e74\u8fc7\u53bb\uff0c\u5979\u6ca1\u6709\u628a\u8fd9\u53e5\u8bdd\u7ea0\u6b63\u8fc7\u6765\uff0c\u4f46\u5979\u9971\u5c1d\u4e86\u4e16\u95f4\u7684\u4eba\u60c5\u51b7\u6696\uff0c\u609f\u660e\u767d\u4e86\u53e6\u5916\u4e00\u4e2a\u9053\u7406\u3002\u674e\u96ea\u83b2\u8981\u7ea0\u6b63\u7684\u8fd9\u53e5\u8bdd\u662f\u5979\u524d\u592b\u8bf4\u7684\u3002\u5979\u524d\u592b\u8bf4\uff1a\u4f60\u662f\u674e\u96ea\u83b2\u5417\uff1f\u6211\u548b\u89c9\u5f97\u4f60\u662f\u6f58\u91d1\u83b2\u5462\uff1f\u674e\u96ea\u83b2\u8981\u544a\u8bc9\u5927\u5bb6\u7684\u662f\uff1a\u6211\u4e0d\u662f\u6f58\u91d1\u83b2\u3002\u00a9\u8c46\u74e3", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1274255\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/45667.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/45667.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/45667.jpg"}, "name": "\u51af\u5c0f\u521a", "id": "1274255"}], "comments_count": 21264, "ratings_count": 38988, "aka": ["\u6211\u4e0d\u662f\u6f58\u91d1\u83b2", "\u6211\u662f\u674e\u96ea\u83b2", "\u6211\u53eb\u674e\u96ea\u83b2", "I Am Not Madame Bovary"]};