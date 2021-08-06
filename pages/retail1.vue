<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <strong> All Resources</strong>
    </div>
    <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery" :key="item">
            <td>
              <a v-bind:href="item.uri" target="_blank">{{ item.title }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,

      filters: {
        resources: [
          {
            title: 'The Moms Co.',
            typeValue: false,
            id: 1,
          },
          {
            title: 'COCOMO',
            typeValue: false,
            id: 2,
          },
          {
            title: 'Mamaearth',
            typeValue: false,
            id: 3,
          },
          {
            title: 'Teenilicious',
            typeValue: false,
            id: 4,
          },
          {
            title: 'Kaya Skin Clinic',
            typeValue: false,
            id: 5,
          },
          {
            title: 'Biotique',
            typeValue: false,
            id: 6,
          },
          {
            title: 'Toniq Kids',
            typeValue: false,
            id: 7,
          },
        ],
      },
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.filters.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.title.toLowerCase().includes(v))
        })
      } else {
        return this.resources
      }
    },
  },
}
</script>

<style>
</style>