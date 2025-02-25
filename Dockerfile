FROM node:18

WORKDIR /app
# Paketleri yükle
COPY package*.json ./
# TypeScript bağımlılıklarını ekle
RUN npm install
# Uygulama kodunu kopyala
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["sh", "-c", "npm start"]
