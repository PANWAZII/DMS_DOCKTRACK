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

          <v-data-table :headers="headers" :items="doc_info" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.order }}</td>
                <td>{{ row.item.name }}</td>
                <td>{{ row.item.dept }}</td>
                <td>{{ row.item.active }}</td>
                <td>{{ row.item.role }}</td>
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
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'ที่',
          align: 'start',
          sortable: false,
          value: 'order',
        },
        { text: 'ชื่อ นามสกุล', value: 'name' },
        { text: 'หน่วยงาน', value: 'dept' },
        { text: 'สถานะการใช้งาน', value: 'active' },
        { text: 'ระดับสิทธิ์', value: 'role' },
        { text: 'วันที่ลงทะเบียน', value: 'created_date' },
        // { text: 'การทำงาน', value: '' },
      ],
      doc_info: [
        {
          order: '1',
          name: 'จิรายุส ปรีชาเดช',
          dept: 'สำนักดิจิทัลการแพทย์',
          active: '1',
          role: 'admin',
          created_date: '9 / 3 / 2565',
        },
        {
          order: '2',
          name: 'พันวา เมืองสง',
          dept: 'สำนักดิจิทัลการแพทย์',
          active: '1',
          role: 'admin',
          created_date: '9 / 3 / 2565',
        },
        {
          order: '3',
          name: 'สมศรี สุดใจ',
          dept: 'สถาบันประสาท',
          active: '1',
          role: 'user',
          created_date: '15 / 3 / 2565',
        },
      ],
    }
  },
}
</script>
