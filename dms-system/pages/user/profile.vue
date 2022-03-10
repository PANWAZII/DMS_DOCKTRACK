<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-avatar color="teal" rounded size="80">
              <v-icon dark size="55"> mdi-account-circle </v-icon>
            </v-avatar>
            <span class="text-h5">&nbsp;&nbsp; ข้อมูลส่วนตัว</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-select
                    v-model="userInfo.department_id"
                    :items="department"
                    item-text="department_name"
                    item-value="_id"
                    :rules="[(v) => !!v || 'โปรดระบุหน่วยงานสังกัด']"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="userInfo.first_name"
                    label="ชื่อ"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="userInfo.last_name"
                    label="นามสกุล"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="userInfo.position_id"
                    :items="position"
                    item-text="position_name"
                    item-value="_id"
                    :rules="[(v) => !!v || 'โปรดระบุตำแหน่ง']"
                    required
                    disabled
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="userInfo.tel"
                    label="โทรศัพท์"
                    required
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="userInfo.fax"
                    label="โทรสาร"
                    required
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="userInfo.email"
                    label="อีเมล"
                    required
                    disabled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small
              >*โปรดระมัดระวังในการแก้ไขข้อมูล
              เนื่องจากส่งผลต่อข้อมูลของท่านบนฐานข้อมูลองค์กร</small
            ><v-col cols="12" class="text-right">
              <v-btn color="teal" min-width="150" dark> Update Profile </v-btn>
            </v-col>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
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
