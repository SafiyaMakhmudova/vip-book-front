<template>
  <main class="flex py-10 px-12">
    <!-- 1-section -->
    <div class="w-[25%] bg-[#F8F8F8] py-5 px-9 rounded-md">
      <n-collapse arrow-placement="right">
        <n-collapse-item title="Price"  name="Price">
          <n-collapse>
            <div>
              <n-space vertical>
                <n-slider v-model:value="valuePrice" range :step="1" :max="1000000"/>
                <n-space>
                  <n-input-number v-model:value="valuePrice[0]" size="small" />
                  <n-input-number v-model:value="valuePrice[1]" size="small" />
                </n-space>
              </n-space>
            </div>
          </n-collapse>
        </n-collapse-item>
        <n-collapse-item title="Quantity" name="Quantity">
            <div>
              <n-space vertical>
                <n-slider v-model:value="valueTotal" range :step="1"/>
                <n-space>
                  <n-input-number v-model:value="valueTotal[0]" size="small" />
                  <n-input-number v-model:value="valueTotal[1]" size="small" />
                </n-space>
              </n-space>
            </div>
        </n-collapse-item>
      </n-collapse>
    </div>

    <!-- 2-section -->
    <div class="border-2 w-[75%]">World</div>
  </main>
</template>

<script setup>
import {
  NCollapse,
  NCollapseItem,
  NSlider,
  NSpace,
  NInputNumber,
} from "naive-ui";
import { ref } from "vue";

const valuePrice  = ref([5000,700000])
const valueTotal  = ref([4,100])

</script>

<style scoped></style>
