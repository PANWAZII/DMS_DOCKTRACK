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

                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-checkbox color="info" value=""></v-checkbox>
                  <div>18/4/65</div>
                </td>
                <td>
                  <v-btn class="ma-2" text icon color="blue lighten-2">
                    <v-icon>mdi-content-save</v-icon>
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

        { text: 'รอที่ประชุมพิจารณา', value: '' },
        { text: 'ส่งกรมฯ ลงนาม', value: '' },
        { text: 'รับคืน', value: '' },
        { text: 'ส่งกระทรวงฯ ลงนาม', value: '' },
        { text: 'รับคืน', value: '' },
        { text: 'ส่งคืนแล้ว', value: '' },
        { text: 'บันทึก', value: '' },
      ],
      doc_info: [
        {
          order: '1',
          title: 'โครงการระบบลงนาม',
          dept: 'สำนักดิจิทัลการแพทย์',

          approve_status: 'รอที่ประชุมพิจารณา',
          report_file: 'แบบรายงาน',
          price: 'ใบเสนอราคา',
          diagram: 'ผังเครือข่าย',
          modified_date: '22/3/65',
        },
        {
          order: '2',
          title: 'โครงการสแกนลายนิ้วมือ',
          dept: 'สำนักงานเลขานุการกรม',

          approve_status: 'กรมการแพทย์ลงนาม',
          modified_date: '22/3/65',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          dept: 'สำนักดิจิทัลการแพทย์',

          approve_status: 'รอที่ประชุมพิจารณา',
          modified_date: '22/3/65',
        },
        {
          order: '4',
          title: 'โครงการ TeleMedicine',
          dept: 'กองยุทธศาสตร์และแผนงาน',

          approve_status: 'ส่งคืนแล้ว',
          modified_date: '22/3/65',
        },
      ],
    }
  },
}
</script>
