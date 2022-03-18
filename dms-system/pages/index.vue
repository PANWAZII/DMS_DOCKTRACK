<template>
  <v-container fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4" md="6">
        <v-card class="mx-auto" max-width="700" height="470">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                สรุปโครงการ
              </v-list-item-title>
              <v-list-item-subtitle>ประจำปีงบประมาณ 2565</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="90" color="info"
              ><v-icon color="#ffff" size="50"
                >mdi-file-document-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h3" cols="6">50</v-col>
              <v-col class="text-h6 text-right" cols="6">โครงการ</v-col>
            </v-row>
          </v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-desktop-classic</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Hardware</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >15&nbsp; &nbsp; &nbsp; &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-application-parentheses</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Software</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >20&nbsp; &nbsp; &nbsp; &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-access-point-network</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ระบบเครือข่าย</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >10&nbsp; &nbsp; &nbsp; &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-webcam</v-icon>
              </v-list-item-icon>
              <v-list-item-title>กล้องวงจรปิด</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >5&nbsp; &nbsp; &nbsp; &nbsp;โครงการ</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="6">
        <v-card class="mx-auto" max-width="700" height="470">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                สรุปงบประมาณ
              </v-list-item-title>
              <v-list-item-subtitle>ประจำปีงบประมาณ 2565</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50"
                >mdi-cash-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-h5" cols="6"> 1,300,000 </v-col>
              <v-col class="text-h6 text-right" cols="6">บาท</v-col>
            </v-row>
          </v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-title>เงินงบประมาณ</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >900,000&nbsp; &nbsp; &nbsp; &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>เงินบำรุง</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >100,000&nbsp; &nbsp; &nbsp; &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>เงินบริจาค</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >170,000&nbsp; &nbsp; &nbsp; &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title>เงินมูลนิธิ</v-list-item-title>
              <v-list-item-subtitle class="text-right"
                >130,000&nbsp; &nbsp; &nbsp; &nbsp;บาท</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <!-- <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                จำนวนโครงการทั้งสิ้น
              </div>
              <v-list-item-title class="text-h3 mb-3"> 15 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >โครงการที่ส่งเข้าระบบประจำเดือน</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="info"
              ><v-icon color="#ffff" size="50"
                >mdi-file-document-multiple</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                โครงการได้รับการอนุมัติทั้งสิ้น
              </div>
              <v-list-item-title class="text-h3 mb-3"> 5 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >ส่งคืนไปยังหน่วยงานแล้ว</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50">mdi-check-underline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                รอเข้าที่ประชุมพิจารณา
              </div>
              <v-list-item-title class="text-h3 mb-3"> 1 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                โครงการรอการพิจารณา</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="warning"
              ><v-icon color="#ffff" size="50">mdi-clock-edit-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row> -->
    <!-- <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                กรมการแพทย์ลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 7 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                รอการลงนามโดยกรมการแพทย์</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="success"
              ><v-icon color="#ffff" size="50">mdi-account-edit</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                กระทรวงสาธารณสุขลงนาม
              </div>
              <v-list-item-title class="text-h3 mb-3"> 2 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold">
                รอกระทรวงสาธารณสุข ลงนาม</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="#156623"
              ><v-icon color="#ffff" size="50">mdi-draw-pen</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="500"
          max-height="180"
          outlined
          elevation="1"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4" style="font-weight: bold">
                มีข้อแก้ไข
              </div>
              <v-list-item-title class="text-h3 mb-3"> 0 </v-list-item-title>
              <v-list-item-subtitle style="font-weight: bold"
                >ที่ประชุมมีความเห็นแก้ไขเพิ่มเติม</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="90" color="error"
              ><v-icon color="#ffff" size="50"
                >mdi-alert</v-icon
              ></v-list-item-avatar
            >
          </v-list-item>
        </v-card>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            รายการโครงการทั้งหมด
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="doc_info"
            sort-by="created_date"
            :search="search"
            :items-per-page="5"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            ดาวน์โหลดแบบรายงานฯ และเอกสารที่เกี่ยวข้อง
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-text>
                <v-btn text
                  >แบบรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐที่มีมูลค่าไม่เกิน 5
                  ล้านบาท
                </v-btn>
              </v-list-item-text>
            </v-list>
            <v-list>
              <v-list-item-text>
                <v-btn text
                  >แบบรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐที่มีมูลค่าไม่เกิน 5
                  ล้านบาท
                </v-btn>
              </v-list-item-text>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'login',
  //  async fetch() {
  //   const user_uid = await this.$cookies.get('uid_token')
  //   // const user_uid ="LCrJh2BQO7hcwzbd8CcAUcWRRPu1"
  //   this.approvedDoc = await this.$store.dispatch('api/getApprovedDoc',{uid:user_uid})
  // },
  // async asyncData({ store }) {
  //   let waitingDoc = []
  //   let waitingDocCount = ''
  //   let dmsDoc = []
  //   let dmsDocCount = ''
  //   let mophDoc = []
  //   let mophDocCount = ''
  //   let approvedDoc = []
  //   let approvedDocCount = ''
  //   let rejectedDoc = []
  //   let rejectedDocCount = ''
  //   let allDocs = []
  //   let allDocCount = ''
  //   try {
  //     // const user_uid = await $cookies.get('uid_token')
  //     const user_uid = store.getters.uid
  //     waitingDoc = await store.dispatch('api/getWaitingDoc', {
  //       params: { uid: user_uid },
  //     })
  //     dmsDoc = await store.dispatch('api/getDmsDoc', {
  //       params: { uid: user_uid },
  //     })
  //     mophDoc = await store.dispatch('api/getMophDoc', {
  //       params: { uid: user_uid },
  //     })
  //     approvedDoc = await store.dispatch('api/getApprovedDoc', {
  //       params: { uid: user_uid },
  //     })
  //     rejectedDoc = await store.dispatch('api/getRejectedDoc', {
  //       params: { uid: user_uid },
  //     })
  //     allDocs = await store.dispatch('api/getAllDocByUid', {
  //       params: { uid: user_uid },
  //     })
  //     waitingDocCount = waitingDoc.length
  //     dmsDocCount = dmsDoc.length
  //     mophDocCount = mophDoc.length
  //     approvedDocCount = approvedDoc.length
  //     rejectedDocCount = rejectedDoc.length
  //     allDocCount = allDocs.length
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   return {
  //     waitingDoc,
  //     waitingDocCount,
  //     dmsDoc,
  //     dmsDocCount,
  //     mophDoc,
  //     mophDocCount,
  //     approvedDoc,
  //     approvedDocCount,
  //     rejectedDoc,
  //     rejectedDocCount,
  //     allDocs,
  //     allDocCount,
  //   }
  // },
  data() {
    return {
      waitingDoc: [],
      waitingDocCount: '',
      dmsDoc: [],
      dmsDocCount: '',
      mophDoc: [],
      mophDocCount: '',
      approvedDoc: [],
      approvedDocCount: '',
      rejectedDoc: [],
      rejectedDocCount: '',
      allDoc: [],
      dashBoardRoute: {
        waiting: 'doc-list/waitingList',
        dms: 'doc-list/dmsList',
        moph: 'doc-list/mophList',
        approved: 'doc-list/approvedList',
        rejected: 'doc-list/rejectedList',
      },
      search: '',
      headers: [
        {
          text: 'ชื่อโครงการ',
          value: 'project_name',
          align: 'start',
          sortable: false,
        },

        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
        { text: 'สถานะ', value: 'approval_status' },
      ],
      doc_info: [
        {
          project_name: 'โครงการระบบลงนามอิเล็กทรอนิกส์',
          created_date: '18 / 3 / 2565',
          approval_status: 'รอที่ประชุมพิจารณา',
        },
        {
          project_name: 'TeleMedicine',
          created_date: '15 / 3 / 2565',
          approval_status: 'รอที่ประชุมพิจารณา',
        },
        {
          project_name: '5G Ambulance',
          created_date: '12 / 3 / 2565',
          approval_status: 'รอที่ประชุมพิจารณา',
        },
      ],
    }
  },
  computed: {},
}
</script>
