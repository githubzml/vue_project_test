<template>
  <div class="ganttPage">
    <div class="ganttPage_bottom">
      <div class="ganttPage_bottom-leftContent">
        <div @click="handleAdd">添加</div>
        <el-table border fit stripe :data="tableData">
          <el-table-column prop="" label="No">
            <template slot-scope="scope">
              <i
                class="el-icon-circle-plus-outline"
                v-if="scope.$index == tableData.length - 1"
              ></i>
              <i v-else>
                {{ scope.$index + 1 }}
              </i>
            </template>
          </el-table-column>
          <el-table-column prop="sysName" label="资源类别">
            <template slot-scope="scope">
              <el-select
                size="mini"
                v-show="scope.row.show"
                v-model="scope.row.resourceType"
              >
                <el-option
                  v-for="(typeItem, index) in resourceTypeList"
                  :key="index"
                  :label="typeItem.name"
                  :value="typeItem.id"
                >
                </el-option>
              </el-select>
              <span v-show="!scope.row.show">{{ scope.row.resourceType }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="resourceName" label="资源名称">
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-show="scope.row.show"
                v-model="scope.row.resourceName"
              ></el-input>
              <span v-show="!scope.row.show">{{ scope.row.resourceName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="estimatedCost" label="估算成本">
            <template slot-scope="scope">
              <!-- <el-input size="mini" v-show="scope.row.show" v-model="scope.row.estimatedCost"></el-input> -->
              <span>{{
                scope.row.status ? scope.row.estimatedCost : "——"
              }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="分配状况">
            <template slot-scope="scope">
              <!-- <el-input size="mini" v-show="scope.row.show" v-model="scope.row.status"></el-input> -->
              <span>{{
                scope.row.resourceType
                  ? scope.row.status + "次"
                  : scope.row.status + "工作日"
              }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ganttEchart",
  data() {
    return {
      tableData: [],
      resourceTypeList: [
        {
          name: "工时",
          id: 0,
        },
        {
          name: "材料",
          id: 1,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 添加点击按钮
    handleAdd() {
      this.tableData.push({
        resourceType: 0,
        resourceName: "",
        estimatedCost: "",
        status: 0,
        companyCost: 0,
        show: true,
      });
    },
  },
};
</script>

<style  scope>
</style>