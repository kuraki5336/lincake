<template>
  <div>
    <div class="products-details">
      <div class="products-details__inner-container">
        <div class="products-item">
          <h2>{{ state.getNowitem.name }}</h2>
          <div class="details">
            <div class="detail_left">
              <img :src="state.nowas + '/' + state.nowitem + '.jpg'" />
            </div>
            <div class="detail_right">
              <div class="detail_right__content">
                <p>
                  {{ state.getNowitem.description }}
                </p>
                <div class="detail_right__composition">
                  <van-row>
                    <van-col span="6">材料</van-col>
                    <van-col span="18">@糖 @小麥 @蛋素</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="6">售價</van-col>
                    <van-col span="18">100元</van-col>
                  </van-row>
                </div>

                <div class="detail_right__nutrition">
                  <van-row>
                    <van-col span="6">熱量</van-col>
                    <van-col span="6">600kul</van-col>
                    <van-col span="6">脂肪</van-col>
                    <van-col span="6">377emb</van-col>
                  </van-row>
                  <van-row>
                    <van-col span="6">碳水化合物</van-col>
                    <van-col span="6">147mm</van-col>
                    <van-col span="6">糖</van-col>
                    <van-col span="6">28g</van-col>
                  </van-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, inject } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    const mapStore = inject(`state`);
    const state = mapStore;

    onBeforeRouteLeave(() => {
      state.nowas = "";
      state.nowitem = "";
    });

    onMounted(() => {});

    return { state };
  },
  data: () => ({}),
  mounted() {
    console.log(this.$route.query);
    this.state.nowas = this.$route.query.nowas;
    this.state.nowitem = this.$route.query.nowitem;
  },
  methods: {},
};
</script>

<style lang="scss">
.products-details {
  max-width: 980px;
  margin: auto;
}
.products-item {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  border-bottom: solid 3px #0d0057;
  border-top: solid 3px #0d0057;
  margin-top: 80px;
  padding: 30px 20px;
}

.details {
  box-sizing: border-box;
  display: flex;
  .detail_left {
    flex: 1;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  .detail_right {
    flex: 1;

    &__content {
      padding: 0 30px;

      p {
        margin-bottom: 1.2em;
        line-height: 1.9;
      }
    }

    &__composition {
      margin-top: 20px;
    }

    &__nutrition {
      margin-top: 20px;
    }
  }

  .van-col {
    line-height: 2rem;
    text-align: center;
    margin-bottom: 1px;
  }

  .van-col:nth-child(even) {
    background-color: #e7e7e7;
  }

  .van-col:nth-child(odd) {
    color: #fff;
    background-color: #8e8e8e;
  }
}
</style>
