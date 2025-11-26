# ⚽ Tier List - Atacantes do Futebol Mundial

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*Uma aplicação interativa para rankear os melhores atacantes do futebol mundial utilizando drag and drop!*

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Objetivos de Aprendizagem](#-objetivos-de-aprendizagem)
- [Jogadores Disponíveis](#-jogadores-disponíveis)
- [Desafios Extras Implementados](#-desafios-extras-implementados)

---

## 📖 Sobre o Projeto

Este projeto consiste em uma **Tier List interativa** desenvolvida para a disciplina de Programação Web. A aplicação permite que os usuários classifiquem atacantes do futebol mundial em diferentes níveis (S, A, B, C, D) utilizando a funcionalidade de **arrastar e soltar (drag and drop)**.

O conceito de "Tier List" é amplamente utilizado na cultura da internet para classificar itens, personagens ou, neste caso, jogadores de futebol, em categorias hierárquicas, onde **S** representa o nível mais alto (os melhores) e **D** o mais baixo.

---

## ✨ Funcionalidades

- 🎯 **Arrastar e Soltar**: Arraste os jogadores da galeria para as diferentes categorias (S, A, B, C, D)
- 🔄 **Reorganização**: Mova jogadores entre as diferentes tiers livremente
- ↩️ **Retorno à Galeria**: Arraste jogadores de volta para a galeria principal
- 🎨 **Feedback Visual**: Destaque visual ao arrastar sobre as áreas de drop
- 📱 **Design Responsivo**: Interface adaptada com TailwindCSS
- 🖼️ **Galeria de Jogadores**: 25 atacantes de elite do futebol mundial

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização customizada |
| **JavaScript (ES6+)** | Lógica de drag and drop e manipulação do DOM |
| **TailwindCSS** | Framework CSS utilitário para estilização rápida |
| **Google Fonts** | Fontes Inter e Roboto para tipografia moderna |

---

## 📁 Estrutura do Projeto

```
Tier-List-Futebol/
│
├── README.md                 # Documentação do projeto
│
└── templates/
    ├── index.html            # Página principal da aplicação
    ├── script.js             # Lógica JavaScript (drag and drop)
    │
    └── images/               # Imagens dos jogadores
        ├── dembele.png
        ├── doku.png
        ├── estevao.png
        ├── foden.png
        ├── griezzmann.png
        ├── gyokeres.png
        ├── haaland.png
        ├── julianalvarez.png
        ├── kane.png
        ├── kvaratskelia.png
        ├── lautaromartinez.png
        ├── martinelli.png
        ├── mbappe.png
        ├── olise.png
        ├── osihen.png
        ├── palmer.png
        ├── pedro.png
        ├── rafaelleao.png
        ├── raphinha.png
        ├── rashford.png
        ├── rodrygo.png
        ├── saka.png
        ├── salah.png
        ├── vinijr.png
        └── yamal.png
```

---

## 🚀 Como Usar

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/kauaafeelix/Tier-List-Futebol.git
```

### Passo 2: Navegue até o Diretório

```bash
cd Tier-List-Futebol/templates
```

### Passo 3: Abra no Navegador

Abra o arquivo `index.html` no seu navegador preferido:

- Clique duas vezes no arquivo `index.html`, ou
- Use o Live Server do VS Code, ou
- Abra via terminal: `open index.html` (macOS) / `start index.html` (Windows)

### Como Rankear os Jogadores

1. **Arraste** qualquer jogador da galeria inferior
2. **Solte** na tier desejada (S, A, B, C ou D)
3. **Reorganize** arrastando entre as diferentes tiers
4. **Retorne** jogadores para a galeria arrastando de volta

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido com foco nos seguintes objetivos educacionais:

| Objetivo | Descrição |
|----------|-----------|
| 📌 **Seleção de Elementos** | Praticar a seleção de elementos do DOM com `querySelector` e `querySelectorAll` |
| 🎪 **Manipulação do DOM** | Adicionar, remover e mover elementos dinamicamente na página |
| 🖱️ **Eventos JavaScript** | Implementar event listeners para drag and drop (`dragstart`, `dragend`, `dragover`, `drop`, etc.) |
| 🎨 **Manipulação de Estilos** | Alterar classes CSS e estilos inline via JavaScript |
| 💡 **Experiência do Usuário** | Melhorar a UX com feedback visual durante as interações |

---

## ⚽ Jogadores Disponíveis

A Tier List inclui 25 atacantes de elite do futebol mundial:

<div align="center">

| Jogador | Clube/País |
|---------|------------|
| Ousmane Dembélé | PSG / França |
| Jeremy Doku | Manchester City / Bélgica |
| Estêvão | Palmeiras / Brasil |
| Antoine Griezmann | Atlético de Madrid / França |
| Viktor Gyökeres | Sporting CP / Suécia |
| Erling Haaland | Manchester City / Noruega |
| Julian Álvarez | Atlético de Madrid / Argentina |
| Harry Kane | Bayern de Munique / Inglaterra |
| Khvicha Kvaratskhelia | PSG / Geórgia |
| Lautaro Martínez | Inter de Milão / Argentina |
| Gabriel Martinelli | Arsenal / Brasil |
| Kylian Mbappé | Real Madrid / França |
| Michael Olise | Bayern de Munique / França |
| Victor Osimhen | Galatasaray / Nigéria |
| Cole Palmer | Chelsea / Inglaterra |
| Pedro Guilherme | Flamengo / Brasil |
| Rafael Leão | Milan / Portugal |
| Raphinha | Barcelona / Brasil |
| Marcus Rashford | Manchester United / Inglaterra |
| Rodrygo Goes | Real Madrid / Brasil |
| Bukayo Saka | Arsenal / Inglaterra |
| Mohamed Salah | Liverpool / Egito |
| Vinícius Júnior | Real Madrid / Brasil |
| Lamine Yamal | Barcelona / Espanha |

</div>

---

## 🏆 Desafios Extras Implementados

✅ **Arrastar de volta para a galeria**: Os jogadores podem ser devolvidos da tier para a galeria principal

✅ **Feedback visual aprimorado**: Destaque com borda azul tracejada e fundo transparente ao arrastar sobre as zonas

✅ **Animações suaves**: Transições e efeitos de hover para melhor experiência do usuário

✅ **Redimensionamento dinâmico**: As imagens são redimensionadas automaticamente ao entrar nas tiers

---

## 📝 Conceitos de JavaScript Aplicados

```javascript
// Seleção de elementos
const images = document.querySelectorAll('#zonaImagens img');
const dropZones = document.querySelectorAll('#zonaS, #zonaA, #zonaB, #zonaC, #zonaD');

// Eventos de Drag and Drop utilizados
img.addEventListener('dragstart', handleDragStart);
img.addEventListener('dragend', handleDragEnd);
zone.addEventListener('dragover', handleDragOver);
zone.addEventListener('drop', handleDrop);
zone.addEventListener('dragenter', handleDragEnter);
zone.addEventListener('dragleave', handleDragLeave);

// Manipulação de estilos
element.style.opacity = '0.5';
element.classList.add('drag-over');
```

---

## 👨‍💻 Autor

Desenvolvido por [@Kauã Felix](https://github.com/kauaafeelix) como atividade prática para a disciplina de **Programação Front-End**.

---

## 📄 Licença

Este projeto é de uso educacional e livre para estudos.

---

<div align="center">

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐

</div>
