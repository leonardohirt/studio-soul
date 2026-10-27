# 🎵 Studio Soul — Site Oficial (Guarapuava - PR)

Site moderno, responsivo, de alta performance e com SEO local desenvolvido em **React**, **Vite** e **Tailwind CSS** para o **Studio Soul** — Instituto de Música & Estúdio de Gravação de Áudio e Vídeo localizado em **Guarapuava, Paraná**.

---

## 🌟 Destaques e Funcionalidades

1. **Identidade Visual Premium**:
   - Paleta escura (grafite/preto) com detalhes em **dourado, âmbar e azul metálico** combinando com a logomarca original do Studio Soul.
   - Glassmorphism, efeitos luminosos e equalizadores sonoros animados.
   - 100% responsivo para celulares, tablets e desktops.

2. **Aulas de Música (Instituto de Música)**:
   - Violão & Fingerstyle, Guitarra Elétrica, Teclado & Piano, Canto & Técnica Vocal, Bateria Acústica, Baixo Elétrico e Produção Musical.
   - Níveis do iniciante ao avançado, formatos individual e duplas.
   - **Tabela Oficial de Mensalidades** integrada:
     - **Mensal:** R$ 230
     - **Trimestral:** R$ 200
     - **Semestral:** R$ 180
     - **Anual:** R$ 170
     - Opção de 1 aula semanal e parcelamento no cartão até 10x.
   - Botão para agendar aula experimental.

3. **Gravações & Produção Musical (André Prado)**:
   - Destaque para o produtor **André Prado (+20 anos de experiência)**.
   - **Tabela Oficial de Produção**:
     - **Pacote 1 Música:** R$ 1.500,00 (1 produção completa + arranjos + mixagem e masterização)
     - **Pacote 2 Músicas:** R$ 2.600,00 (2 produções completas + arranjos + mixagem e masterização)
     - **Pacote 3 Músicas:** R$ 3.000,00 (3 produções completas + arranjos + mixagem e masterização)
     - Meios de pagamento aceitos: Pix, Cartão de Crédito e Dinheiro.
   - Player de áudio interativo com visualizador estéreo e controle de reprodução.

4. **Pacotes de Hora de Ensaio (Atualização Janeiro 2026)**:
   - Salas 1 a 5 com tabela fiel:
     - 1. Sala com ar condicionado — **R$ 50/h**
     - 2. Sala com bateria completa — **R$ 60/h**
     - 3. Sala com bateria e caixa de som — **R$ 70/h**
     - 4. Sala com bateria, caixa de som e microfones — **R$ 80/h**
     - 5. Pacote completo incluso amplificador de guitarra — **R$ 90/h**
   - Aviso de horários após as 22h, domingos e feriados.

5. **Simulador e Calculadora Interativa**:
   - Permite ao visitante simular planos de aulas, pacotes de gravação com audiovisual e horas de ensaio com cálculo em tempo real e exportação direta para o WhatsApp!

6. **Encartes Oficiais do Studio Soul**:
   - Galeria dos flyers originais fornecidos com visualização ampliada em tela cheia (lightbox).

7. **Galeria de Fotos & Vídeos**:
   - Filtros por categoria (Estúdio, Gravações, Aulas, Equipamentos) e lightbox.
   - Espaço para canal do YouTube e Instagram.

8. **Agendamento Inteligente & WhatsApp**:
   - Formulário completo com validação de campos, tipo de serviço, preferência de horário e nível de experiência.
   - Gera mensagem pré-formatada e abre diretamente a conversa no WhatsApp do estúdio.
   - Botão flutuante de WhatsApp pulsante com balão de boas-vindas.

9. **Contato e Localização**:
   - Endereço central em Guarapuava - PR, horários de funcionamento, telefone e mapa interativo do Google Maps.

---

## 🚀 Como Executar o Projeto

No terminal do seu computador (PowerShell ou Bash):

```bash
# 1. Acesse a pasta do projeto
cd C:\Users\leona\.gemini\antigravity\scratch\studio-soul

# 2. Inicie o servidor de desenvolvimento
npm.cmd run dev
# ou
npx.cmd vite
```

O site abrirá em `http://localhost:3000` (ou na porta indicada no terminal).

---

## 📦 Como Gerar a Versão Final para Publicação (Deploy)

```bash
npm.cmd run build
```

Os arquivos otimizados e prontos para hospedagem (Vercel, Netlify, Hostgator, etc.) ficarão salvos na pasta `dist/`.

---

## 📁 Estrutura de Arquivos

```
studio-soul/
├── public/
│   └── images/
│       ├── logo-studio-soul.jpg      # Logo oficial
│       ├── tabela-mensalidades.jpg   # Flyer de mensalidades
│       ├── orcamento-gravacao.jpg    # Flyer do André Prado
│       └── pacotes-ensaio.jpg        # Flyer de ensaios
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Menu fixo responsivo
│   │   ├── Hero.jsx                  # Banner principal com CTAs
│   │   ├── CoursesSection.jsx        # Aulas e instrumentos
│   │   ├── RecordingSection.jsx      # Produção musical e player
│   │   ├── RehearsalSection.jsx      # Salas de ensaio 1 a 5
│   │   ├── PricingCalculator.jsx     # Calculadora interativa
│   │   ├── OfficialFlyersSection.jsx # Encartes oficiais em alta
│   │   ├── AboutSection.jsx          # História, André Prado e estrutura
│   │   ├── GallerySection.jsx        # Galeria com lightbox
│   │   ├── TestimonialsSection.jsx   # Depoimentos e avaliações
│   │   ├── BookingForm.jsx           # Formulário integrado ao WhatsApp
│   │   ├── ContactSection.jsx        # Mapa, horários e FAQ
│   │   ├── Footer.jsx                # Rodapé com links locais
│   │   ├── FloatingWhatsApp.jsx      # Botão flutuante pulsante
│   │   └── Icons.jsx                 # Ícones SVG personalizados
│   ├── data/
│   │   └── studioData.js             # Todos os dados, preços e contatos
│   ├── App.jsx                       # Componente raiz
│   ├── index.css                     # Estilos Tailwind e animações
│   └── main.jsx                      # Entrada do React
├── index.html                        # Meta tags e Google Fonts
├── tailwind.config.js
└── package.json
```
# studio-soul
