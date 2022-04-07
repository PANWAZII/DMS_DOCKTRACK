<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../../../assets/logo.png')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-4">
        <p class="topices">แบบรายงานการจัดหาฯ<br />ประภท ซอฟต์แวร์</p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="8">
        <template>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- <p class="topices">ก. ข้อมูลทั่วไป</p> -->
            <p class="topices">ชื่อโครงการ</p>

            <v-text-field
              v-model="form.project_name"
              :rules="projnRules"
              :counter="255"
              label="ชื่อโครงการ (ระบุทั้งภาษาไทยและภาษาอังกฤษ)"
              required
            ></v-text-field>

            <br />
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <p class="topices">ปีงบประมาณ</p>
                <v-select
                  v-model="form.budget_year"
                  :items="budget_year"
                  item-text="year"
                  item-value="year"
                  :rules="[(v) => !!v || 'โปรดระบุปีงบประมาณ']"
                  label="ระบุปีงบประมาณ"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <p class="subtop">แหล่งเงิน</p>
                <v-select
                  v-model="form.budget_resource"
                  :items="budget"
                  item-text="name"
                  item-value="value"
                  :rules="[(v) => !!v || 'โปรดระบุแหล่งเงิน']"
                  label="โปรดระบุแหล่งเงิน"
                  required
                >
                </v-select>
              </v-col>
            </v-row>

            <br />
            <p class="topices">งบประมาณ</p>
            <p class="subtop">งบประมาณรวมทั้งสิ้น</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.sum"
                  :rules="sumRules"
                  dense
                  label="จำนวนเงิน (บาท)"
                  required
                >
                </v-text-field>
              </v-col>
            </v-row>
            <br />

            <p class="topices">แนบไฟล์แบบรายงานการจัดหาฯ</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แบบรายงานการจัดหาฯ"></v-file-input>
              </v-col>
            </v-row>
            <br />

            <p class="topices">
              กรณีไม่ตรงเกณฑ์ราคากลางฯ โปรดแนบใบเสนอราคา 3 ใบ
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แนบใบเสนอราคา 1"></v-file-input>
                <v-file-input label="แนบใบเสนอราคา 2"></v-file-input>
                <v-file-input label="แนบใบเสนอราคา 3"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br />
            <p class="topices">โปรดแนบแบบบัญชีราคากลางและแผนพัฒนา software</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แบบบัญชีราคากลาง"></v-file-input>
                <v-file-input label="แผนพัฒนาซอฟต์แวร์"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br />

            <v-spacer></v-spacer>
            <br />

            <v-btn
              class="rounded-1"
              color="#056839"
              @click="submit"
              x-large
              block
            >
              <div class="white--text font-weight-bold">ส่งข้อมูล</div>
            </v-btn>
            <br />

            <v-btn
              class="rounded-1"
              color="error"
              x-large
              block
              @click.stop="warningdialog = true"
            >
              <div class="white--text font-weight-bold">ยกเลิก</div>
            </v-btn>
          </v-form>
          <br />
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center"> </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="warningdialog" max-width="300" max-height="300">
        <v-card>
          <v-card-title class="text-h5"> คำเตือน </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text
            >คำขอจัดซื้อครุภัณฑ์กำลังจะถูกยกเลิก ทำให้ข้อมูลไม่ถูกบันทึกในระบบ
            ท่านจะต้องกรอกใหม่อีกครั้ง</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              color="success"
              @click="warningdialog = false"
              class="font-weight-medium mt-3"
            >
              ยกเลิก
            </v-btn>
            <v-btn
              text
              color="error"
              to="/document"
              class="font-weight-medium mt-3"
            >
              ตกลง
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'middleware-user-auth',
  layout: 'user',
  name: 'lessthanfivem',
  async asyncData({ store }) {
    let budget_year = []
    let department = []
    try {
      department = await store.dispatch('api/getAllDepartments')
      budget_year = await store.dispatch('api/getBudgetYear')
    } catch (err) {
      console.log(err)
    }
    return { budget_year, department }
  },
  async fetch() {
    const user_uid = await this.$cookies.get('uid_token')
    const userInfo = await this.$store.dispatch('api/getUserInfo', {
      params: { uid: user_uid },
    })
    this.userDept = userInfo.department_id
  },
  data: () => ({
    warningdialog: false,
    budget: [
      { name: 'เงินงบประมาณ', value: 'normal_budget' },
      { name: 'เงินบำรุง', value: 'maintenance_budget' },
      { name: 'เงินบริจาค', value: 'donation_budget' },
      { name: 'เงินมูลนิธิ', value: 'foundation_budget' },
    ],

    valid: true,
    budget_year: [],
    department: [],
    userDept: [],
    form: {
      project_name: '',
      project_type: '',
      budget_year: '',
      department_name: '',

      baht_text: '',
      budget_resource: null,

      sum: '',
    },

    projnRules: [
      (v) => !!v || 'โปรดระบุชื่อโครงการ',
      (v) => v.length <= 255 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    budget_yearRules: [
      (v) => !!v || 'โปรดระบุปีงบประมาณ',
      (v) => /\d/.test(v) || 'โปรดระบุเป็นตัวเลขเท่านั้น',
      (v) => v.length <= 4 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
    ],
    sumRules: [
      (v) => !!v || 'โปรดระบุยอดงบประมาณรวม',
      (v) => /\d/.test(v) || 'โปรดระบุเป็นตัวเลขเท่านั้น',
    ],
  }),
  methods: {
    submit() {
      this.saveAct()
      // this.$refs.form.validate()
      // console.log(this.$refs.form.validate())
      // if (this.$refs.form.validate() == true) {
      //   this.testfunc()
      // }
    },
    // Create New product
    testfunc() {
      const mutiplied = this.Quant * this.Price
      if (mutiplied > 5000000) {
        alert('ราคารวมเกินห้าล้านบาท โปรดเลือกแบบฟอร์มชนิดอื่น')
      } else {
        this.saveAct()
      }
    },
    async saveAct() {
      try {
        // const user_id = await this.$cookies.get('uid_token')
        const user_id = this.$store.getters.uid
        for (let index = 0; index < this.department.length; index++) {
          if (this.userDept === this.department[index]._id) {
            this.form.department_name = this.department[index].department_name
          }
        }
        await this.$store.dispatch('api/lessThanCreatDoc', {
          uid: user_id,
          project_name: this.form.project_name,
          project_type: 'software',
          document_type: 'more',
          budget_year: this.form.budget_year,
          department_name: this.form.department_name,
          budget_resource: this.form.budget_resource,

          sum: this.form.sum,
        })

        alert('Add Completed')
      } catch (err) {
        console.log(err)
        alert('Add Fail')
      }
    },
  },
  computed: {
    sumresult() {
      const mutiplied = this.form.quantity * this.form.price_unit
      if (mutiplied > 5000000) {
        alert('ราคารวมเกินห้าล้านบาท โปรดเลือกแบบฟอร์มชนิดอื่น')
        const deny = 'ไม่สามารถใช้ฟอร์มนี้ได้'
        return deny
      } else {
        // this.sum = parseInt(mutiplied)
        this.form.sum = mutiplied
        return mutiplied
      }
    },

    // numtotext() {
    //   bahttext(20520)
    // },
  },
}
</script>
<style>
.radiobtn {
  justify-content: center;
}
h3 span {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

.smalltop {
  font-size: 21px;
  font-weight: bold;
}
.subtop {
  font-size: 23px;
  font-weight: bold;
}
.topices {
  font-size: 25px;
  font-weight: bold;
}
.card-ti {
  justify-content: center;
}
</style>
