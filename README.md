# 🏥 Rimac Challenge - Cotizador de Seguros

<div align="center">

![Rimac Logo](https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=RIMAC)

**Una aplicación moderna para cotizar seguros de salud con React + TypeScript**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1.8-6E9F18?style=for-the-badge&logo=vitest)](https://vitest.dev/)

</div>

## ✨ Características Principales

- 🔐 **Formulario de registro** con validación de DNI y teléfono
- 🏷️ **Selección de planes** con descuentos automáticos (5% para terceros)
- 📊 **Cotización personalizada** según edad del usuario
- 📱 **Diseño responsive** para móvil y desktop
- 🧪 **Tests unitarios** para lógica crítica
- 🎨 **UI/UX moderna** siguiendo los estándares de Rimac

## 🚀 Demo en Vivo

[🌐 Repositorio](https://github.com/wldrocha/rimac-challenge)

[🌐 Ver Demo](https://rimac-challenge-demo.netlify.app) | [📱 Versión Móvil](https://rimac-challenge-demo.netlify.app)

## 🛠️ Stack Tecnológico

### Core
- **React 19** - UI Library moderna
- **TypeScript** - Tipado estático y mejor DX
- **Vite** - Build tool ultrarrápido
- **React Router DOM** - Navegación SPA

### Estado y Formularios
- **React Hook Form** - Manejo eficiente de formularios
- **Context API** - Estado global de la aplicación

### Testing
- **Vitest** - Framework de testing moderno

### Styles
- **SCSS** - Preprocesador CSS con variables y mixins

## 📁 Estructura del Proyecto

```
src/
├── 🎯 features/          # Funcionalidades por dominio
│   └── quote/           # Módulo de cotizaciones
│       ├── components/  # Componentes específicos
│       ├── context/     # Estado global
│       ├── pages/       # Páginas del flujo
│       └── __tests__/   # Tests unitarios
├── 🔧 shared/           # Código compartido
│   ├── components/      # Componentes reutilizables
│   ├── services/        # APIs y servicios
│   ├── utils/          # Utilidades y helpers
│   └── types/          # Tipos TypeScript globales
├── 🎨 styles/           # Estilos globales
└── 🧪 __tests__/        # Tests de integración
```

## 🏃‍♂️ Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm, yarn o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/wldrocha/rimac-challenge.git

# Navegar al directorio
cd rimac-challenge

# Instalar dependencias
npm install
# o
yarn install
# o
bun install
```

### Comandos Disponibles

```bash
# 🚀 Desarrollo
npm run dev          # Inicia servidor de desarrollo (http://localhost:5173)

# 🏗️ Build
npm run build        # Construye para producción
npm run preview      # Preview del build

# 🧪 Testing  
npm run test         # Tests en modo watch
npm run test:run     # Tests una sola vez
npm run test:coverage # Tests con coverage

# 🔍 Linting
npm run lint         # Analizar código con ESLint
```

## 🧪 Testing Strategy

### Cobertura Actual
- **Servicios API**: ✅ 100% - Tests críticos para fetchUser y fetchPlans
- **Utilidades**: ✅ 100% - Tests para validación de fechas y filtros de planes  
- **Lógica de negocio**: ✅ 100% - Tests para cálculo de descuentos

### Tests Prioritarios
1. 🔴 **API Services** - Comunicación externa
2. 🟠 **Quote Context** - Estado global de la app
3. 🟡 **Quote Form** - Validación de formularios
4. 🟢 **Plan Selection** - Lógica de descuentos

```bash
# Ejecutar tests específicos
npm run test src/shared/services/__tests__/
npm run test src/features/quote/__tests__/
```

## 🏗️ Arquitectura

### Patrones Implementados
- **Feature-Driven Development** - Organización por funcionalidades
- **Custom Hooks** - Lógica reutilizable
- **Context Pattern** - Estado global con React Context

### Flujo de Datos
```
Usuario → Formulario → Context → API → Estado → UI
```

## 📱 Responsive Design

- **Mobile First** - Diseño optimizado para móviles
- **Breakpoints**: 
  - Mobile: < 768px 
  - Desktop: > 1360px

## 🎯 Funcionalidades del Negocio

### Proceso de Cotización
1. **Registro** - Captura de datos personales (DNI, teléfono)
2. **Selección** - Elección entre "Para mí" o "Para alguien más"
3. **Planes** - Visualización de planes filtrados por edad
4. **Descuentos** - Aplicación automática del 5% para terceros
5. **Resumen** - Confirmación final de la cotización

### Reglas de Negocio
- Descuento del **5%** para planes de terceros
- Filtrado de planes según la **edad del usuario**
- Validación de **DNI peruano** (8 dígitos)
- Validación de **teléfono móvil** (9 dígitos)

## 🔒 Seguridad y Validación

- Validación client-side con React Hook Form
- TypeScript para prevención de errores en tiempo de desarrollo
- Manejo de errores de API

## 🚀 Performance

- **Bundle Optimization** con Vite
- **Optimización de assets** automática



## � Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.



<div align="center">

**¿Te gustó el proyecto? ¡Dale una ⭐!**

Hecho con ❤️ para Rimac Challenge

[🔗 LinkedIn](https://linkedin.com/in/wldrocha) • [🐦 Twitter](https://twitter.com/wldrocha) • [📧 Email](mailto:contact@wldrocha.dev)

</div>
