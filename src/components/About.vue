<script setup>
    import { ref } from 'vue'

    // const about = "Olá! Me chamo Vinicius Lioni. Sou um Desenvolver de Software com foco no Front-end, com diversas soluções criativas para o desenvolvimento da aplicação/projeto do seu negócio.Seja bem vindo ao meu portfólio pessoal!"
   
    const props = defineProps({
        ref: String
    })

    // const about = 'Olá! Sou Vinicius Lioni, um Desenvolvedor de Software especializado em Front-end, apaixonado por criar soluções inovadoras para impulsionar o sucesso do seu negócio. Bem-vindo ao meu portfólio pessoal, onde você encontrará uma variedade de projetos que demonstram minha criatividade e habilidades técnicas. Estou ansioso para colaborar com você e transformar suas ideias em realidade digital!'

    const about1 = "Olá! Meu nome é Vinicius Lioni, e sou um Desenvolvedor de Software especializado em Front-end, apaixonado por criar soluções inovadoras que impulsionam o sucesso de empresas como a sua. Bem-vindo ao meu portfólio pessoal, um espaço onde compartilho uma ampla variedade de projetos que não só demonstram minha criatividade e habilidades técnicas, mas também refletem meu compromisso em superar expectativas e entregar resultados excepcionais."
    // const about2 = "Com uma experiência sólida e diversificada no desenvolvimento de interfaces de usuário intuitivas e esteticamente atraentes, estou pronto para colaborar com você e transformar suas ideias em realidade digital. Ao longo da minha jornada como desenvolvedor, adquiri uma profunda compreensão das melhores práticas de design e desenvolvimento, bem como uma capacidade única de traduzir os requisitos do cliente em soluções funcionais e elegantes."
    const about3 = "Meu portfólio abrange uma vasta gama de projetos, desde websites responsivos e aplicativos web dinâmicos até experiências interativas e componentes de interface personalizados. Utilizando tecnologias modernas como as frameworks Vue, React e Ionic, usando tanto Javascript quanto Typescript, estou sempre buscando estar na vanguarda das últimas tendências e ferramentas do setor para garantir que cada projeto seja construído com excelência técnica e criatividade inigualável."
    // const about4 = "Além disso, estou comprometido em oferecer um serviço ao cliente de classe mundial, priorizando a comunicação transparente, o respeito aos prazos e a colaboração contínua. Estou aqui para ouvir suas necessidades, entender seus objetivos e trabalhar em estreita colaboração com você para criar soluções que não apenas atendam, mas excedam suas expectativas."
    const about5 = "Então, se você está procurando um parceiro confiável para levar sua presença digital para o próximo nível, não hesite em entrar em contato. Estou ansioso para iniciar uma parceria bem-sucedida e ajudar sua empresa a alcançar novos patamares de sucesso online. Vamos transformar suas visões em realidade juntos!"
</script>

<template>
    <div class="h-full p-10 flex flex-col justify-center items-center 2xl:pt-32 pt-20" :ref="ref">
        <div class="tracking-tight text-5xl font-extrabold m-4">Sobre</div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-10">
            <div class="text-justify text-slate-300 sm:w-1/2 flex flex-col gap-4">
                <p>
                    {{ about1 }}
                </p>
                <p>
                    {{ about3 }}
                </p>
                <p>
                    {{ about5 }}
                </p>
                </div>
            <div class="relative sm:w-[30rem]">
                <img src="../assets/Programmer-amico.svg" alt="" class="sm:-mt-16 drop-shadow-2xl">
            </div>
        </div>
    </div>
</template>