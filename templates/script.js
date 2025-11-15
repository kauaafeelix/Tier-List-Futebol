let draggedElement = null;

document.addEventListener('DOMContentLoaded', function() {
    setupDragAndDrop();
});

function setupDragAndDrop() {
    const images = document.querySelectorAll('#zonaImagens img');
    
    const dropZones = document.querySelectorAll('#zonaS, #zonaA, #zonaB, #zonaC, #zonaD');
    
    const imageZone = document.querySelector('#zonaImagens');
    
    images.forEach(img => {
        img.addEventListener('dragstart', handleDragStart);
        img.addEventListener('dragend', handleDragEnd);
        
        img.style.cursor = 'grab';
    });
    
    [...dropZones, imageZone].forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    draggedElement = this;
    this.style.cursor = 'grabbing';
    this.style.opacity = '0.5';
    
    const dragImage = this.cloneNode(true);
    dragImage.style.width = '100px';
    dragImage.style.height = '100px';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 50, 50);
    
    setTimeout(() => {
        document.body.removeChild(dragImage);
    }, 0);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    this.style.cursor = 'grab';
    
    document.querySelectorAll('.drag-over').forEach(zone => {
        zone.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault(); 
    return false;
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
    
    if (this.id !== 'zonaImagens') {
        this.style.backgroundColor = 'rgba(59, 130, 246, 0.3)'; // Azul claro transparente
        this.style.border = '2px dashed #3b82f6';
    }
}

function handleDragLeave(e) {
    if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over');
        
        if (this.id !== 'zonaImagens') {
            this.style.backgroundColor = '';
            this.style.border = '';
        }
    }
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    if (this.id !== 'zonaImagens') {
        this.style.backgroundColor = '';
        this.style.border = '';
    }
    
    if (draggedElement) {
        if (this.id.startsWith('zona') && this.id !== 'zonaImagens') {
            draggedElement.style.width = '80px';
            draggedElement.style.height = '80px';
            draggedElement.style.borderRadius = '5px';
            draggedElement.style.objectFit = 'cover';
            draggedElement.style.margin = '5px';
            
            this.appendChild(draggedElement);
        }
                else if (this.id === 'zonaImagens') {
            // Restaura estilo original
            draggedElement.style.width = '150px';
            draggedElement.style.height = '150px';
            draggedElement.style.margin = '';
            
            // Adiciona de volta à linha apropriada na zona de imagens
            const linha1 = document.querySelector('#linha1');
            if (linha1.children.length < 8) {
                linha1.appendChild(draggedElement);
            } else {
                const linha2 = document.querySelector('#linha2');
                if (linha2.children.length < 8) {
                    linha2.appendChild(draggedElement);
                } else {
                    const linha3 = document.querySelector('#linha3');
                    linha3.appendChild(draggedElement);
                }
            }
        }
        
        draggedElement = null;
    }
    
    return false;
}

// Função para resetar todas as imagens para a zona original
function resetTierList() {
    const images = document.querySelectorAll('img[draggable="true"]');
    const linha1 = document.querySelector('#linha1');
    const linha2 = document.querySelector('#linha2');
    const linha3 = document.querySelector('#linha3');
    
    // Limpa todas as linhas
    linha1.innerHTML = '';
    linha2.innerHTML = '';
    linha3.innerHTML = '';
    
    // Restaura estilo original e redistribui as imagens
    images.forEach((img, index) => {
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.margin = '';
        
        if (index < 8) {
            linha1.appendChild(img);
        } else if (index < 16) {
            linha2.appendChild(img);
        } else {
            linha3.appendChild(img);
        }
    });
}

// Adiciona CSS dinâmico para melhorar a experiência visual
const style = document.createElement('style');
style.textContent = `
    .drag-over {
        transition: all 0.3s ease;
    }
    
    img[draggable="true"]:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
    }
    
    img[draggable="true"]:active {
        transform: scale(0.95);
    }
    
    /* Estilo para quando a imagem está sendo arrastada */
    img[draggable="true"].dragging {
        opacity: 0.5;
        transform: rotate(5deg);
    }
`;
document.head.appendChild(style);