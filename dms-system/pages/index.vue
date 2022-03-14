<template>
  <v-container fluid>
    <v-row align="center" justify="center" dense>
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

          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.waiting">
              ดูทั้งหมด
            </v-btn>
          </v-card-actions> -->
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
          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.dms"> ดูทั้งหมด </v-btn>
          </v-card-actions> -->
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
          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.moph"> ดูทั้งหมด </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" dense>
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
          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.dms"> ดูทั้งหมด </v-btn>
          </v-card-actions> -->
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
          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.moph"> ดูทั้งหมด </v-btn>
          </v-card-actions> -->
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
          <!-- <v-divider class="mx-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn text small :to="this.dashBoardRoute.rejected">
              ดูทั้งหมด
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>

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
          <!-- <v-simple-table fixed-header elevation="2">
            <template v-slot: default>
              <thead>
                <tr>
                  <th>ชื่อโครงการ</th>
                  <th>วันที่ยื่นคำร้อง</th>
                  <th>สถานะ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="allDoc in allDocs" v-bind:key="allDoc.project_name">
                  <td>{{ allDoc.project_name }}</td>
                  <td>{{ allDoc.created_date }}</td>
                  <td>{{ allDoc.approval_status }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->
          <v-data-table
            :headers="headers"
            sort-by="created_date"
            :search="search"
            :items-per-page="5"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12"> </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
export default {
  layout: 'firstpage',
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
        { text: 'หน่วยงาน', value: 'department_name' },
        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
        { text: 'สถานะ', value: 'approval_status' },
      ],
    }
  },
  computed: {},
}
</script>
