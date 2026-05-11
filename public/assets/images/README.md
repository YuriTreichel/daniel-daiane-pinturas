# Diretório de Imagens

Você pode colocar suas imagens aqui.

### Como usar no código:

1. **Via pasta `public` (Recomendado para caminhos diretos):**
   - Caminho: `/assets/images/sua-imagem.jpg`
   - Exemplo: `<img src="/assets/images/logo.png" />`

2. **Via pasta `src/assets` (Recomendado para otimização do Vite):**
   - Importe no topo do arquivo: `import minhaImagem from '../assets/images/minha-imagem.jpg';`
   - Use no componente: `<img src={minhaImagem} />`
