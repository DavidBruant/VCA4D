<template>
    <Skeleton>
        <header>
            <div v-if="!studyData && !error" class="loading">Loading...</div>

            <div v-if="error" class="error">{{ error }}</div>

            <ul v-if="studyData">
                <li>
                    <img src="" alt="">
                    <span>{{ studyData.product }}</span>
                </li>
                <li>
                    <span>{{ studyData.country }}</span>
                </li>
                <li>
                    <span>{{ studyData.year }}</span>
                </li>
            </ul>
        </header>
    </Skeleton>
</template>

<script setup>
import Skeleton from '../components/Skeleton.vue'

</script>

<script>
import getStudyData from '../studyData.js'

export default {
    name: '',
    props: [],
    data() {
        return {
            studyData: undefined,
            error: undefined
        }
    },
    created() {
        console.log('route params', this.$route.params)
        //getStudyData()
    }
}
</script>