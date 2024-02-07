<script setup>
    import portfoilCard from '../components/layout/portfoilCard.vue'

    const portfoil = 'Aqui estão alguns dos projetos e soluções que desenvolvi, todos mantendo um padrão de desenvolvimento e utilizando tecnologias atuais.'

    const gataticospdv = 'Essa é uma aplicação desenvolvida com Vue3 de PDV, com lançamento de produtos, pedidos, estoque e dashboards para conferências. Autenticação é feita por E-mail e Senha ou através da Conta do Google. Para fins de demonstração, disponibilizo o seguinte login: '
    const gataticosImg = '../../assets/gataticosadm.png'

    const gataticosadm = 'Essa é uma aplicação desenvolvida com Ionic e Vue3 para gerenciar o meu PDV. Através dela, consigo controlar as liberações de usuário, parametros de uso e até mesmo o painel financeiro com base nos clientes que utilizam o meu PDV. Clique em Saiba Mais para conhecer a respeito!'
    const gataticosAdmImg = 'src/assets/gataticosadm.png'

</script>

<template>
    <div class="p-10 w-full h-full flex justify-center flex-col items-center">
        <span class="tracking-tight text-5xl font-extrabold m-4">Portfólio</span>
        <div class="text-slate-300 text-center">
            {{ portfoil }}
        </div>
        <div class="p-4 flex flex-col justify-center items-center gap-6">
            <div class="bg-slate-700 h-1/2 flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden">
                <img src="../assets/gataticospdv.png" alt="" class="object-cover">
                <div class="flex flex-col p-4">
                    <span class="text-xl font-bold tracking-tighter">Gataticos-PDV</span>
                    <span class="text-sm font-thin tracking-wide">{{ gataticospdv }}</span>
                    <div>
                        <div class="flex flex-row text-sm gap-2">
                            <span>Email: </span>
                            <span>teste@teste.com</span>
                        </div>
                        <div class="flex flex-row text-sm gap-2">
                            <span>Senha: </span>
                            <span>123456</span>
                        </div>
                    </div>
                </div>
                <footer class="w-full bg-slate-600 flex justify-center">
                    <button class="m-2 flex flex-row justify-center items-center gap-2 text-lg font-semibold tracking-tighter">
                        <i class="fas fa-rocket"></i>
                        <span>Saiba Mais</span>
                    </button>
                </footer>
            </div>
            <div class="bg-slate-700 h-1/2 flex flex-col justify-center items-center rounded-md shadow-md overflow-hidden">
                <img src="../assets/gataticosadm.png" alt="" class="object-cover">
                <div class="flex flex-col p-4">
                    <span class="text-xl font-bold tracking-tighter">Gataticos-ADM</span>
                    <span class="text-sm font-thin tracking-wide">{{ gataticosadm }}</span>
                </div>
                <footer class="w-full bg-slate-600 flex justify-center">
                    <button class="m-2 flex flex-row justify-center items-center gap-2 text-lg font-semibold tracking-tighter">
                        <i class="fas fa-rocket"></i>
                        <span>Saiba Mais</span>
                    </button>
                </footer>
            </div>
        </div>
        <!-- <img src="../assets/gataticosadm" alt=""> -->
    </div>
</template>