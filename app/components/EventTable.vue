<template>

    <v-card class="details" id="cards" ref="document">
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="users" :search="search" id="cards">
            <template v-slot:[`item.edit`]="{ item }">
                <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
            </template> 
            <template v-slot:[`item.delete`]="{ item }">
                <v-btn color="#aa1717" @click="deleteItem(item)"> Remove </v-btn>
            </template>
            
        </v-data-table>
        <v-btn class="formbtn" color="#20DC49" @click="exportToPDF">export as a pdf</v-btn> 
    </v-card>

</template>

<script>
import html2pdf from "html2pdf.js";

export default {
    data() {
        return {
            search: '',

            headers: [
                // { text: 'Schedule ID', value: 'scheduleId' },
                { text: 'Name', value: 'scheduleName' },
                { text: 'Address', value: 'scheduleAddress' },
                { text: "Mobile Number", value: 'scheduleMobilenumber' },
                { text: 'Date', value: 'scheduleDate' },
                { text: 'Time', value: 'scheduleTime' },
                { text: 'Order Details', value: 'scheduleOrderdetails' },
                { text: 'Edit', value: 'edit' },
                { text: 'Remove', value: 'delete' },
            ],



        };
    },
    computed: {

        users() {
            return this.$store.state.users.data
        }

    },

    async fetch() {
        await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/schedules/')).data)
    },
    methods: {
        //export the invoice as a pdf
        exportToPDF() {
        html2pdf(document.getElementById("cards"), {
                    margin: 35,
                filename: "Events.pdf",
                });
        },

        editItem(event) {
            this.$store.commit("event/storescheduleId", event.scheduleId);
            this.$store.commit("event/storescheduleName", event.scheduleName);
            this.$store.commit("event/storescheduleAddress", event.scheduleAddress);
            this.$store.commit("event/storescheduleMobilenumber", event.scheduleMobilenumber);
            this.$store.commit("event/storescheduleDate", event.scheduleDate);
            this.$store.commit("event/storescheduleTime", event.scheduleTime);
            this.$store.commit("event/storeEventDetails", event.scheduleOrderdetails);
        },
        async deleteItem(event) {
            await this.$axios.delete('http://localhost:8000/schedules/' + event.scheduleId, event);
            this.$store.commit(
                "users/storeData",
                (await this.$axios.get("http://localhost:8000/schedules/")).data
            );
        },

    },
}

</script>

<style scoped>
.details {
    width: 100%;
    float: left;
    height: 570px;
    background: rgb(241, 245, 248);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


#cards {
    border-collapse: collapse;
    height: 100%;
    width: 100%;
    background: rgb(241, 245, 248);
}

#cards td,
#cards th {
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 10px;
    padding: 15px;
}

#cards tr:hover {
    background-color: #F0F0F0;
}

#cards th {
    text-align: center;
    background-color: #F0F0F0;
    color: #5A5A5A;
    font-size: 10px;
}

#cards tr:first-of-type th:first-of-type {
    border-radius: 20px 0 0 0;
}

#cards tr:first-of-type th:last-of-type {
    border-radius: 0 20px 0 0;
}

.Update-vendor {
    padding: 3px 10px;
    border-radius: 10px;
    background-color: #20DC49;
    font-size: 8px;
    margin-bottom: 3px;
}

.Delete-vendor {
    padding: 3px 10px;
    border-radius: 10px;
    background-color: #aa1717;
    font-size: 8px;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 0;
    margin-right: 50px;
    position: absolute;
    top: 88%;
    left: 30%;
}
</style>