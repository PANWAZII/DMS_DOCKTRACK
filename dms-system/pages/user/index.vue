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
          <v-data-table :headers="headers" :items="documents" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.project_num }}</td>
                <td>{{ row.item.project_name }}</td>
                <td>{{ row.item.approval_status_th }}</td>
                <td>{{ row.item.modified_date }}</td>
                <td>
                  <v-btn class="ma-2" text icon color="info" large>
                    <v-icon>mdi-file-search</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
          <!-- <v-data-table
            :headers="headers"
            :items="documents"
            :search="search"
          ></v-data-table> -->
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
          sortable: true,
          value: 'project_num',
        },
        { text: 'โครงการ', value: 'project_name' },

        { text: 'สถานะ', value: 'approval_status_th' },
        { text: 'วันที่ปรับปรุงล่าสุด', value: 'modified_date' },
        { text: 'รายละเอียด' },
      ],
    }
  },
  computed: {},
}
</script>
