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
            <template v-slot:item="row" :activator="{ on, attrs }">
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
                  <v-radio-group
                    v-model="row.item.document_check"
                    @change="
                      setDocumentCheck(row.item._id, row.item.document_check)
                    "
                  >
                    <v-radio
                      on-icon="mdi-checkbox-marked"
                      off-icon="mdi-checkbox-blank-outline"
                      label="ครบ"
                      :value="true"
                    ></v-radio>
                    <v-radio
                      on-icon="mdi-checkbox-marked"
                      off-icon="mdi-checkbox-blank-outline"
                      label="ไม่ครบ"
                      :value="false"
                    ></v-radio>
                  </v-radio-group>
                </td>
                <td class="text-center">
                  <v-btn
                    text
                    color="secondary"
                    dark
                    @click="getDocumentComment(row.item._id)"
                    ><v-icon>mdi-comment-processing</v-icon></v-btn
                  >
                </td>
                <td>
                  <v-radio-group
                    v-model="row.item.technical_check"
                    @change="
                      setTechnicalCheck(row.item._id, row.item.technical_check)
                    "
                  >
                    <v-radio
                      on-icon="mdi-checkbox-marked"
                      off-icon="mdi-checkbox-blank-outline"
                      label="ไม่มีประเด็น"
                      :value="true"
                    ></v-radio>
                    <v-radio
                      on-icon="mdi-checkbox-marked"
                      off-icon="mdi-checkbox-blank-outline"
                      label="มีประเด็น"
                      :value="false"
                    ></v-radio>
                  </v-radio-group>
                </td>
                <td class="text-center">
                  <v-btn
                    text
                    color="secondary"
                    dark
                    @click="getTechnicalComment(row.item._id)"
                    ><v-icon>mdi-comment-processing</v-icon></v-btn
                  >
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
      <v-dialog v-model="documentCommentDialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">ความคิดเห็น กรณีเอกสารไม่ครบ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="documentComment"
                    name="input-7-1"
                    value=""
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="error " @click="documentCommentDialog = false">
              ปิด
            </v-btn>
            <v-btn color="success" @click="setDocumentComment(documentId)">
              บันทึก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="technicalCommentDialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">ความคิดเห็น กรณีมีประเด็นทางเทคนิค</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="technicalComment"
                    name="input-7-1"
                    value=""
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="error " @click="technicalCommentDialog = false">
              ปิด
            </v-btn>
            <v-btn color="success" @click="setTechnicalComment(documentId)">
              บันทึก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog
        v-model="documentConfirmDialog"
        max-width="500"
        max-height="300"
      >
        <v-card>
          <v-card-title class="text-h5"
            ><v-icon justify="left" class="mr-3" size="50"
              >mdi-text-box-check</v-icon
            >
            ตรวจสอบเอกสาร
          </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text> คุณได้ตรวจสอบว่าเอกสารครบถ้วนแล้ว </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" class="font-weight-medium mt-3">
              ตกลง
            </v-btn>
            <v-btn
              color="info"
              @click="documentConfirmDialog = false"
              class="font-weight-medium mt-3 ml-3"
            >
              ยกเลิก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog
        v-model="technicalConfirmDialog"
        max-width="500"
        max-height="300"
      >
        <v-card>
          <v-card-title class="text-h5"
            ><v-icon justify="left" class="mr-3" size="50"
              >mdi-desktop-classic</v-icon
            >
            ตรวจสอบเนื้อหา
          </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text>
            คุณได้ตรวจสอบว่าเนื้อหาแล้วว่า ไม่มีประเด็นใด ๆ
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" class="font-weight-medium mt-3">
              ตกลง
            </v-btn>
            <v-btn
              color="info"
              @click="technicalConfirmDialog = false"
              class="font-weight-medium mt-3 ml-3"
            >
              ยกเลิก
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="completeDialog" max-width="500" max-height="300">
        <v-card>
          <v-card-title class="text-h5"
            ><v-icon justify="left" class="mr-3" size="50"
              >mdi-check-underline</v-icon
            >
            เสร็จสมบูรณ์
          </v-card-title>
          <v-divider class="mb-3"></v-divider>
          <v-card-text> คุณได้บันทึกการตรวจสอบเรียบร้อย </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="completeDialog = false"
              class="font-weight-medium mt-3"
            >
              ปิด
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
      documentConfirmDialog: false,
      technicalConfirmDialog: false,
      documentCommentDialog: false,
      technicalCommentDialog: false,
      completeDialog: true,
      downloadDialog: false,
      downloadInfo: { id: '' },
      documentComment: '',
      technicalComment: '',
      documentId: '',
      test: null,
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
        { text: 'ความเห็น', value: '', align: 'center' },
        { text: 'ตรวจเนื้อหา', value: '', align: 'center' },
        { text: 'ความเห็น', value: '', align: 'center' },
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
      window.open(downloadData.link, '_blank')
    },
    clearDownloadInfo() {
      this.downloadInfo = { id: '' }
      this.downloadDialog = false
    },
    async getDocumentComment(id) {
      console.log(id)
      let Comment = await this.$store.dispatch('api/getDocumentComment', {
        id: id,
      })
      this.documentComment = Comment.comment
      this.documentId = id
      this.documentCommentDialog = true
    },
    async getTechnicalComment(id) {
      console.log(id)
      let Comment = await this.$store.dispatch('api/getTechnicalComment', {
        id: id,
      })
      this.technicalComment = Comment.comment
      this.documentId = id
      this.technicalCommentDialog = true
    },
    async setDocumentComment(id) {
      await this.$store
        .dispatch('api/setDocumentComment', {
          id: id,
          comment: this.documentComment,
        })
        .then((this.documentCommentDialog = false))
    },
    async setTechnicalComment(id) {
      await this.$store
        .dispatch('api/setTechnicalComment', {
          id: id,
          comment: this.technicalComment,
        })
        .then((this.technicalCommentDialog = false))
    },
    async setDocumentCheck(id, status) {
      await this.$store
        .dispatch('api/setDocumentCheck', {
          id: id,
          new_status: status,
        })
        .then(await this.$nuxt.refresh())
    },
    async setTechnicalCheck(id, status) {
      await this.$store
        .dispatch('api/setTechnicalCheck', {
          id: id,
          new_status: status,
        })
        .then(await this.$nuxt.refresh())
    },
  },
}
</script>
