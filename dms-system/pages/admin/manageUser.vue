<template>
  <v-container fluid
    ><v-row>
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
                <td>{{ row.item.email }}</td>
                <td>{{ row.item.first_name }}</td>
                <td>{{ row.item.last_name }}</td>

                <td>{{ getDepartmentName(row.item.department_id) }}</td>
                <td>{{ getPositionName(row.item.position_id) }}</td>
                <td>{{ row.item.tel }}</td>
                <td>{{ row.item.created_date }}</td>
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
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-admin-auth',
  layout: 'admin',
  async fetch() {
    this.users = await this.$store.dispatch('api/getAllUsers')
    this.departments = await this.$store.dispatch('api/getAllDepartments')
    this.positions = await this.$store.dispatch('api/getAllPositions')
  },
  data() {
    return {
      search: '',
      users: [],
      departments: [],
      positions: [],
      headers: [
        {
          text: 'ที่',
          align: 'start',
          sortable: false,
          value: 'row',
        },
        { text: 'ชื่อ', value: 'first_name' },
        { text: 'นามสกุล', value: 'last_name' },
        { text: 'หน่วยงาน' },
        { text: 'ตำแหน่ง' },
        { text: 'tel' },
        { text: 'วันที่ลงทะเบียน', value: 'created_date' },
        // { text: 'การทำงาน', value: '' },
      ],
    }
  },
  methods: {
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
  },
}
</script>
