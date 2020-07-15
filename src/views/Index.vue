<template>
    <div  id="index">
        <!--轮播图-->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!--滚动分类-->
        <cube-slide ref="slide" :data="lists" @change="changePage">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
                <ul>
                    <li v-for="(item,index1) in list" :key="index1"></li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                lists: []
            }
        },
        methods: {
            changePage(current) {
                console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            }
        },
        async created(){
            try {
                // 获取轮播图数据
                const items = await this.$http.get('/api/banner');
                this.items = items.data;
            } catch (e) {
                console.log(e);
            }
        }
    }

</script>

<style lang="stylus" scoped>
    #index a .banner
        display block
        width 100%
        height 175px
</style>