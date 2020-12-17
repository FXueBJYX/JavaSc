// pages/index/index.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async add(){
    try {
      const res = await db.collection('student').add({
        data: {
          name: 'zhaoliu',
          age: 20,
          hobby: ['篮球123', '足球', '排球'],
          obj: {
            className: 'wechat',
            content: 'cloud'
          }
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },

  async delete(){
    try{
      const res = await db.collection('student').doc('846bf2595fcc65c600063e2c1ff2b2d1').remove()
      console.log(res);
    }catch(err){
      console.error(err);
    }
    
  },

  async update(){
    try{
      const res = await db.collection('student').doc('cc9f30fe5fcc64160006cfcc2f7a711f').update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        name: 'zhangsan'
      }
    })
    console.log(res);
    }catch(err){
      console.error(err);
    }
    
  },
  async select(){
    try{
      const res =  await db.collection('student').where({
        name:"zhaoliu"
    }).get()
    console.log(res);
    }catch(err){
      console.error(err);
    }
    
  },
  sum(){
    wx.cloud.callFunction({
      name: 'sum1',
      data: {
        x: 11,
        y: 6
      }
    }).then(res=>{
      console.log(res)
    })
  },

  async getOpenid(){
    const openId = await wx.cloud.callFunction({
      name:"openId",
      
    })
    console.log(openId);
  },

  async betchdel(){
    const betchdel = await wx.cloud.callFunction({
      name:"betchDel"
    })
    console.log(betchdel);
  },


  
  async uploadFile(){

    // 1、选择图片：选择相册图片、拍照
 // 2、把图片上传云存储
// 3、保存fileID到云数据库


    let chooseImage;
    try{
      chooseImage = await wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
      })
      console.log(chooseImage);
    }catch(error){
      console.error(error);
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})