<script setup>
    const props = defineProps({
        ref: String
    })

    import portfoilCard from '../components/layout/portfoilCard.vue'

    const portfoil = 'Aqui estão alguns dos projetos e soluções que desenvolvi, todos mantendo um padrão de desenvolvimento e utilizando tecnologias atuais.'

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
    <div class="p-10 2xl:pt-32 w-full h-full flex justify-center flex-col items-center pt-36" :ref="ref">
        <span class="tracking-tight text-5xl font-extrabold m-4">Portfólio</span>
        <div class="text-slate-300 text-center">
            {{ portfoil }}
        </div>
        <div class="p-4 flex flex-col sm:flex-row justify-center items-center gap-6">
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
</template>