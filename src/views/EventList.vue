<template>
  <div>
    <h1>Event List Page</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventCard
  },
  computed: {
    ...mapState(["events"])
  },
  created() {
    this.$store.dispatch("fetchEvents");
  }
};
</script>

<style></style>
