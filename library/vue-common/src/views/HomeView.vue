<template>
  <main>
    home
    <MyTest></MyTest>
  </main>
</template>
<script setup lang="ts">
import {MyTest} from "@/components";
import {timeFormat} from '@malaka/utils-common'

console.log(timeFormat())
</script>