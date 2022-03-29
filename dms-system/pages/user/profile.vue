<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-avatar color="teal" rounded size="80">
              <v-icon dark size="55"> mdi-account-circle </v-icon>
            </v-avatar>
            <span class="text-h5 ml-5">ข้อมูลส่วนตัว</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-divider></v-divider>
              <v-row class="mt-3">
                <v-col cols="12" sm="6" md="4"
                  ><div style="font-size: 15px">หน่วยงาน</div>
                  <h4>สำนักดิจิทัลการแพทย์</h4>
                </v-col>

                <v-col cols="12" sm="6" md="4"
                  ><div style="font-size: 15px">ตำแหน่ง</div>
                  <h4>นักวิชาการคอมพิวเตอร์</h4>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <div style="font-size: 15px">ชื่อ</div>
                  <h4>{{ userInfo.first_name }}</h4>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <div style="font-size: 15px">นามสกุล</div>
                  <h4>{{ userInfo.last_name }}</h4>
                </v-col>
                <v-col cols="12" sm="4">
                  <div style="font-size: 15px">อีเมล</div>
                  <h4>{{ userInfo.email }}</h4>
                </v-col>

                <v-col cols="12" md="4">
                  <div style="font-size: 15px">โทรศัพท์</div>
                  <h4>{{ userInfo.tel }}</h4>
                </v-col>
                <v-col cols="12" md="4">
                  <div style="font-size: 15px">โทรสาร</div>
                  <h4>{{ userInfo.fax }}</h4>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        <h5 class="mt-3" style="color: red">
          * หากข้อมูลของท่านไม่ถูกต้อง โปรดิดต่อผู้ดูแลระบบ
        </h5>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'user',
  middleware: 'middleware-user-auth',
  name: 'profile',
  async fetch() {
    const user_uid = await this.$cookies.get('uid_token')
    this.userInfo = await this.$store.dispatch('api/getUserInfo', {
      params: { uid: user_uid },
    })
  },
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
      userInfo: [],
      position: [],
      department: [],
      valid: true,
      form: {
        user_firstname: '',
        user_lastname: '',
        position: '',
        department: '',
        user_position: '',
        user_department: '',
        user_tel: '',
        user_fax: '',
        user_email: '',
        dept: [
          'สำนักดิจิทัลการแพทย์',
          'กองยุทธศาสตร์และแผนงาน',
          'กองกฎหมายและจริยธรรม',
        ],
        position_choice: ['นักวิชาการคอมพิวเตอร์', 'นักวิเคราะห์นโยบายและแผน'],
      },
      // telRules: [
      //   (v) => !!v || 'โปรดระบุเบอร์โทรศัพท์',
      //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      // ],
      // faxRules: [
      //   (v) => !!v || 'โปรดระบุเบอร์โทรสาร',
      //   (v) => v.length <= 10 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      // ],
      // emailRules: [
      //   (v) => !!v || 'โปรดระบุอีเมลหัวหน้าส่วนราชการ',
      //   (v) => /.+@.+/.test(v) || 'อีเมลไม่ถูกต้องตามรูปแบบ',
      //   (v) => v.length <= 100 || 'จำนวนตัวอักษรเกินขนาดที่สามารถรับได้',
      // ],
    }
  },
  methods: {
    departmentConverter(department_id) {
      console.log('this is params', department_id)
      const dept = this.department.find((dept) => dept._id === department_id)
      const dept_name = dept.department_name
      console.log(dept_name)
      return dept_name
    },
    positionConverter(position_id) {
      const dept = this.position.find((dept) => dept._id === position_id)
      const position_name = dept.position_name
      console.log(position_name)
      return position_name
    },
  },
}
</script>
