<template>
  <v-app style="background: #056839">
    <v-main>
      <v-container class="fill-height justify-center">
        <v-card elevation="1" height="1100" width="900">
          <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="8" lg="6">
              <v-img class="mt-15 mb-5" src="img/logo.png" contain height="150">
              </v-img>
              <!-- {{ form }} -->
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    required
                    label="ชื่อ"
                    name="Name"
                    class="rounded-1"
                    outlined
                    :rules="nameRules"
                    v-model="form.firstname"
                  >
                  </v-text-field>
                  <v-text-field
                    required
                    label="นามสกุล"
                    name="Surname"
                    class="rounded-1"
                    outlined
                    :rules="surnameRules"
                    v-model="form.lastname"
                  >
                  </v-text-field>
                  <v-select
                    v-model="form.position_id"
                    item-text="position_name"
                    item-value="_id"
                    :items="position"
                    label="ตำแหน่ง"
                    outlined
                    required
                    :rules="positionRules"
                  ></v-select>
                  <v-select
                    v-model="form.department_id"
                    item-text="department_name"
                    item-value="_id"
                    :items="department"
                    label="หน่วยงานสังกัด"
                    outlined
                    :rules="departRules"
                    required
                  ></v-select>

                  <v-text-field
                    required
                    label="เบอร์โทรศัพท์"
                    name="Tel"
                    class="rounded-1"
                    outlined
                    :rules="telRules"
                    v-model="form.tel"
                  >
                  </v-text-field>
                  <v-text-field
                    required
                    label="โทรสาร"
                    name="Fax"
                    class="rounded-1"
                    outlined
                    :rules="faxRules"
                    v-model="form.fax"
                  >
                  </v-text-field>
                  <v-text-field
                    required
                    label="อีเมล"
                    name="Email"
                    type="email"
                    class="rounded-1"
                    outlined
                    :rules="emailRules"
                    v-model="form.email"
                  >
                  </v-text-field>
                  <!-- {{ rules.password }} -->
                  <v-text-field
                    v-model="form.pass"
                    :rules="passwordRules"
                    @keyup.enter="login"
                    label="รหัสผ่าน"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    class="rounded-1"
                    outlined
                  >
                  </v-text-field>
                  <v-btn
                    @click="register"
                    class="rounded-1"
                    color="#056839"
                    x-large
                    block
                  >
                    <div class="white--text font-weight-bold">ลงทะเบียน</div>
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row align="center" class="ml-15" dense>
            <v-col cols="12" sm="8" md="8" lg="6"
              ><v-btn
                class="rounded-1 float-left mt-5 font-weight-bold"
                color="error"
                href="login"
                >ย้อนกลับ</v-btn
              ></v-col
            >
            <v-progress-linear
              :active="loading"
              :indeterminate="loading"
              absolute
              bottom
              color="deep-purple accent-4"
            ></v-progress-linear>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
    <v-dialog v-model="registerDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Error </v-card-title>

        <v-card-text> This email is already taken </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="registerDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'empty',
  // middleware: 'middleware.auth',
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
  async asyncData() {
    let department = []
    let position = []
    try {
      department = await axios
        .get('/departments/getAllDepartments')
        .then((res) => res.data)
      position = await axios
        .get('/positions/getAllPositions')
        .then((res) => res.data)
    } catch (err) {
      console.log(err)
    }
    return { department, position }
  },
  data() {
    return {
      registerDialog: false,
      valid: true,
      department: [],
      position: [],
      loading: false,
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
      passwordRules: [(v) => !!v || 'โปรดระบุรหัสผ่าน'],
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
      const vali = this.$refs.form.validate()
      console.log(vali)
      if (vali) {
        this.createUser()
      }
    },
    async createUser() {
      try {
        console.log('start loading')
        this.loading = true
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
            console.log('start response')
            console.log("this is res: ",res)
            if (res.status == 201) {
              console.log('stop loading')
              this.loading = false
            } else if (res.data.message == "auth/email-already-in-use") {
              this.loading = false
              this.registerDialog = true
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
