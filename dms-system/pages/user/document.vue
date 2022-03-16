<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="headers">
        <h2>การจัดหาระบบคอมพิวเตอร์ภาครัฐ</h2>
      </div>
      <div class="d-flex justify-end">
        <v-btn
          color="primary"
          class="ma-2 pa-4 rounded-pill"
          @click.stop="createform = true"
          ><v-icon class="mr-1">mdi-plus-circle</v-icon
          >อัปโหลดแบบคำขอใหม่</v-btn
        >
      </div>
      <v-dialog v-model="createform" max-width="300" max-height="300">
        <v-card>
          <v-card-title class="text-h6"> กรุณาเลือก </v-card-title>
          <v-divider class="mb-3"></v-divider>

          <div class="text-center">
            <v-spacer></v-spacer><v-spacer></v-spacer>
            <v-btn
              class="ma-2 pa-3 rounded"
              color="success"
              to="./doc-store/lessthanfivem"
              width="200"
            >
              มูลค่าไม่เกิน 5 ล้านบาท </v-btn
            ><br />
            <v-btn
              class="ma-2 pa-3 rounded"
              color="warning"
              to="./doc-store/morethanfivem"
              width="200"
              >มูลค่าเกิน 5 ล้านบาท
            </v-btn>
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text
              color="error"
              @click="createform = false"
              class="font-weight-medium mt-3"
            >
              ยกเลิก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card>
        <v-card-title class="font-weight-bold">
          เอกสารทั้งหมด
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-col>

    <v-spacer></v-spacer> <v-spacer></v-spacer>

    <v-spacer></v-spacer> <v-spacer></v-spacer>
  </v-row>
</template>
<script>
export default {
  middleware: 'middleware-user-auth',
  layout: 'user',
  data() {
    return {
      createform: false,
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
      ],
    }
  },
}
</script>

<style>
.headers {
  margin-top: 30px;
  text-align: center;
}
.headers h2 {
  font-size: 30px;
}
้.headers h2 span {
  font-size: 15px;
  color: aqua;
}
.nameform {
  font-size: 18px;
}
</style>
