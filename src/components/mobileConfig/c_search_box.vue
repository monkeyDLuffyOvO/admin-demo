<template>
    <div class="mobile-config">
        <Form ref="formInline">
            <div  v-for="(item,key) in rCom" :key="key">
                <component :is="item.components.name" :configObj="configObj" ref="childData" :configNme="item.configNme" :key="key" :index="activeIndex" :num="item.num"></component>
            </div>
            <rightBtn :activeIndex="activeIndex" :configObj="configObj"></rightBtn>
        </Form>
    </div>
</template>

<script>
    import toolCom from '@/components/mobileConfigRight/index.js'
    import rightBtn from '@/components/rightBtn/index.vue';
    import { mapMutations } from 'vuex'
    export default {
        name: 'c_search_box',
        componentsName: 'search_box',
        cname: '搜索',
        props: {
            activeIndex: {
                type: null
            },
            num: {
                type: null
            },
            index: {
                type: null
            }
        },
        components: {
            ...toolCom,
            rightBtn
        },
        data () {
            return {
                hotIndex: 1,
                configObj: {}, // 配置对象
                rCom: [
                    {
                        components: toolCom.c_set_up,
                        configNme: 'setUp'
                    }
                ],// 当前页面组件
                textBnt: [
                    {
                        components: toolCom.c_tab,
                        configNme: 'tabConfig'
                    },
                    {
                        components: toolCom.c_input_item,
                        configNme: 'titleConfig'
                    },
                    {
                        components: toolCom.c_input_item,
                        configNme: 'linkConfig'
                    },
                    {
                        components: toolCom.c_hot_word,
                        configNme: 'hotWords'
                    }
                ],
                mapBnt: [
                    {
                        components: toolCom.c_tab,
                        configNme: 'tabConfig'
                    },
                    {
                        components: toolCom.c_hot_word,
                        configNme: 'hotWords'
                    }
                ],
                searchBtn: [
                    {
                        components: toolCom.c_tab,
                        configNme: 'tabConfig'
                    },
                    {
                        components: toolCom.c_radio,
                        configNme: 'radioConfig'
                    },
                    {
                        components: toolCom.c_upload_img,
                        configNme: 'logoConfig'
                    },
                    {
                        components: toolCom.c_hot_word,
                        configNme: 'hotWords'
                    }

                ],
                mapRadio:[
                    {
                        components: toolCom.c_tab,
                        configNme: 'tabConfig'
                    },
                    {
                        components: toolCom.c_radio,
                        configNme: 'radioConfig'
                    },
                    {
                        components: toolCom.c_hot_word,
                        configNme: 'hotWords'
                    }
                ],
                textRadio:[
                    {
                        components: toolCom.c_tab,
                        configNme: 'tabConfig'
                    },
                    {
                        components: toolCom.c_radio,
                        configNme: 'radioConfig'
                    },
                    {
                        components: toolCom.c_input_item,
                        configNme: 'titleConfig'
                    },
                    {
                        components: toolCom.c_input_item,
                        configNme: 'linkConfig'
                    },
                    {
                        components: toolCom.c_hot_word,
                        configNme: 'hotWords'
                    }
                ],
                setUp: 0,
                type: 0,
                typeRadio:0
            }
        },
        watch: {
            num (nVal) {
                // debugger;
                let value = JSON.parse(JSON.stringify(this.$store.state.admin.mobildConfig.defaultArray[nVal]))
                this.configObj = value;
            },
            configObj: {
                handler (nVal, oVal) {
                    this.$store.commit('admin/mobildConfig/UPDATEARR', { num: this.num, val: nVal });
                },
                deep: true
            },
            'configObj.setUp.tabVal': {
                handler (nVal, oVal) {
                    this.setUp = nVal;
                    var arr = [this.rCom[0]]
                    if (nVal == 0) {
                        if(this.type === 0){
                            this.rCom = arr.concat(this.textBnt)
                        }else if(this.type === 1){
                            this.rCom = arr.concat(this.mapBnt)
                        }else {
                            if(this.typeRadio === 0){
                                this.rCom = arr.concat(this.textRadio)
                            }else if(this.typeRadio === 1){
                                this.rCom = arr.concat(this.mapRadio)
                            }else {
                                this.rCom = arr.concat(this.searchBtn)
                            }
                        }
                    } else {
                        let tempArr = [
                            {
                                components: toolCom.c_bg_color,
                                configNme: 'bgColor'
                            },
                            {
                                components: toolCom.c_bg_color,
                                configNme: 'textColor'
                            },
                            {
                                components: toolCom.c_txt_tab,
                                configNme: 'textStyle'
                            },
                            {
                                components: toolCom.c_txt_tab,
                                configNme: 'boxStyle'
                            },
                            {
                                components: toolCom.c_txt_tab,
                                configNme: 'txtStyle'
                            },
                            {
                                components: toolCom.c_txt_tab,
                                configNme: 'styleList'
                            },
                            {
                                components: toolCom.c_slider,
                                configNme: 'prConfig'
                            },
                            {
                                components: toolCom.c_slider,
                                configNme: 'mbConfig'
                            }
                        ]
                        this.rCom = arr.concat(tempArr)
                    }
                },
                deep: true
            },
            'configObj.tabConfig.tabVal': {
                handler (nVal, oVal) {
                    this.type = nVal;
                    var arr = [this.rCom[0]];
                    if(this.setUp === 0){
                        if (nVal === 0) {
                            this.rCom = arr.concat(this.textBnt)
                        } else if(nVal === 1){
                            this.rCom = arr.concat(this.mapBnt)
                        }else {
                            if(this.typeRadio == 0){
                                this.rCom = arr.concat(this.textRadio)
                            }else if(this.typeRadio == 1){
                                this.rCom = arr.concat(this.mapRadio)
                            }else {
                                this.rCom = arr.concat(this.searchBtn)
                            }
                        }
                    }
                },
                deep: true
            },
            'configObj.radioConfig.tabVal':{
                handler (nVal, oVal) {
                    this.typeRadio = nVal;
                    var arr = [this.rCom[0]];
                    if(this.setUp === 0 && this.type === 2){
                        if (nVal === 0) {
                            this.rCom = arr.concat(this.textRadio)
                        } else if(nVal === 1){
                            this.rCom = arr.concat(this.mapRadio)
                        }else {
                            this.rCom = arr.concat(this.searchBtn)
                        }
                    }
                },
                deep: true
            }
        },
        mounted () {
            this.$nextTick(() => {
                let value = JSON.parse(JSON.stringify(this.$store.state.admin.mobildConfig.defaultArray[this.num]))
                this.configObj = value;
            })
        },
        methods: {
        }
    }
</script>

<style scoped lang="stylus">
    .title-tips
        padding-bottom 10px
        font-size 14px
        color #333
        span
            margin-right 14px
            color #999
</style>
