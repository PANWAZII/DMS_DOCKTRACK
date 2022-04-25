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
                    @click="downloadfileDialog = true"
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

              <v-dialog v-model="downloadfileDialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">ดาวน์โหลดไฟล์ที่เกี่ยวข้อง</span>
                  </v-card-title>
                  <v-divider></v-divider>

                  <v-container>
                    <v-row justify="center">
                      <v-btn
                        ><v-icon class="align-center">mdi-file-download</v-icon>
                        แบบรายงานการจัดหาฯ</v-btn
                      >
                    </v-row>
                    <v-row justify="center">
                      <v-btn
                        ><v-icon class="align-center">mdi-file-download</v-icon>
                        แบบรายงานการจัดหาฯ</v-btn
                      >
                    </v-row>
                    <v-row justify="center">
                      <v-btn
                        ><v-icon class="align-center">mdi-file-download</v-icon>
                        แบบรายงานการจัดหาฯ</v-btn
                      >
                    </v-row>
                  </v-container>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="downloadfileDialog = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <!-- <v-dialog v-model="passDialog1" max-width="290">
                <v-card>
                  <v-card-title class="text">คุณต้องการบันทึก ? </v-card-title>
                  <br />
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="passDialog1 = false">
                      ยกเลิก
                    </v-btn>
                    <v-btn color="success" @click="passDialog1 = false">
                      ตกลง
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog> -->
              <!-- <v-dialog v-model="passDialog2" max-width="290">
                <v-card>
                  <v-card-title>คุณต้องการบันทึก ? </v-card-title>
                  <br />
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="passDialog2 = false">
                      ยกเลิก
                    </v-btn>
                    <v-btn color="success" @click="passDialog2 = false">
                      ตกลง
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog> -->
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <template>
      <v-row justify="center">
        <v-dialog v-model="commentDialog" persistent max-width="600px">
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
    </template>
  </v-container>
</template>
<script>
export default {
  middleware: 'middleware-admin-auth',
  layout: 'admin',
  async fetch() {
    this.acceptedDoc = await this.$store.dispatch('api/getAcceptedDoc')
  },
  data() {
    return {
      search: '',
      acceptedDoc: [],
      downloadfileDialog: false,
      commentDialog: false,
      passDialog1: false,
      passDialog2: false,
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
  methods: {},
}
</script>
