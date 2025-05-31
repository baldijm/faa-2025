# Imagen base con Node.js
FROM node:18-alpine

# Directorio dentro del contenedor donde vivirá la app
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala solo dependencias necesarias para producción
RUN npm install --only=production

# Copia todo el resto del proyecto (incluye .next después del build)
COPY . .

# Expone el puerto por defecto que usa Next.js
EXPOSE 3000

# Comando que ejecuta la app
CMD ["npm", "run", "start"]
