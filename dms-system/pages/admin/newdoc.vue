<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            แบบรายงานการจัดหา ฯ ยังไม่ได้รับเข้าระบบ
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
            show-expand
          >
            <template #expanded-item="headers">
              <td :colspan="headers.lenght">
                <v-btn dark color="info">สำหรับแสดงไฟล์ 1</v-btn>
              </td>
              <td :colspan="headers.lenght">
                <v-btn dark color="info">สำหรับแสดงไฟล์ 2</v-btn>
              </td>
              <td><v-btn dark color="success">รับเข้าระบบ</v-btn></td>
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
        { text: 'โครงการ', value: 'title' },
        { text: 'หน่วยงาน', value: 'dept' },
        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
        { text: 'สถานะ', value: 'approve_status' },
      ],
      doc_info: [
        {
          order: '1',
          title: 'โครงการระบบลงนามอิเล็กทรอนิกส์',
          dept: 'สำนักดิจิทัลการแพทย์',
          created_date: '2 / 3 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '2',
          title: 'โครงการระบบสแกนลายนิ้วมือเพื่อความปลอดภัย',
          dept: 'สำนักงานเลขานุการกรม',
          created_date: '5 / 3 / 2565',
          approve_status: 'กรมการแพทย์ลงนาม',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          dept: 'สำนักดิจิทัลการแพทย์',
          created_date: '7 / 3 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '4',
          title: 'โครงการ TeleMedicine',
          dept: 'กองยุทธศาสตร์และแผนงาน',
          created_date: '11 / 3 / 2565',
          approve_status: 'ส่งคืนแล้ว',
        },
      ],
    }
  },
}
</script>
