<template>
  <v-container fluid>
    <v-row align="center" justify="center" dense> </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            แบบรายงานการจัดหาฯ&nbsp; &nbsp;ที่กำลังรอกรมฯ ลงนาม
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
            :items="doc_info"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-auth',
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
        { text: 'คำร้อง', value: 'title' },
        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
        { text: 'สถานะ', value: 'approve_status' },
      ],
      doc_info: [
        {
          order: '1',
          title: 'โครงการระบบลงนามอิเล็กทรอนิกส์',
          created_date: '21 / 02 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '2',
          title: 'โครงการระบบสแกนลายนิ้วมือเพื่อความปลอดภัย',
          created_date: '17 / 01 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          created_date: '14 / 12 / 2564',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '4',
          title: 'โครงการ TeleMedicine',
          created_date: '14 / 12 / 2564',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '5',
          title: 'โครงการ TeleMedicine',
          created_date: '14 / 12 / 2564',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '6',
          title: 'โครงการ TeleMedicine',
          created_date: '14 / 12 / 2564',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
      ],
    }
  },
}
</script>
