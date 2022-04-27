<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            รายการผู้ใช้งาน
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table :headers="headers" :items="users" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.first_name }}</td>
                <td>{{ row.item.last_name }}</td>

                <td>{{ getDepartmentName(row.item.department_id) }}</td>
                <td>
                  <v-btn
                    class="ma-2"
                    text
                    icon
                    color="info"
                    @click="getUserDetail(row.item._id)"
                    large
                  >
                    <v-icon>mdi-account-search</v-icon>
                  </v-btn>
                </td>

                <!-- <td>
                  <v-btn color="info"> Test </v-btn>
                  <v-btn color="info"> Test </v-btn>
                </td> -->
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="userInfoDialog" max-width="970">
      <v-card>
        <v-card-title class="text"
          ><v-avatar color="teal" rounded size="80">
            <v-icon dark size="55"> mdi-account-circle </v-icon>
          </v-avatar>
          <span class="text-h5 ml-5">ข้อมูลผู้ใช้งาน</span></v-card-title
        >
        <!-- <br /> -->
        <v-card-text>
          <v-container>
            <v-divider></v-divider>
            <v-row class="mt-3">
              <v-col cols="12" sm="6" md="4">
                <div style="font-size: 15px">ชื่อ</div>
                <h4>{{ userDetail.first_name }}</h4>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div style="font-size: 15px">นามสกุล</div>
                <h4>{{ userDetail.last_name }}</h4>
              </v-col>
              <v-col cols="12" sm="4">
                <div style="font-size: 15px">อีเมล</div>
                <h4>{{ userDetail.email }}</h4>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><div style="font-size: 15px">หน่วยงาน</div>
                <h4>
                  {{ getDepartmentName(userDetail.department_id) }}
                </h4>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                ><div style="font-size: 15px">ตำแหน่ง</div>
                <h4>{{ getPositionName(userDetail.position_id) }}</h4>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <div style="font-size: 15px">โทรศัพท์</div>
                <h4>{{ userDetail.tel }}</h4>
              </v-col>
              <v-col cols="12" md="4">
                <div style="font-size: 15px">โทรสาร</div>
                <h4>{{ userDetail.fax }}</h4>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <div style="font-size: 15px">วันที่ลงทะเบียน</div>

                <h4>
                  {{ convertDate(userDetail.created_date) }}
                </h4>
              </v-col>
              <v-col cols="12" md="4">
                <div style="font-size: 15px">วันที่ปรับปรุงข้อมูลล่าสุด</div>
                <h4>{{ convertDate(userDetail.modified_date) }}</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" @click="clearUserInfoData()">
            ปิด
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-admin-auth',
  layout: 'admin',
  head() {
    return {
      title: 'Manage Users',
    }
  },
  async fetch() {
    this.users = await this.$store.dispatch('api/getAllUsers')
    this.departments = await this.$store.dispatch('api/getAllDepartments')
    this.positions = await this.$store.dispatch('api/getAllPositions')
  },
  data() {
    return {
      search: '',
      users: [],
      userDetail: [],
      userInfoDialog: false,
      departments: [],
      positions: [],
      headers: [
        {
          text: 'ชื่อ',
          value: 'first_name',
          align: 'start',
          sortable: false,
          // value: 'row',
        },

        { text: 'นามสกุล', value: 'last_name' },
        { text: 'หน่วยงาน' },
        { text: 'รายละเอียด' },

        // { text: 'การทำงาน', value: '' },
      ],
    }
  },
  methods: {
    async getUserDetail(id) {
      this.userDetail = await this.$store.dispatch('api/getUserById', {
        uid: id,
      })
      console.log('this is id userDetail', this.userDetail)
      this.userInfoDialog = true
    },
    clearUserInfoData() {
      this.userInfoDialog = false
      this.userDetail = []
    },
    getPositionName(id) {
      for (let index = 0; index < this.positions.length; index++) {
        if (id === this.positions[index]._id) {
          return this.positions[index].position_name
        }
      }
    },
    getDepartmentName(id) {
      for (let index = 0; index < this.departments.length; index++) {
        if (id === this.departments[index]._id) {
          return this.departments[index].department_name
        }
      }
    },
    convertDate(date) {
      let formattedDate = new Date(date).toLocaleString('th-TH')
      return formattedDate
    },
  },
}
</script>
