<script setup>
    const props = defineProps({
        ref: String
    })

    import GoButton from './layout/GoButton.vue';
</script>

<template>
    <footer class="w-full flex flex-col justify-center items-center text-center bg-slate-950 p-10 gap-4" :ref="ref">
        <span class="text-3xl font-semibold tracking-tight">Sobre</span>
        <span class="text-sm text-slate-300">Desenvolvido com empenho, visando o melhor desempenho e usabilidade por parte do usuário.</span>
        <div class="flex w-full justify-around sm:justify-center mt-10 text-3xl font-extrabold">
            <div class="sm:px-6">
                <a href="https://www.linkedin.com/in/vinnylioni/" class="">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div class="sm:px-6">
                <a href="https://github.com/VinnyLioni">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <div class="sm:px-6">
                <a href="https://www.instagram.com/vinnylioni/">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center p-10 gap-2">
            <span class="text-2xl font-semibold ">Entre em Contato</span>
            <div class="flex flex-row justify-center items-center text-xl gap-2">
                <i class="fab fa-whatsapp text-xl"></i>
                <span>(11) 98108-0308</span>
            </div>
            <div class="flex flex-row justify-center items-center text-xl gap-2">
                <i class="fas fa-envelope text-xl"></i>
                <span>vinnylioni@gmail.com</span>
            </div>
            <div class="flex flex-row justify-center items-center text-xl gap-2">
                <i class="fas fa-map-location-dot text-xl"></i>
                <span>São Paulo, SP</span>
            </div>
        </div>
        <div class="mb-10">
            <a href="https://api.whatsapp.com/send?phone=5511981080308&text=Olá,%20quero%20mandar%20uma%20mensagem" target="_blank">
                <GoButton title="Mensagem" icon="fab fa-whatsapp text-3xl"/>
            </a>
        </div>
        <div class="text-xs text-slate-300">
            <span>© Vinicius Lioni 2024. Todos os direitos reservados.</span>
        </div>
    </footer>
</template>