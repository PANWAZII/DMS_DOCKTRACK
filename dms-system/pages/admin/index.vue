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

          <v-data-table :headers="headers" :items="allNewDoc" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.index + 1 }}</td>
                <td>{{ row.item.project_name }}</td>
                <td>{{ row.item.department_name }}</td>
                <td>{{ new Date(row.item.created_date).toLocaleString() }}</td>
                <td>
                  <v-btn
                    color="primary"
                    dark
                    @click="confirm(row.item._id, row.item.project_name)"
                  >
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
    <v-dialog v-model="confirmDialog" max-width="290">
      <v-card>
        <v-card-title class="text">รับเอกสารเข้าระบบ ? </v-card-title>
        <br />
        <!-- <v-card-text>สามารถเข้าใช้งานด้วยอีเมลแลรหัสผ่านได้ทันที</v-card-text> -->
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error" text @click="confirmDialog = false">
            ยกเลิก
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="acceptDoc(currentDocId, currentDocName)"
          >
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="completeDialog" max-width="290">
      <v-card>
        <v-card-title class="text">รับเข้าระบบเรียบร้อย</v-card-title>
        <!-- <br /> -->
        <v-card-text>{{ currentDocName }} เข้าระบบแล้ว</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="completeDialog = false">
            ปิด
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay :value="loadingDialog"></v-overlay>
    <div class="text-center">
      <v-dialog v-model="loadingDialog" hide-overlay persistent width="300">
        <v-card color="#056839" dark>
          <v-card-text>
            loading
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-admin-auth',
  layout: 'admin',
  // async asyncData({ store }) {
  //   let allNewDoc = []
  //   try {
  //     allNewDoc = await store.dispatch('api/getAllNewDoc')
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   return { allNewDoc }
  // },
  async fetch() {
    this.allNewDoc = await this.$store.dispatch('api/getAllNewDoc')
    console.log(this.allNewDoc)
  },
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
      currentDocId: '',
      currentDocName: '',
      confirmDialog: false,
      completeDialog: false,
      loadingDialog: false,
    }
  },
  methods: {
    confirm(docId, docName) {
      this.confirmDialog = true
      this.currentDocId = docId
      this.currentDocName = docName
    },
    async acceptDoc(docId) {
      this.confirmDialog = false
      this.loadingDialog = true
      console.log(docId)
      await this.$store
        .dispatch('api/acceptDoc', {
          id: docId,
        })
        .then((res) => {
          if (res.status == 200) {
            this.loadingDialog = false
            this.completeDialog = true
          }
        })
        .catch((error) => {
          console.log(error)
        })
      await this.$nuxt.refresh()
    },
  },
}
</script>
