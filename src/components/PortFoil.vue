<script setup>
    const props = defineProps({
        ref: String
    })

    import portfoilCard from '../components/layout/portfoilCard.vue'

    // const portfoil = 'Aqui estão alguns dos projetos e soluções que desenvolvi, todos mantendo um padrão de desenvolvimento e utilizando tecnologias atuais.'

    const portfoil = "Aqui estão alguns dos projetos e soluções que desenvolvi, todos mantendo um padrão de desenvolvimento excepcional e utilizando as mais recentes e avançadas tecnologias do mercado atual. Cada projeto foi cuidadosamente concebido e implementado para não apenas atender, mas superar as expectativas dos clientes, garantindo uma experiência de usuário fluida e uma funcionalidade de ponta"

    const gataticospdv = 'Essa é uma aplicação desenvolvida com Vue3 de PDV, com lançamento de produtos, pedidos, estoque e dashboards para conferências. Para fins de demonstração, disponibilizo o seguinte login: '
    const gataticosImg = 'src/assets/gataticospdv.png'

    const gataticosadm = 'Essa é uma aplicação desenvolvida com Ionic e Vue3 para gerenciar o meu PDV. Através dela, consigo controlar as liberações de usuário, parametros de uso e até mesmo o painel financeiro com base nos clientes que utilizam o meu PDV. Clique em Saiba Mais para conhecer a respeito!'
    const gataticosAdmImg = 'src/assets/gataticosadm.png'

    const codereader = 'Essa é uma aplicação que demonstra como funcionaria a leitura de códigos de barras através da câmera do seu smartphone, demonstrando também qual é o tipo do código de barra lido. Ferramenta muito útil e poderosa, podendo eliminar a depência de um leitor físico.'

    const redirectToApp = (payload) => {
        // window.location.href = payload
        window.open(payload, '_blank')
    }



</script>

<template>
    <div class="2xl:pt-32 w-full h-full flex justify-center flex-col items-center py-20" :ref="ref">
        <span class="tracking-tight text-5xl font-extrabold m-4">Portfólio</span>
        <div class="flex flex-col justify-center items-center mt-10">
            <div class="w-3/4 flex flex-col items-center">
                <div class="text-slate-100 text-justify">
                    {{ portfoil }}
                </div>
                <div class="px-2 py-8 flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
                    <portfoilCard 
                        title="Gataticos-PDV" :content="gataticospdv" :hasLogin="true" 
                        email="teste@teste.com" password="123456"
                        @emitEvent="redirectToApp('https://gataticos-pdv.web.app/')"
                    >
                        <template #photo>
                            <img src="../assets/gataticospdv.png" alt="" class="sm:h-64">
                        </template>
                    </portfoilCard>
                    <portfoilCard title="Gataticos-ADM" :content="gataticosadm"
                    @emitEvent="redirectToApp('https://api.whatsapp.com/send?phone=5511981080308&text=Olá,%20quero%20mandar%20uma%20mensagem')"
                    >
                        <template #photo>
                            <img src="../assets/gataticosadm.png" alt="" class="sm:h-64">
                        </template>
                    </portfoilCard>
                    <portfoilCard title="Code-Reader" :content="codereader"
                    @emitEvent="redirectToApp('https://vini-codereader.web.app/')"
                    >
                        <template #photo>
                            <img src="../assets/gataticos-codereader.png" alt="" class="sm:h-64">
                        </template>
                    </portfoilCard>
                </div>
            </div>
            <!-- <div class="2xl:w-[32rem] sm:w-[28rem] 2xl:mr-20 w-[18rem]">
                <img src="../assets/Code typing-pana.svg" alt="" class="drop-shadow-2xl">
            </div> -->
        </div>
    </div>
</template>