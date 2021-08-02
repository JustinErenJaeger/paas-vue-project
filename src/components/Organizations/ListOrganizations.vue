<template>
  <v-card class="mx-auto my-12" max-width="500">
    <v-list color="#106CC8">
      <v-list-item>
        <v-col cols="8"
          ><v-list-item-title class="white--text">My Organization</v-list-item-title></v-col
        >
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="recentHeaders"
        :items="recentOrgs.slice(0, 3)"
        label="Recent Organizations"
        hide-default-header
        hide-default-footer
        class="elevation-1"
        :item-key="'null'"
      >
        <template v-slot:[`item.name`]="{ item }">
          {{ setOrgName(item) }}
        </template>
        <template v-slot:[`item.btn`]="{ item }">
          <v-btn
            class="mr-0 switch-org-btn"
            fab
            dark
            :elevation="0"
            small
            color="#106CC8"
            @click="setActiveData('RECENTS', item, true)"
            ><font-awesome-icon icon="exchange-alt" /> </v-btn
        ></template>
      </v-data-table>
      <v-data-table
        :headers="headers"
        :items="currentUser.organizations"
        :search="search"
        label="Organization List"
        :sort-by="['id']"
        :single-expand="true"
        :expanded.sync="expanded"
        item-key="name"
        show-expand
      >
        <template v-slot:[`item.btn`]="{ item }">
          <v-btn
            class="mr-0 switch-org-btn"
            fab
            dark
            :elevation="0"
            small
            color="#106CC8"
            @click="setActiveData('LIST', item, false)"
          >
            <font-awesome-icon icon="exchange-alt" /> </v-btn
        ></template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="py-0 px-0">
            <v-data-table
              hide-default-header
              item-key="name"
              :headers="headersChild"
              :items="item.children"
              hide-default-footer
              class="rounded-0"
              ><template v-slot:[`item.btn`]="{ item }"
                ><v-btn
                  class="mr-0"
                  fab
                  dark
                  :elevation="0"
                  small
                  color="#106CC8"
                  @click="setActiveData('LIST', item, true)"
                  ><font-awesome-icon icon="exchange-alt"/></v-btn></template
            ></v-data-table></td
        ></template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    expanded: [],
    search: '',
    headers: [
      {
        align: 'left',
        sortable: false,
        value: 'name',
        width: '80%',
      },
      {
        value: 'btn',
        width: '10%',
      },
    ],
    headersChild: [
      {
        align: 'left',
        sortable: false,
        value: 'name',
        width: '90%',
      },
      {
        align: 'right',
        value: 'btn',
        width: '10%',
      },
    ],
    recentSearch: '',
    recentHeaders: [
      {
        align: 'left',
        sortable: false,
        value: 'name',
        width: '80%',
      },
      {
        value: 'btn',
        width: '10%',
      },
    ],
  }),
  computed: {
    ...mapState(['currentUser', 'recentOrgs', 'currentOrg', 'isChildOrg', 'parentOrg', 'childOrg']),
  },
  methods: {
    setActiveData(list, organization, value) {
      this.$store.dispatch('setIsChildOrg', value);
      this.$store.dispatch('selectedOrgData', organization);
      if (list === 'RECENTS') {
        this.$store.dispatch('reorderRecents', organization);
      } else if (list === 'LIST') {
        this.$store.dispatch('setRecentOrgs', organization);
      }
      if (value) {
        this.$store.dispatch('setParentOrg', organization);
        this.$store.dispatch('setChildOrg', organization);
        this.$store.dispatch('setParentOrg', organization);
      }
      this.$store.dispatch('setActiveView', 'DASHBOARD');
      this.$router.push('/dashboard');
    },
    setOrgName(item) {
      if (item.parentId >= 0) {
        return `${this.currentUser.organizations.find((org) => org.id === item.parentId).name} > ${
          item.name
        }`;
      }
      return item.name;
    },
  },
};
</script>

<style scoped>
.add-btn,
.cancel-btn {
  margin: 0 !important;
}

.switch-org-btn {
  float: right;
  box-shadow: 0 !important;
}
</style>
