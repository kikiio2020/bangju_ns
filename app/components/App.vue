<template lang="html">
    <TabView androidTabsPosition="bottom">
        
        <TabViewItem title="Home">
            <Frame id="home">
                <Home/>
            </Frame>
        </TabViewItem>

        <TabViewItem title="Feed">
            <Frame id="feed">
                <Browse/>
            </Frame>
        </TabViewItem>

        <TabViewItem title="Settings">
            <Frame id="settings">
                <Search/>
            </Frame>
        </TabViewItem>

    </TabView>
</template>

<script>
  import Home from "./Home.vue";
  import Browse from "./Browse.vue";
  import Search from "./Search.vue";

  export default {
    components: {
      Home,
      Browse,
      Search
    }
  };
</script>

<style lang="scss">
    // Start custom common variables
    @import "@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
