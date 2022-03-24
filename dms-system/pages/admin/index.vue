<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        {{ allNewDoc }}
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

          <v-data-table :headers="headers" :items="allNewDoc" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.index+1 }}</td>
                <td>{{ row.item.project_name }}</td>
                <td>{{ row.item.department_name }}</td>
                <td>{{ row.item.created_date }}</td>

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
  async asyncData({ store }) {
    let allNewDoc = []
    try {
      allNewDoc = await store.dispatch('api/getAllNewDoc')
    } catch (err) {
      console.log(err)
    }
    return { allNewDoc }
  },
  // async fetch() {
  //   this.allNewDoc = await this.$store.dispatch('api/getAllNewDoc')
  //   console.log(this.allNewDoc);
  // },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'ที่',
          align: 'start',
          sortable: false,
          value: 'row',
        },
        { text: 'โครงการ', value: 'project_name' },
        { text: 'หน่วยงาน', value: 'dept' },
        { text: 'วันที่ยื่นคำร้อง', value: 'created_date' },

        { text: 'การทำงาน', value: '' },
      ],
      allNewDoc: [],
    }
  },
  methods: {
    async acceptDoc(docId) {
      await this.$store.dispatch('api/setDocApprovalStatus', {
        id: docId,
        approval_status: 'waiting',
      })
    },
  },
}
</script>
