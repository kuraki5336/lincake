<template>
  <div>
    <div class="contact">
      <div class="inner-contact">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-price="tableRowClassprice"
        >
          <el-table-column prop="type" label="餅乾種類" width="80px">
          </el-table-column>
          <el-table-column prop="price" label="單價" width="80px">
          </el-table-column>
          <el-table-column prop="remark" label="說明"> </el-table-column>
        </el-table>
      </div>

      <div class="inner-muguet">
        * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quam a ipsum veniam rerum vitae dolor suscipit doloremque, voluptatem
        cupiditate similique nihil illo error praesentium sed illum veritatis
        est optio!
      </div>
      <div class="inner-muguet">
        * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quam a ipsum veniam rerum vitae dolor suscipit doloremque, voluptatem
        cupiditate similique nihil illo error praesentium sed illum veritatis
        est optio!
      </div>
      <div class="inner-muguet">
        * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quam a ipsum veniam rerum vitae dolor suscipit doloremque, voluptatem
        cupiditate similique nihil illo error praesentium sed illum veritatis
        est optio!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          type: "餅乾",
          price: "100",
          remark: "1包10個餅乾",
        },
        {
          type: "雪Q餅",
          price: "200",
          remark: "1包20個餅乾",
        },
        {
          type: "船餅",
          price: "100",
          remark: "1包12個餅乾",
        },
      ],
    };
  },
  methods: {
    tableRowClassprice({ rowIndex }) {
      console.log(rowIndex);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style lang="scss">
.inner-muguet {
  color: #0d0057;
  margin-top: 15px;
  text-align: center;
  font-weight: normal;
  margin: 30px 0 50px;
}

.inner-contact {
  max-width: 550px;
  margin: auto;
}
</style>
