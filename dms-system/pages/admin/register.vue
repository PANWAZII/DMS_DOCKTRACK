<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <!-- <v-col cols="12">
            <v-img
              :src="require('../../assets/logo.png')"
              class="my-3"
              contain
              height="150"
            />
          </v-col> -->
          <v-col class="mb-4">
            <p class="topic">ลงทะเบียนผู้ใช้งานใหม่</p>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="8">
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      required
                      label="ชื่อ"
                      name="Name"
                      class="rounded-1"
                      :rules="nameRules"
                      v-model="form.firstname"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      required
                      label="นามสกุล"
                      name="Surname"
                      class="rounded-1"
                      :rules="surnameRules"
                      v-model="form.lastname"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="form.position_id"
                      item-text="position_name"
                      item-value="_id"
                      :items="position"
                      label="ตำแหน่ง"
                      required
                      :rules="positionRules"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      required
                      label="อีเมล"
                      name="Email"
                      type="email"
                      class="rounded-1"
                      :rules="emailRules"
                      v-model="form.email"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="form.pass"
                      :rules="passwordRules"
                      @keyup.enter="login"
                      label="รหัสผ่าน"
                      name="password"
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      class="rounded-1"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="form.department_id"
                      item-text="department_name"
                      item-value="_id"
                      :items="department"
                      label="หน่วยงานสังกัด"
                      :rules="departRules"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      required
                      label="เบอร์โทรศัพท์"
                      name="Tel"
                      class="rounded-1"
                      :rules="telRules"
                      v-model="form.tel"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      required
                      label="โทรสาร"
                      name="Fax"
                      class="rounded-1"
                      :rules="faxRules"
                      v-model="form.fax"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-btn
                  @click="confirmDialog = true"
                  class="rounded-1 mt-5"
                  color="#056839"
                  x-large
                  block
                >
                  <div class="white--text font-weight-bold">ลงทะเบียน</div>
                </v-btn>
              </v-form>
              <br />
            </template>
          </v-col>
        </v-row>

        <!-- <v-row align="center" class="ml-15" dense>
          <v-col cols="12" sm="8" md="8" lg="6"
            ><v-btn
              class="rounded-1 float-left mt-5 font-weight-bold"
              color="error"
              href="login"
              >ย้อนกลับ</v-btn
            ></v-col
          >
        </v-row> -->
      </v-container>
    </v-main>
    <v-dialog v-model="errorDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> ข้อผิดพลาด </v-card-title
        ><v-divider></v-divider><br />

        <v-card-text>อีเมลนี้มีในระบบแล้ว </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error darken-1" text @click="errorDialog = false">
            ปิด
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="290">
      <v-card>
        <v-card-title class="text"
          >คุณต้องการลงทะเบียนผู้ใช้งานใหม่ ?
        </v-card-title>
        <br />

        <!-- <v-card-text>สามารถเข้าใช้งานด้วยอีเมลแลรหัสผ่านได้ทันที</v-card-text> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="register"> ตกลง </v-btn>
          <v-btn color="error" text @click="confirmDialog = false">
            ยกเลิก
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="finishDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> ลงทะเบียนสำเร็จ </v-card-title>
        <v-divider></v-divider>

        <!-- <v-card-text>สามารถเข้าใช้งานด้วยอีเมลแลรหัสผ่านได้ทันที</v-card-text> -->

        <v-card-actions class="justify-center">
          <v-btn color="error" text @click="finishDialog = false"> ปิด </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- loading dialog -->
    <v-overlay :value="loadingDialog"></v-overlay>
    <div class="text-center">
      <v-dialog v-model="loadingDialog" hide-overlay persistent width="300">
        <v-card color="#056839" dark>
          <v-card-text>
            กำลังลงทะเบียน
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'admin',
  middleware: 'middleware-admin-auth',
  head() {
    return {
      title: 'User Register',
    }
  },
  // fetchOnServer: true,
  // async fetch() {
  //   this.isDataReady = false
  //   this.department = await this.getDept()
  //   this.isDataReady = true
  //   // this.position = await this.getPosition()
  // },
  // async mounted() {
  //   this.department = await this.getDept()
  //   // this.position = await this.getPosition()
  // },
  async asyncData({ store }) {
    let department = []
    let position = []
    try {
      department = await store.dispatch('api/getAllDepartments')
      position = await store.dispatch('api/getAllPositions')
    } catch (err) {
      console.log(err)
    }
    return { department, position }
  },
  data() {
    return {
      errorDialog: false,
      confirmDialog: false,
      finishDialog: false,
      valid: true,
      department: [],
      position: [],
      loadingDialog: false,
      faxRules: [(v) => !!v || 'โปรดระบุโทรสาร'],
      telRules: [(v) => !!v || 'โปรดระบุเบอร์โทรศัพท์'],
      positionRules: [(v) => !!v || 'โปรดระบุตำแหน่ง'],
      departRules: [(v) => !!v || 'โปรดระบุหน่วยงานสังกัด'],
      surnameRules: [(v) => !!v || 'โปรดระบุนามสกุล'],
      nameRules: [(v) => !!v || 'โปรดระบุชื่อของคุณ'],
      emailRules: [
        (v) => !!v || 'โปรดระบุอีเมล',
        (v) => /.+@.+/.test(v) || 'โปรดระบุอีเมลที่ถูกต้อง',
      ],
      passwordRules: [
        (v) => !!v || 'โปรดระบุรหัสผ่าน',
        (v) => /\d/.test(v) || 'โปรดระบุรหัสผ่านเป็นตัวเลข',
        (v) => /.{6,}/.test(v) || 'รหัสผ่านอย่างน้อย 6 ตัว',
      ],

      // rules:{
      //   notEmpty: (errorMessage) => ((v) => !!v || (errorMessage || 'กรุณากรอกข้อมูล')),
      //   emailValid: (v) => /.+@.+/.testv || 'โปรดระบุอีเมลที่ถูกต้อง',
      // },
      // passwordRules: [
      //   (v) => {
      //     return !!v || 'Message'
      //   },
      // ],
      form: {
        firstname: '',
        lastname: '',
        position_id: '',
        department_id: '',
        tel: '',
        fax: '',
        email: '',
        pass: '',
      },
    }
  },
  methods: {
    register() {
      const valid = this.$refs.form.validate()
      console.log(valid)
      if (valid) {
        this.createUser()
      }
    },
    // goToLogin() {
    //   this.$router.push('/login')
    // },
    async createUser() {
      try {
        console.log('start loading')
        this.confirmDialog = false
        this.loadingDialog = true
        console.log('start posting')
        await axios
          .post('/users/createNewUser', {
            email: this.form.email,
            password: this.form.pass,
            first_name: this.form.firstname,
            last_name: this.form.lastname,
            tel: this.form.tel,
            fax: this.form.fax,
            position_id: this.form.position_id,
            department_id: this.form.department_id,
          })
          .then((res) => {
            if (res.status == 201) {
              this.loadingDialog = false
              this.finishDialog = true
            } else if (res.data.message == 'auth/email-already-in-use') {
              this.loadingDialog = false
              this.errorDialog = true
            }
          })
        // this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style>
.topic {
  font-size: 40px;
  font-weight: bold;
}
</style>
