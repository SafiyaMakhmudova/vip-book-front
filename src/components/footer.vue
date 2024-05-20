<template>
    <div class=" bg-footerColor flex  px-[64px] pt-[46px] pb-[52px] footer ">
        <div class="text-text  w-[50%] footer-div1">
            <div>
                <h2 class="text-xl mb-3 font-semibold "><i>Catalog</i></h2>
                <div class="flex flex-col text-lg  ">
                    <a to="/book" >Books</a>
                    <a>Stationary</a>
                    <a>Gifts</a>
                </div> 
            </div>
            <div class="mt-10">
                <h2 class="text-xl mb-3 font-semibold "><i>About us</i></h2>
                <a class="text-lg" href="/about ">About us</a>
            </div>
        </div>
        <div class="text-text w-[50%] footer-div2">
            <h2 class="text-lg mb-2 font-semibold  "><i>FOLLOW US</i></h2>
            <div class="flex flex-col gap-2 text-lg ">
                <a href="/"><i class='bx bxl-telegram border-2 rounded-full bg-text text-white p-1 mr-3 '></i>Telegram</a>
                <a href="/"><i class='bx bxl-instagram border-2 rounded-full bg-text text-white p-1 mr-3'></i>Instagram</a>
                <a href="/"><i class='bx bxl-facebook border-2 rounded-full bg-text text-white p-1 mr-3'></i>Facebook</a>
                <a href="/"><i class='bx bxl-linkedin border-2 rounded-full bg-text text-white p-1 mr-3'></i>LinkedIn</a>
                <a href="/"><i class='bx bx-phone-call border-2 rounded-full bg-text text-white p-1 mr-3'></i>+998 90 239 0987</a>
                <a href="/"><i class='bx bxs-envelope border-2 rounded-full bg-text text-white p-1 mr-3' ></i>Info@Vipbooks.uz</a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
@media only screen and (min-width:330px) and   (max-width: 596px) {
  .footer {
    padding: 10px;
    padding-bottom: 20px;
  }
}

</style>