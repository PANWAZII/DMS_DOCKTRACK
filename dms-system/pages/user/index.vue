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
            :items="documents"
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
  async fetch() {
    const uid = await this.$cookies.get('uid_token')
    this.documents = await this.$store.dispatch('api/getUserDocuments', {
      uid: uid,
    })
    console.log(this.documents)
  },
  data() {
    return {
      documents: [],
      search: '',
      headers: [
        {
          text: 'ที่',
          align: 'start',
          sortable: false,
          value: 'order',
        },
        { text: 'โครงการ', value: 'project_name' },

        { text: 'สถานะ', value: 'approval_status_th' },
        { text: 'วันที่ปรับปรุงล่าสุด', value: 'modified_date' },
      ],
    }
  },
  computed: {},
}
</script>
