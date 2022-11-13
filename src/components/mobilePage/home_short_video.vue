<template>
    <div class="shortVideo" :style="{paddingLeft:prConfig+'px',paddingRight:prConfig+'px',marginTop:mTop+'px',background:bgColor}">
        <div class="nav acea-row row-between-wrapper">
            <div class="title">短视频</div>
            <div class="more">更多<span class="iconfont iconjinru"></span></div>
        </div>
        <div class="list on acea-row row-middle" v-if="itemStyle">
            <div class="item" v-for="(item,index) in videoList" :key="index">
                <div class="pictrue">
                    <img v-if="item.image" :src="item.image">
                    <div v-else class="empty-box"><span class="iconfont-diy icontupian"></span></div>
                    <div class="like">
                        <span class="iconfont icona-shoucang"></span>{{item.like_num}}
                    </div>
                </div>
            </div>
        </div>
        <div class="list" v-else>
            <div class="item acea-row row-between" v-for="(item,index) in videoList" :key="index">
                <div class="pictrue">
                    <img v-if="item.image" :src="item.image">
                    <div v-else class="empty-box"><span class="iconfont-diy icontupian"></span></div>
                    <div class="like">
                        <span class="iconfont icona-shoucang"></span>{{item.like_num}}
                    </div>
                </div>
                <div class="text">
                    <div class="conter">
                        <div class="header acea-row row-middle">
                            <img v-if="item.type_image" :src="item.type_image">
                            <div v-else class="empty-icon"></div>
                            <div class="name line1">{{item.type_name}}</div>
                        </div>
                        <div class="info line2">{{item.desc}}</div>
                    </div>
                    <div class="goodsList acea-row row-middle">
                        <div class="pictrue" v-for="(j,jindex) in item.product_info" :key="jindex" v-if="jindex<3">
                            <img v-if="j.image" :src="j.image">
                            <div v-else class="empty-icon"></div>
                            <div class="money" v-if="jindex<2">¥{{j.price}}</div>
                            <div v-else class="num">+{{item.product_num-2}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'home_short_video',
        cname: '短视频',
        configName: 'c_short_video',
        icon: 'iconduanshipin',
        type:1,// 0 基础组件 1 营销组件 2工具组件
        defaultName:'shortVideo', // 外面匹配名称
        props: {
            index: {
                type: null
            },
            num: {
                type: null
            }
        },
        computed: {
            ...mapState('admin/mobildConfig', ['defaultArray'])
        },
        watch: {
            pageData: {
                handler (nVal, oVal) {
                    this.setConfig(nVal)
                },
                deep: true
            },
            num: {
                handler (nVal, oVal) {
                    let data = this.$store.state.admin.mobildConfig.defaultArray[nVal]
                    this.setConfig(data)
                },
                deep: true
            },
            'defaultArray': {
                handler (nVal, oVal) {
                    let data = this.$store.state.admin.mobildConfig.defaultArray[this.num]
                    this.setConfig(data);
                },
                deep: true
            }
        },
        data () {
            return {
                // 默认初始化数据禁止修改
                defaultConfig: {
                    name: 'shortVideo',
                    timestamp: this.num,
                    setUp: {
                        tabVal: 0
                    },
                    numConfig: {
                        val: 0,
                        title:'显示个数'
                    },
                    videoList: [],
                    itemStyle: {
                        title: '视频样式',
                        name: 'itemStyle',
                        type: 0,
                        list: [
                            {
                                val: '列表模式',
                                icon: 'iconshipinyangshi1'
                            },
                            {
                                val: '图片模式',
                                icon: 'iconshipinyangshi2'
                            }
                        ]
                    },
                    bgColor: {
                        title: '背景颜色',
                        name: 'bgColor',
                        default: [{
                            item: '#fff'
                        }],
                        color: [
                            {
                                item: '#fff'
                            }
                        ]
                    },
                    prConfig: {
                        title: '背景边距',
                        val: 15,
                        min: 0
                    },
                    mbCongfig: {
                        title: '页面间距',
                        val: 0,
                        min: 0
                    }
                },
                bgColor: '',
                mTop: '',
                prConfig:0,
                pageData: {},
                itemStyle: 0,
                videoList: []
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.pageData = this.$store.state.admin.mobildConfig.defaultArray[this.num]
                this.setConfig(this.pageData);
            })
        },
        methods: {
            setConfig (data) {
                if(!data) return
                if(data.mbCongfig){
                    this.bgColor = data.bgColor.color[0].item;
                    this.mTop = data.mbCongfig.val;
                    this.prConfig = data.prConfig.val;
                    this.itemStyle = data.itemStyle.type;
                    let videoList = data.videoList || [];
                    if(videoList.length){
                        this.videoList = videoList
                    }else {
                        this.videoList = [
                            {
                                image:'',
                                like_num:120,
                                type_image:'',
                                type_name:'众邦科技',
                                desc:'观看视频crmeb更多好礼等你来抢，每天都有哟～ 更多好礼请联…'
                            },
                            {
                                image:'',
                                like_num:120,
                                type_image:'',
                                type_name:'众邦科技',
                                desc:'观看视频crmeb更多好礼等你来抢，每天都有哟～ 更多好礼请联…'
                            }
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .shortVideo{
        .nav{
            width: 100%;
            height: 45px;
            .title{
                font-weight: 600;
                color: #333333;
                font-size: 15px;
            }
            .more{
                font-weight: 400;
                color: #999999;
                font-size: 12px;
                .iconfont{
                    font-size: 12px;
                }
            }
        }
        .list{
            padding-bottom: 1px;
            &.on{
                flex-wrap: nowrap;
                overflow: hidden;
                padding-bottom: 15px;
                .item{
                    margin-right: 12px;
                    margin-bottom: 0;
                    .pictrue{
                        margin-right: 0;
                    }
                }
            }
            .item{
                margin-bottom: 20px;
                .pictrue{
                    width: 113px;
                    height: 150px;
                    border-radius: 4px;
                    position: relative;
                    margin-right: 15px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 4px;
                    }
                    .like{
                        position: absolute;
                        bottom: 4px;
                        left: 7px;
                        font-size: 10px;
                        font-weight: 400;
                        color: #FFFFFF;
                        .iconfont{
                            font-size: 12px;
                            margin-right: 3px;
                        }
                    }
                }
                .text{
                    flex: 1;
                    /*width: 219px;*/
                    .goodsList{
                        margin-top: 17px;
                        overflow: hidden;
                        .pictrue{
                            width: 64px;
                            height: 64px;
                            border-radius: 3px;
                            position: relative;
                            margin-right: 13px;
                            &:nth-of-type(3n){
                                margin-right: 0;
                            }
                            .num{
                                position: absolute;
                                top:50%;
                                left:50%;
                                margin-left: -9px;
                                margin-top: -9px;
                                color: #fff;
                                font-size: 15px;
                                font-weight: 400;
                            }
                            img{
                                width: 100%;
                                height: 100%;
                                display: block;
                                border-radius: 3px;
                            }
                            .money{
                                position: absolute;
                                color: #fff;
                                font-size: 11px;
                                bottom: 3px;
                                left:50%;
                                margin-left: -20px;
                            }
                        }
                    }
                    .conter{
                        height: 67px;
                        .header{
                            .name{
                                flex: 1;
                                width: 150px;
                            }
                            .empty-icon{
                                width: 18px;
                                height: 18px;
                                border-radius: 50%;
                                background-color: #f3f5f7;
                                border: 1px solid #FFFFFF;
                                margin-right: 5px;
                            }
                            img{
                                width: 18px;
                                height: 18px;
                                border: 1px solid #FFFFFF;
                                display: block;
                                margin-right: 5px;
                                border-radius: 50%;
                            }
                            font-weight: 500;
                            color: #333333;
                            font-size: 14px;
                        }
                        .info{
                            font-weight: 400;
                            color: #666666;
                            font-size: 12px;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
