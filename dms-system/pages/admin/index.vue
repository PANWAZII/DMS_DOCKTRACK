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

          <v-data-table :headers="headers" :items="doc_info" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.order }}</td>
                <td>{{ row.item.title }}</td>
                <td>{{ row.item.dept }}</td>
                <td>{{ row.item.created_date }}</td>
                <td><v-btn text color="primary" dark> ชื่อไฟล์ </v-btn></td>
                <td><v-btn text color="primary" dark> ชื่อไฟล์ </v-btn></td>
                <td><v-btn text color="primary" dark> ชื่อไฟล์ </v-btn></td>
                <td>
                  <v-btn color="primary" dark>
                    รับเข้าระบบ
                    <!-- <v-icon dark right> mdi-checkbox-marked-circle </v-icon> -->
                  </v-btn>
                </td>
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
        { text: 'โครงการ', value: 'title' },
        { text: 'หน่วยงาน', value: 'dept' },
        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
        { text: 'แบบรายงานฯ', value: 'report_file' },
        { text: 'ใบเสนอราคา', value: 'price' },
        { text: 'ผังเครือข่าย', value: 'diagram' },
        { text: 'การทำงาน', value: '' },
      ],
      doc_info: [
        {
          order: '1',
          title: 'โครงการระบบลงนาม',
          dept: 'สำนักดิจิทัลการแพทย์',
          created_date: '2 / 3 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
          report_file: 'แบบรายงาน',
          price: 'ใบเสนอราคา',
          diagram: 'ผังเครือข่าย',
        },
        {
          order: '2',
          title: 'โครงการสแกนลายนิ้วมือ',
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
