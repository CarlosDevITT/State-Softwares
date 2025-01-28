document.addEventListener('DOMContentLoaded', function() {
    // Estrutura JSON dos pacotes
    const pacotes = {
        "pacotes": [
            {
                "nome": "Standard",
                "preco": 25,
                "suporte_remoto": "2 horas por mês",
                "gestao_trafego": "R$ 90 em anúncios",
                "automacao": "Consultoria inicial para uma tarefa",
                "web_development": "Site básico",
                "marketing": "Consultoria mensal de marketing"
            },
            {
                "nome": "Premium",
                "preco": 50,
                "suporte_remoto": "5 horas por mês",
                "gestao_trafego": "R$ 200 em anúncios",
                "automacao": "Até 3 automações personalizadas",
                "web_development": "Site completo",
                "marketing": "Consultoria mensal de marketing"
            },
            {
                "nome": "Business",
                "preco": 100,
                "suporte_remoto": "Ilimitado",
                "gestao_trafego": "Orçamento flexível a partir de R$ 1.000",
                "automacao": "Implementação de automações avançadas",
                "web_development": "Site completo com funcionalidades personalizadas",
                "marketing": "Consultoria mensal de marketing"
            }
        ]
    };

    // Seleciona todos os botões "Assinar Agora"
    const buttons = document.querySelectorAll('.btn[data-package]');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o nome do pacote do atributo data -package
            const packageName = button.getAttribute('data-package');

            // Encontra o pacote correspondente no JSON
            const selectedPackage = pacotes.pacotes.find(pkg => pkg.nome === packageName);

            // Formata a mensagem com as informações do pacote
            const message = `Olá, gostaria de assinar o pacote ${selectedPackage.nome}. 
            Preço: R$ ${selectedPackage.preco} / mês
            Suporte Remoto: ${selectedPackage.suporte_remoto}
            Gestão de Tráfego: ${selectedPackage.gestao_trafego}
            Automação: ${selectedPackage.automacao}
            Web Development: ${selectedPackage.web_development}
            Marketing: ${selectedPackage.marketing}`;

            // Codifica a mensagem para URL
            const encodedMessage = encodeURIComponent(message);

            // Número de telefone (substitua pelo seu número)
            const phoneNumber = '+5592985130951';

            // Cria o link do WhatsApp
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Redireciona para o WhatsApp
            window.location.href = whatsappLink;
        });
    });
});