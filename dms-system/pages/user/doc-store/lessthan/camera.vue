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
        <p class="topices">แบบรายงานการจัดหาฯ<br />ประภท กล้องวงจรปิด</p>
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
            <v-row>
              <v-col cols="12" md="6">
                <p class="subtop">งบประมาณรวมทั้งสิ้น</p>
                <v-text-field
                  v-model="form.sum"
                  :rules="sumRules"
                  dense
                  label="จำนวนเงิน (บาท)"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
            </v-row>
            <br />
            <p class="topices">แนบไฟล์แบบรายงานการจัดหาฯ</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input
                  show-size
                  v-model="report_file"
                  label="แบบรายงานการจัดหาฯ"
                ></v-file-input>
              </v-col>
            </v-row>
            <br />

            <p class="topices">
              กรณีไม่ตรงเกณฑ์ราคากลางฯ โปรดแนบใบเสนอราคา 3 ใบ
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input
                  show-size
                  v-model="quotation_file_1"
                  label="แนบใบเสนอราคา 1"
                ></v-file-input>
                <v-file-input
                  show-size
                  v-model="quotation_file_2"
                  label="แนบใบเสนอราคา 2"
                ></v-file-input>
                <v-file-input
                  show-size
                  v-model="quotation_file_3"
                  label="แนบใบเสนอราคา 3"
                ></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <!-- <label
              >File
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </label> -->
            <br />
            <!-- <p class="topices">
              กรณี Software โปรดแนบแบบบัญชีราคากลางและแผนพัฒนา software
            </p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input label="แบบบัญชีราคากลาง"></v-file-input>
                <v-file-input label="แผนพัฒนาซอฟต์แวร์"></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br /> -->
            <p class="topices">โปรดแนบผังเครือข่าย</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-file-input
                  show-size
                  v-model="blueprint_file"
                  label="ผังเครือข่าย"
                ></v-file-input>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <br />

            <v-btn
              class="rounded-1"
              color="#056839"
              @click="confirmDialog = true"
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

    <v-overlay :value="loading"></v-overlay>
    <div class="text-center">
      <v-dialog v-model="loading" hide-overlay persistent width="400">
        <v-card color="info" dark>
          <v-card-text>
            กำลังอัปโหลด :{{ loadingStatus }}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-row justify="center">
      <v-dialog v-model="confirmDialog" max-width="500" max-height="300">
        <v-card>
          <v-card-title class="text-h5"
            ><v-icon justify="left" class="mr-3" size="50"
              >mdi-information</v-icon
            >
            จัดส่งโครงการ
          </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text>
            โครงการของคุณกำลังถูกบันทึกเข้าระบบ
            คุณแน่ใจว่าต้องการส่งและได้ตรวจสอบถูกต้องครบถ้วนแล้ว
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="submit"
              class="font-weight-medium mt-3"
            >
              ตกลง
            </v-btn>
            <v-btn
              color="info"
              @click="confirmDialog = false"
              class="font-weight-medium mt-3 ml-3"
            >
              ยกเลิก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-dialog v-model="completeDialog" max-width="290">
      <v-card>
        <v-card-title class="text">ส่งโครงการเรียบร้อย</v-card-title>
        <!-- <br /> -->
        <v-card-text
          >คุณได้อัปโหลด {{ currentProject }} เข้าระบบเรียบร้อยแล้ว</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="submitComplete()">
            ปิด
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
    loading: false,
    loadingStatus: '',
    confirmDialog: false,
    completeDialog: false,
    warningdialog: false,
    currentProject: '',
    budget: [
      { name: 'เงินงบประมาณ', value: 'normal_budget' },
      { name: 'เงินบำรุง', value: 'maintenance_budget' },
      { name: 'เงินอื่น ๆ', value: 'donation_budget' },
    ],
    file: null,
    report_file: null,
    blueprint_file: null,
    quotation_file_1: null,
    quotation_file_2: null,
    quotation_file_3: null,

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
    submitComplete() {
      this.completeDialog = false
      this.$router.push('/user')
    },
    submit() {
      this.confirmDialog = false
      this.submitDocument()
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
        this.submitDocument()
      }
    },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0]
    // },
    async submitDocument() {
      try {
        // const user_id = await this.$cookies.get('uid_token')
        this.loading = true
        this.loadingStatus = 'แบบฟอร์ม'
        const user_id = this.$store.getters.uid
        for (let index = 0; index < this.department.length; index++) {
          if (this.userDept === this.department[index]._id) {
            this.form.department_name = this.department[index].department_name
          }
        }
        this.currentProject = this.form.project_name
        await this.$store
          .dispatch('api/lessThanCreatDoc', {
            uid: user_id,
            project_name: this.form.project_name,
            project_type: 'camera',
            document_type: 'less',
            budget_year: this.form.budget_year,
            department_name: this.form.department_name,
            budget_resource: this.form.budget_resource,
            detail_notstd: this.form.detail_notstd,
            quantity: this.form.quantity,
            unit: this.form.unit,
            price_unit: this.form.price_unit,
            sum: this.form.sum,
            method: this.form.method,
            destination: this.form.destination,
            cert: this.form.cert,
            list_old: this.form.list_old,
            locate_old: this.form.locate_old,
            year_old: this.form.year_old,
            obstacle: this.form.obstacle,
            purpose_of_use: this.form.purpose_of_use,
            compare: this.form.compare,
            major: this.form.major,
            quantity_major: this.form.quantity_major,
            specific_info: this.form.specific_info,
          })
          .then(async (res) => {
            this.loadingStatus = 'แบบรายงานการจัดหาฯ'
            console.log('this is res obj id ', res)
            let report = new FormData()
            let blueprint = new FormData()
            let quotation_1 = new FormData()
            let quotation_2 = new FormData()
            let quotation_3 = new FormData()
            report.append('report_file', this.report_file)
            blueprint.append('blueprint_file', this.blueprint_file)
            quotation_1.append('quotation_file_1', this.quotation_file_1)
            quotation_2.append('quotation_file_2', this.quotation_file_2)
            quotation_3.append('quotation_file_3', this.quotation_file_3)
            if (res._id) {
              report.append('id', res._id)
              blueprint.append('id', res._id)
              quotation_1.append('id', res._id)
              quotation_2.append('id', res._id)
              quotation_3.append('id', res._id)
              await this.$store
                .dispatch('api/uploadReport', report, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((res) => {
                  if (res.status == 200) {
                    this.loadingStatus = 'ใบเสนอราคา 1'
                  }
                })

              await this.$store
                .dispatch('api/uploadQuotation_1', quotation_1, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((res) => {
                  if (res.status == 200) {
                    this.loadingStatus = 'ใบเสนอราคา 2'
                  }
                })
              await this.$store
                .dispatch('api/uploadQuotation_2', quotation_2, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((res) => {
                  if (res.status == 200) {
                    this.loadingStatus = 'ใบเสนอราคา 3'
                  }
                })
              await this.$store
                .dispatch('api/uploadQuotation_3', quotation_3, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((res) => {
                  if (res.status == 200) {
                    this.loadingStatus = 'ผังเครือข่าย'
                  }
                })

              await this.$store.dispatch('api/uploadBlueprint', blueprint, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })

              this.loading = false
              this.completeDialog = true
            }
          })
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
