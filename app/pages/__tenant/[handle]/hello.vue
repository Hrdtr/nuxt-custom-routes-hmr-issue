<script setup lang="ts">
const tenant = useRequestTenantHandle()
</script>

<template>
  <p>Tenantsss: {{ tenant }}</p>
</template>
