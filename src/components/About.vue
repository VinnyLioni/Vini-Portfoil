<script setup>
    import { ref } from 'vue'

    // const about = "Olá! Me chamo Vinicius Lioni. Sou um Desenvolver de Software com foco no Front-end, com diversas soluções criativas para o desenvolvimento da aplicação/projeto do seu negócio.Seja bem vindo ao meu portfólio pessoal!"
   
    const props = defineProps({
        ref: String
    })

    const about = 'Olá! Sou Vinicius Lioni, um Desenvolvedor de Software especializado em Front-end, apaixonado por criar soluções inovadoras para impulsionar o sucesso do seu negócio. Bem-vindo ao meu portfólio pessoal, onde você encontrará uma variedade de projetos que demonstram minha criatividade e habilidades técnicas. Estou ansioso para colaborar com você e transformar suas ideias em realidade digital!'
</script>

<template>
    <div class="h-full p-10 flex flex-col justify-center items-center 2xl:pt-32 pt-36" :ref="ref">
        <div class="tracking-tight text-5xl font-extrabold m-4">Sobre</div>
        <span class="p-4 text-center text-slate-300">
            {{ about }}
        </span>
        <!-- <div class="mt-12">
            <span class="text-5xl font-bold tracking-tighter">Social</span>
            <div class="flex w-full justify-between mt-10 text-3xl font-extrabold">
                    <div>
                        <a href="https://www.linkedin.com/in/vinnylioni/" class="cursor-pointer">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/VinnyLioni">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/vinnylioni/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
        </div> -->
    </div>
</template>