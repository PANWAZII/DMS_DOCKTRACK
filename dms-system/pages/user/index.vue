<template>
 <div>hi this is user page</div>
</template>
<script>
export default {
  middleware: 'middleware-user-auth',
  layout: 'default',
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
  // data() {
  //   return {
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
  //     search: '',
  //     headers: [
  //       {
  //         text: 'ชื่อโครงการ',
  //         value: 'project_name',
  //         align: 'start',
  //         sortable: false,
  //       },
  //       { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },
  //       { text: 'สถานะ', value: 'approval_status' },
  //     ],
  //   }
  // },
  computed: {},
}
</script>
