<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

        <WrapLayout>
            <FlexboxLayout @tap="callAlert('Me');" justifyContent="center" alignItems="center" flexDirection="column" width="30%" height="120">
                <Label class="far" style="font-size:50" text.decode="&#xf118;"></Label>
                <Label>Me</label>
            </FlexboxLayout>
          
            <FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" width="30%" height="120">
                <Label class="fas" style="font-size:50" text.decode="&#xe537;"></Label>
                <Label>Neighbours</label>
            </FlexboxLayout>
          
            <FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" width="30%" height="120">
                <Label class="fas" style="font-size:50" text.decode="&#xf1cd;"></Label>
                <Label>SOS</label>
            </FlexboxLayout> 

            <FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" width="30%" height="120">
                <Label class="far" style="font-size:50" text.decode="&#xf2b5;"></Label>
                <Label>Help Out</label>
            </FlexboxLayout> 
          
            <FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" width="30%" height="120">
                <Label class="far" style="font-size:50" text.decode="&#xf075;"></Label>
                <Label>Communicate</label>
            </FlexboxLayout> 
        </WrapLayout>
    
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "Item 1",
            description: "Description for Item 1"
          },
          {
            name: "Item 2",
            description: "Description for Item 2"
          },
          {
            name: "Item 3",
            description: "Description for Item 3"
          },
          {
            name: "Item 4",
            description: "Description for Item 4"
          },
          {
            name: "Item 5",
            description: "Description for Item 5"
          },
          {
            name: "Item 6",
            description: "Description for Item 6"
          },
          {
            name: "Item 7",
            description: "Description for Item 7"
          },
          {
            name: "Item 8",
            description: "Description for Item 8"
          },
          {
            name: "Item 9",
            description: "Description for Item 9"
          },
          {
            name: "Item 10",
            description: "Description for Item 10"
          },
          {
            name: "Item 11",
            description: "Description for Item 11"
          },
          {
            name: "Item 12",
            description: "Description for Item 12"
          },
          {
            name: "Item 13",
            description: "Description for Item 13"
          },
          {
            name: "Item 14",
            description: "Description for Item 14"
          },
          {
            name: "Item 15",
            description: "Description for Item 15"
          },
          {
            name: "Item 16",
            description: "Description for Item 16"
          }
        ]
      };
    },
    methods: {
      callAlert(arg) {
          alert(arg);  
      },
      onItemTap(args) {
        this.$navigateTo(ItemDetails, {
          frame: 'items',
          props: {item: args.item},
          animated: true,
          transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
          }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import "@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles
    


</style>
