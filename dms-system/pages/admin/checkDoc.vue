<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            แบบรายงานการจัดหา ฯ รอการตรวจสอบ
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
                <td>{{ row.item.project_type }}</td>
                <td><v-btn text color="primary" dark> ไฟล์ </v-btn></td>
                <td><v-btn text color="primary" dark> ไฟล์ </v-btn></td>
                <td><v-btn text color="primary" dark> ไฟล์ </v-btn></td>
                <td>
                  <v-checkbox
                    row
                    label="ครบ"
                    color="success"
                    value=""
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    row
                    label="ไม่ครบ"
                    color="red"
                    value=""
                    hide-details
                  ></v-checkbox>
                </td>
                <td>
                  <v-checkbox
                    row
                    label="ผ่าน"
                    color="success"
                    value=""
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    row
                    label="ไม่ผ่าน"
                    color="red"
                    value=""
                    hide-details
                  ></v-checkbox>
                </td>
                <td>
                  <v-text-field label="ความคิดเห็น" required></v-text-field>
                </td>
                <td>
                  <v-btn color="info" dark> บันทึก </v-btn>
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
        { text: 'ประเภท', value: 'project_type' },

        { text: 'แบบรายงานฯ', value: 'report_file' },
        { text: 'ใบเสนอราคา', value: 'price' },
        { text: 'ผังเครือข่าย', value: 'diagram' },
        { text: 'ตรวจเอกสาร', value: '' },
        { text: 'ตรวจเนื้อหา', value: '' },
        { text: 'ความเห็น', value: '' },
        { text: 'บันทึก', value: '' },
      ],
      doc_info: [
        {
          order: '1',
          title: 'โครงการระบบลงนาม',
          project_type: 'Software',
        },
        {
          order: '2',
          title: 'โครงการสแกนลายนิ้วมือ',
          project_type: 'Hardware',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          project_type: 'Software',
        },
        {
          order: '4',
          title: 'โครงการ TeleMedicine',
          project_type: 'Network',
        },
      ],
    }
  },
}
</script>
