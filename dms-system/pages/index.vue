<template>
  <v-container fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="auto" outlined elevation="1">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                รอเข้าที่ประชุมพิจารณา
              </div>
              <v-list-item-title class="text-h3 mb-3"> 3 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >คำขอจัดซื้อครุภัณฑ์รอการพิจาณา</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="warning"
              ><v-icon color="#ffff" size="50"
                >mdi-clock-edit-outline</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small> ดูทั้งหมด </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="auto" outlined elevation="1">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                รอกรมการแพทย์ลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 7 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >ที่ประชุมมีมติอนุมัติ
                รอการลงนามโดยกรมการแพทย์</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50">mdi-account-edit</v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small> ดูทั้งหมด </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="auto" outlined elevation="1">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                กระทรวงสาธารณสุขลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 0 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                รอการลงนามโดยกระทรวงสาธารณสุข</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="#156623"
              ><v-icon color="#ffff" size="50">mdi-draw-pen</v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small> ดูทั้งหมด </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="auto" outlined elevation="1">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                ส่งคืนแล้ว
              </div>
              <v-list-item-title class="text-h3 mb-3"> 15 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >คำขอจัดซื้อครุภัณฑ์ได้รับการอนุมัติ
                ลงนามและส่งคืนแล้ว</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50"
                >mdi-check-underline</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small> ดูทั้งหมด </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="auto" outlined elevation="1">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                มีข้อแก้ไข
              </div>
              <v-list-item-title class="text-h3 mb-3"> 1 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >คำขอจัดซื้อครุภัณฑ์ต้องแก้ไขแล้วจัดส่งใหม่</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="error"
              ><v-icon color="#ffff" size="50"
                >mdi-alert</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small> ดูทั้งหมด </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            คำขอล่าสุด
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
          approve_status: 'อนุมัติ',
        },
        {
          order: '2',
          title: 'โครงการระบบสแกนลายนิ้วมือเพื่อความปลอดภัย',
          created_date: '17 / 01 / 2565',
          approve_status: 'รอการตรวจสอบ',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          created_date: '14 / 12 / 2564',
          approve_status: 'อนุมัติ',
        },
      ],
    }
  },
}
</script>
