<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="font-weight-bold">
            รายการแบบรายงานการจัดหาระบบคอมพิวเตอร์ภาครัฐ
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
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-user-auth',
  layout: 'user',
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
      //     waitingDoc: [],
      //     waitingDocCount: '',
      //     dmsDoc: [],
      //     dmsDocCount: '',
      //     mophDoc: [],
      //     mophDocCount: '',
      //     approvedDoc: [],
      //     approvedDocCount: '',
      //     rejectedDoc: [],
      //     rejectedDocCount: '',
      //     allDoc: [],
      //     dashBoardRoute: {
      //       waiting: 'doc-list/waitingList',
      //       dms: 'doc-list/dmsList',
      //       moph: 'doc-list/mophList',
      //       approved: 'doc-list/approvedList',
      //       rejected: 'doc-list/rejectedList',
      //     },
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
          created_date: '2 / 3 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '2',
          title: 'โครงการระบบสแกนลายนิ้วมือเพื่อความปลอดภัย',
          created_date: '5 / 3 / 2565',
          approve_status: 'กรมการแพทย์ลงนาม',
        },
        {
          order: '3',
          title: 'โครงการ TeleMedicine',
          created_date: '7 / 3 / 2565',
          approve_status: 'รอที่ประชุมพิจารณา',
        },
        {
          order: '4',
          title: 'โครงการ TeleMedicine',
          created_date: '11 / 3 / 2565',
          approve_status: 'ส่งคืนแล้ว',
        },
      ],
    }
  },
  computed: {},
}
</script>
