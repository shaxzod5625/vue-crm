<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active"
        :exact="link.exact"
        :to="link.url"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/filters/locolize.filter'
export default {
  props: ['value'],
  name: "Sidebar",
  data: () => ({
    links: [
      {title: localizeFilter('Menu_Bill'), url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'}
    ]
  })
}
</script>

<style scoped>

</style>