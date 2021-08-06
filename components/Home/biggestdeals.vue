<template>
  <div>
    <v-img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/e8fca164-e7ed-4f5a-80e0-1ed9bb041be81622110825721-Most-Loved.gif"
    >
    </v-img>
    <div class="ml-15 mt-5 mr-15">
      <v-row class="no-gutters">
        <v-col v-for="(item, i) in cardData" :key="i">
          <v-card height="400px" width="200" tile flat>
            <n-link :to="`${item.category}${item.subcategory}`">
              <v-img :src="item.src"> </v-img>
            </n-link>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/0f676358-cb7b-4843-adce-a4fb079ad45b1619162789798-uspa.jpg',
          category: 'uspolo',
          subcategory: '/fashion',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/3106fd79-6c27-41cd-9240-5cf14c097ca01619162123339-w.jpg',
          title: 'w/w cloth/',
          category: '/W',
          subcategory: '/W Cloth',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/11/92d39b35-7de1-4547-9e73-b9428b1e146d1620713688703-home-tiles_Varun-fossil.jpg',
          title: 'cloth/fossil/',
          category: '/Cloth',
          subcategory: '/Fossil',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/7b124e17-4418-40d7-acbb-65806a34e3931622024785304-Vero-HP-Tile.jpg',
          title: 'cloth/veromoda',
          category: '/Cloth',
          subcategory: '/Veromoda',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/a8ddca7d-3cbc-4dbd-81a8-1a759b1bb38a1622096203836-Mamaearth-HP_Top-Tile-29-May.jpg',
          title: 'cloth/mamearth',
          category: '/Cloth',
          subcategory: '/Mameearth',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/26/106d2fcb-3781-43f3-96d7-f48ab69c92c21622040614449-louis-25.jpg',
          title: 'cloth/louis philppe',
          category: '/Cloth',
          subcategory: '/Philppe',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/23/3fb258ec-de85-4cbb-8bfe-e07333f09bcf1616497646344-Libas_H.jpg',
          title: 'cloth/libas',
          category: '/Cloth',
          subcategory: '/Libas',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/7726731b-c684-4856-907a-95abe59c41811619162238622-hrx-sports.jpg',
          title: 'cloth/hrx',
          category: '/Cloth',
          subcategory: '/Hrx',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/f6c2d8ea-c4e0-4f3e-b2cc-1581b6760a4a1619162337169-roadster.jpg',
          title: 'cloth/the roadstar',
          category: '/Cloth',
          subcategory: '/The Roadstar',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/27/1987a717-25de-492a-a7c4-30424a52eaef1622125822004-puma-new.jpg',
          title: 'cloth/puma',
          category: '/Cloth',
          subcategory: '/Puma',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/24/2b25d423-3e22-4742-83d7-a297e28b86be1619263727620-mango.png',
          category: '/Cloth',
          subcategory: '/Mango',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/697d5744-b62d-4fb9-9459-1e1586fbce981619162570484-here-and-now.jpg',

          category: '/Cloth',
          subcategory: '/Here-And-GO',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/94ea7ad8-76a8-4457-86f0-0f2c8fffae3d1619175128039-721cab7d-f282-497f-a2a8-6208d4266edb1619174357789-gini-jony--1---1-.jpg',
          category: '/uspolo',
          subcategory: '/fashion',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/23/bf438b7b-662c-4828-a15b-91a404640f7a1619162459511-mast-n-harbour.jpg',
        },
        {
          src: 'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/21/c5ee82ff-ddb6-4582-a263-32268ac538291619006330018-Home-page-tiles.jpg',
        },
      ],
    }
  },
}
</script>

<style>
</style>