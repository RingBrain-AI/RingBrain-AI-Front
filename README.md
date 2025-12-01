# RingBrain AI - Landing Page

Landing page moderna para captación de leads con formulario de registro que se conecta a un backend Java.

## 🚀 Características

- ✨ Diseño moderno y atractivo inspirado en Riwi.io
- 📱 Totalmente responsive
- 🎨 Animaciones suaves y efectos visuales premium
- 📋 Formulario de registro con validación completa
- 🔌 Integración con API REST (Java Spring Boot)
- ✅ Manejo de errores robusto
- 🎯 Validación de datos en tiempo real

## 🛠️ Tecnologías

- **React 19** - Framework frontend
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Hook Form** - Manejo de formularios
- **Yup** - Validación de esquemas
- **Axios** - Cliente HTTP para API REST
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone <repository-url>
cd RingBrain-AI-Front
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Configura las variables de entorno:**
```bash
cp .env.example .env
```

4. **Edita el archivo `.env` con la URL de tu backend Java:**
```env
VITE_API_URL=http://localhost:8080/api
```

## 🚀 Uso

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 🔌 Integración con Backend Java

### Endpoint Esperado

El frontend envía los datos del formulario a:
```
POST /api/registrations
```

### Estructura de Datos Enviados

```json
{
  "correo": "string",
  "nombreCompleto": "string",
  "tipoDocumento": "string",
  "numeroDocumento": "string",
  "telefonoContacto": "string",
  "fechaNacimiento": "date",
  "genero": "string",
  "horarioEstudio": "string",
  "ocupacionActual": "string",
  "nivelEscolaridad": "string",
  "departamentoResidencia": "string",
  "municipioResidencia": "string",
  "estratoSocioeconomico": "string",
  "nivelProgramacion": "string",
  "tipoConvenio": "string",
  "politicaPrivacidad": "boolean"
}
```

### Respuesta Esperada del Backend

**Éxito (200 OK):**
```json
{
  "success": true,
  "message": "Registro exitoso",
  "data": {
    "id": "123",
    ...
  }
}
```

**Error (4xx/5xx):**
```json
{
  "success": false,
  "message": "Descripción del error"
}
```

### Configuración CORS en el Backend

Asegúrate de configurar CORS en tu backend Java para permitir peticiones desde el frontend:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:5173", "http://localhost:3000")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

## 📁 Estructura del Proyecto

```
RingBrain-AI-Front/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Hero.jsx              # Sección hero principal
│   │   ├── Features.jsx          # Características del programa
│   │   └── RegistrationForm.jsx  # Formulario de registro
│   ├── services/        # Servicios y APIs
│   │   └── api.js                # Cliente Axios configurado
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── .env.example         # Ejemplo de variables de entorno
├── .gitignore          # Archivos ignorados por Git
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de Tailwind
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 🎨 Personalización

### Colores del Tema

Edita `src/index.css` para cambiar los colores principales:

```css
:root {
  --primary: #6366f1;
  --secondary: #a855f7;
  --dark: #0f172a;
}
```

### Opciones del Formulario

Edita `src/components/RegistrationForm.jsx` para modificar las opciones de los selectores (ciudades, departamentos, etc.).

## 📝 Campos del Formulario

| Campo | Tipo | Validación |
|-------|------|------------|
| Correo | Email | Formato válido, requerido |
| Nombre Completo | Text | Mínimo 3 caracteres, requerido |
| Tipo de Documento | Select | Requerido |
| Número de Documento | Text | Requerido |
| Teléfono de Contacto | Tel | Requerido |
| Fecha de Nacimiento | Date | Requerida |
| Género | Select | Requerido |
| Horario de Estudio | Select | Requerido |
| Ocupación Actual | Select | Requerida |
| Nivel de Escolaridad | Select | Requerido |
| Departamento | Select | Requerido |
| Municipio | Select | Requerido |
| Estrato Socioeconómico | Select | Requerido |
| Nivel de Programación | Select | Requerido |
| Tipo de Convenio | Select | Requerido |
| Política de Privacidad | Checkbox | Debe ser aceptada |

## 🔒 Seguridad

- ✅ Validación de datos en frontend con Yup
- ✅ Variables de entorno para configuración sensible
- ✅ Timeout de 10 segundos en peticiones HTTP
- ✅ Manejo de errores robusto
- ✅ Archivo `.env` excluido de Git

## 🐛 Manejo de Errores

El frontend maneja tres tipos de errores:

1. **Errores del servidor (4xx/5xx)**: Muestra el mensaje del backend
2. **Errores de red**: Muestra mensaje de conexión
3. **Errores inesperados**: Muestra mensaje genérico

## 🚀 Despliegue

### Variables de Entorno en Producción

Asegúrate de configurar `VITE_API_URL` con la URL de producción de tu backend:

```env
VITE_API_URL=https://api.tudominio.com/api
```

### Build y Deploy

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/` listos para ser desplegados en cualquier servidor web o CDN.

## 📄 Licencia

MIT License

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para preguntas o problemas, por favor abre un issue en el repositorio.
