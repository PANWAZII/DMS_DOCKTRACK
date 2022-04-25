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

          <v-data-table :headers="headers" :items="acceptedDoc" :search="search">
            <template  v-slot:item="row">
              <tr>
                <td >{{ row.item.project_num }}</td>
                <td>{{ row.item.project_name }}</td>
                <td>{{ row.item.project_type }}</td>
                <td>
                  <v-btn text color="secondary" dark>
                    <v-icon>mdi-file-download</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn text color="secondary" dark>
                    <v-icon>mdi-file-download</v-icon>
                  </v-btn>
                  <v-btn text color="secondary" dark>
                    <v-icon>mdi-file-download</v-icon>
                  </v-btn>
                  <v-btn text color="secondary" dark>
                    <v-icon>mdi-file-download</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn text color="secondary" dark>
                    <v-icon>mdi-file-download</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-checkbox label="ครบ" color="success" value=""></v-checkbox>
                  <v-checkbox
                    label="ไม่ครบ"
                    color="red"
                    value=""
                    @click="commentDialog = true"
                  ></v-checkbox>
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
                    @click="commentDialog = true"
                  ></v-checkbox>
                </td>

                <td>
                  <v-btn text icon color="info" @click="confirmDialog = true">
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                </td>
              </tr>
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
    <v-dialog v-model="confirmDialog" max-width="290">
      <v-card>
        <v-card-title class="text">คุณต้องการบันทึก ? </v-card-title>
        <br />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="confirmDialog = false"> ยกเลิก </v-btn>
          <v-btn color="success" @click="confirmDialog = false"> ตกลง </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      commentDialog: false,
      confirmDialog: false,
      headers: [
        {
          text: 'ที่',
          align: 'right',
          sortable: true,
          value: 'project_num',
        },
        { text: 'โครงการ', value: 'project_name', align: 'center' },
        { text: 'ประเภท', value: 'project_type', align: 'center' },

        { text: 'แบบรายงานฯ', value: 'report_file', align: 'center' },
        { text: 'ใบเสนอราคา', value: 'price', align: 'center' },
        { text: 'ผังเครือข่าย', value: 'diagram', align: 'center' },
        { text: 'ตรวจเอกสาร', value: '', align: 'center' },
        { text: 'ตรวจเนื้อหา', value: '', align: 'center' },
        { text: 'บันทึก', value: '', align: 'center' },
      ],
    }
  },
}
</script>
