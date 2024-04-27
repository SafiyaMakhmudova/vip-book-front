<template>
  <!-- Modal 1 -->
  <div class="text-left relative mb-[200px]">
    <div class="bg-[#FFE7B7] pt-[83px] pl-[240px]   modal1 pb-[180px] pr-[124px]">
      <h2 class="text-text text-3xl mb-5 font-semibold modal1h2 ">What we can offer your SaaS Business</h2>
      <p class="text-[#665C49] text-xl font-medium modal1p">
        We have chosen to only collaborate and work with SaaS businesses, this is because our<br />
        expertise lies and we know that we can provide the most value to our clients. Our team
        has<br />
        worked with Nordic, European and American tech unicorns.
      </p>
    </div>
  </div>

  <!-- Both Modals Container -->
  <div>
    <!-- Modal 2 -->
    <div
      class="bg-white text-center rounded-3xl modal2 absolute mobile:top-[90%] middle:top-[70%] tablet:top-[80%] midd:top-[70%]  laptop:top-[70%]    desktop:top-[65%] w-[90%]  left-1/2 transform -translate-x-1/2"
    >
      <h2 class="text-text text-3xl font-semibold pt-[64px] modal2h2">
        Services we can offer to our customers
      </h2>
      <p class="pt-[42px] text-xl text-[#1D1D1D]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br />
        tempor invidunt ut labore et.
      </p>
    </div>
    <div class="mobile:hidden middle:flex midd:flex mid:flex laptop:flex desktop:flex  justify-center gap-10 pb-[54px] flex-wrap  mx-[44px]">
      <div
        class="border-2 w-[314px] pt-16 px-[32px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/Group 59143.svg"
          alt=""
        />
        <h2 class="text-xl pt-5">BookStore</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
      <div
        class="border-2 pt-16 px-[32px] w-[314px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/Group 59144.png"
          alt=""
        />
        <h2 class="text-xl pt-5">Onlien shop</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
      <div
        class="border-2 pt-16 px-[32px] w-[314px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/Group 59145.png"
          alt=""
        />
        <h2 class="text-xl pt-5">Publishing</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
      <div
        class="border-2 pt-16 px-[32px] w-[314px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/Group 59142.png"
          alt=""
        />
        <h2 class="text-xl pt-5">Shipping</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
      <div
        class="border-2 pt-16 px-[32px] w-[314px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/book (1) 1.png"
          alt=""
        />
        <h2 class="text-xl pt-5">More than 10 000 books</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
      <div
        class="border-2 pt-16 px-[30px] w-[314px] pb-[55px] border-t-[#F69800] border-t-4 text-[#1D1D1D]"
      >
        <img
          src="@/assets/img/Group 59145.png"
          alt=""
        />
        <h2 class="text-xl pt-5">Reading Aria</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut
        </p>
      </div>
    </div>
    <div class="bg-orange-200 pt-7 pb-7 px-3 desktop:hidden laptop:hidden middle:hidden midd:hidden mid:hidden">
      
      <div class=" rounded-2xl bg-white">
        
        <div v-for="card in cardObj" class=" flex p-3 items-center gap-4 justify-between" :key="card.id">
            <div class="w-[20%]">
              <img :src="card.img " alt=""/>
            </div>
            <div>
              <h2 class="text-green-900 font-semibold  ">{{ card.title }}</h2>
              <p>{{ card.description }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3 -->
  <div class="text-left px-[80px] pb-[89px] modal3">
    <h2 class="text-3xl text-text pb-[56px] font-semibold modal3h2 ">VIP books uz history</h2>
    <div class="flex modal3div">
      <div class="w-[50%] modal3w">
        <span class="text-[#1D1D1D] text-xl "
          >Every SaaS website, regardless of niche, must do one thing brilliantly, which is
          converting visitors into users. At first glance, the site should encourage and guide
          visitors in a smooth way towards call-to-actions. <br> This goes hand in hand with a responsive
          design, meaning it needs to be apt for different devices. <br> We use a data-driven approach to
          measure user response when developing the site. This method usually makes the site quicker
          to launch, is more cost-effective and more successful in the long run. <br> The pages need to
          be search engine optimized (SEO) because it lays the foundation for the technical quality,
        </span>
      </div>
      <div class="w-[50%] modal3img mx-auto  text-center ">
        <img src="@/assets/img/1 51.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import cardObj from '@/composable/index'

</script>

<style scoped>
@media only screen and  (min-width:330px) and  (max-width: 760px) {
  .modal1 {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;

  }
  .modal1h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal2h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal3 {
    padding: 10px;
  }

  .modal3h2 {
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
  }
  
  .modal3div {
    width: 100%;
    display: block;
  }

  
  .modal3w {
    width: 100%;
  }

  
  .modal3img {
    margin-top: 15px;
    width: 100%;
  }
}


@media only screen and  (min-width:374px) and  (max-width: 897px) {
  .modal1 {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

  }
  .modal1h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal2h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal3 {
    padding: 20px;
  }

  .modal3h2 {
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
  }
  
  .modal3div {
    width: 100%;
    display: block;
  }

  
  .modal3w {
    width: 100%;
  }

  
  .modal3img {
    margin-top: 15px;
    width: 100%;
  }
}


@media only screen and  (min-width:427px) and  (max-width: 932px) {
  .modal1 {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

  }
  .modal1h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal2h2 {
    width: 100%;
    font-size:x-large ;
  }

  .modal3 {
    padding: 20px;
  }

  .modal3h2 {
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
  }
/*   
  .modal3div {
    width: 100%;
    display: block;
  }

  
  .modal3w {
    width: 100%;
  }

  
  .modal3img {
    margin-top: 15px;
    width: 100%;
  } */
}
</style>
