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

          <v-data-table
            :headers="headers"
            :items="acceptedDoc"
            :search="search"
          >
            <template v-slot:item="row">
              <tr>
                <td class="text-center">{{ row.item.project_num }}</td>
                <td>{{ row.item.project_name }}</td>
                <td>{{ row.item.project_type }}</td>
                <td class="text-center">
                  <v-btn
                    text
                    color="secondary"
                    dark
                    @click="saveDownloadInfo(row.item._id)"
                  >
                    <v-icon large>mdi-download</v-icon>
                  </v-btn>
                </td>

                <td>
                  <v-checkbox label="ครบ" color="success"></v-checkbox>
                  <v-checkbox label="ไม่ครบ" color="red"></v-checkbox>
                </td>
                <td>
                  <v-checkbox
                    label="ไม่มีประเด็น"
                    color="success"
                    value=""
                  ></v-checkbox>
                  <v-checkbox
                    label="มีประเด็น"
                    color="red"
                    value=""
                  ></v-checkbox>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="downloadDialog" max-width="570px">
        <v-card>
          <v-card-title class="text"
            ><v-avatar color="teal" rounded size="50">
              <v-icon dark size="25"> mdi-file-download </v-icon>
            </v-avatar>
            <span class="text-h6 ml-5">ดาวน์โหลดไฟล์ที่เกี่ยวข้อง</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-divider></v-divider>
              <v-row justify="center" class="mt-5">
                <v-btn @click="download('report')"
                  ><v-icon>mdi-file-download</v-icon>แบบรายงานการจัดหาฯ</v-btn
                >
              </v-row>
              <v-row justify="center" class="mt-7">
                <v-btn @click="download('quotation_1')"
                  ><v-icon>mdi-file-download</v-icon>ใบเสนอราคา 1</v-btn
                >
              </v-row>
              <v-row justify="center" class="mt-7">
                <v-btn @click="download('quotation_2')"
                  ><v-icon>mdi-file-download</v-icon>ใบเสนอราคา 2</v-btn
                >
              </v-row>
              <v-row justify="center" class="mt-7">
                <v-btn @click="download('quotation_3')"
                  ><v-icon>mdi-file-download</v-icon>ใบเสนอราคา 3</v-btn
                >
              </v-row>
              <v-row justify="center" class="mt-7">
                <v-btn @click="download('blueprint')"
                  ><v-icon>mdi-file-download</v-icon>ผังเครือข่าย</v-btn
                >
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error " @click="clearDownloadInfo()"> ปิด </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="commentDialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">ความคิดเห็น</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea name="input-7-1" value=""></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="error " @click="commentDialog = false"> ปิด </v-btn>
            <v-btn color="success" @click="commentDialog = false">
              บันทึก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-admin-auth',
  layout: 'admin',
  head() {
    return {
      title: 'Check Document',
    }
  },
  async fetch() {
    this.acceptedDoc = await this.$store.dispatch('api/getAcceptedDoc')
  },
  data() {
    return {
      search: '',
      acceptedDoc: [],
      title: 'check document',
      commentDialog: false,
      downloadDialog: false,
      downloadInfo: { id: '' },
      headers: [
        {
          text: 'ที่',
          align: 'center',
          sortable: true,
          value: 'project_num',
        },
        { text: 'โครงการ', value: 'project_name', align: 'center' },
        { text: 'ประเภท', value: 'project_type', align: 'center' },

        { text: 'ดาวน์โหลดไฟล์ที่เกี่ยวข้อง', align: 'center' },

        { text: 'ตรวจเอกสาร', value: '', align: 'center' },
        { text: 'ตรวจเนื้อหา', value: '', align: 'center' },
      ],
    }
  },
  methods: {
    saveDownloadInfo(id) {
      this.downloadInfo.id = id
      this.downloadDialog = true
    },
    async download(type) {
      let downloadData = await this.$store.dispatch('api/downloadFile', {
        id: this.downloadInfo.id,
        file_type: type,
      })
      console.log(downloadData.link)
      this.userInfoDialog = true
      window.open(downloadData.link, '_blank');
    },
    clearDownloadInfo() {
      this.downloadInfo = { id: '' }
      this.downloadDialog = false
    },
  },
}
</script>
