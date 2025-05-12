
# MixMatch

**MixMatch** is a full-stack web application designed to provide a seamless user experience through a modern interface and robust backend. Built with **React**, **TypeScript**, and **ASP.NET Core**, MixMatch showcases a modular architecture that promotes scalability and maintainability.

## 🧩 Key Features

- **Interactive Home Slider**: The `HomeSlider` component utilizes `react-slick` to display a responsive and dynamic image carousel on the homepage.
- **Component-Based Design**: The application is structured using a feature folder architecture, allowing for organized and reusable components.
- **Type Safety**: Leveraging TypeScript ensures type safety across the application, reducing potential runtime errors.
- **Full-Stack Integration**: Combines a React frontend with an ASP.NET Core backend, facilitating efficient data handling and API integration.
- **Responsive Design**: Ensures optimal viewing experiences across a wide range of devices.

## 📁 Project Structure

```
mixmatch/
├── .github/workflows/        # CI/CD workflows
├── .vscode/                  # VSCode configurations
├── API/                      # ASP.NET Core API controllers
├── Application/              # Business logic and application services
├── Domain/                   # Domain entities and interfaces
├── Infrastructure/           # Infrastructure services (e.g., data access)
├── Persistence/              # Database context and migrations
├── client-app/               # React frontend application
│   ├── public/
│   └── src/
│       ├── app/              # Application-wide settings and configurations
│       ├── common/           # Reusable UI components
│       ├── features/
│       │   ├── home/
│       │   │   └── HomeSlider.tsx
│       │   └── account/      # Authentication and user management
│       └── layout/           # Layout components (e.g., header, footer)
├── Dockerfile                # Docker configuration
├── fly.toml                  # Fly.io deployment configuration
├── Reactivities.sln          # Solution file
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- .NET 6 SDK or later
- npm or yarn package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jocknuke/mixmatch.git
   cd mixmatch
   ```

2. **Set up the backend**:

   ```bash
   cd API
   dotnet restore
   dotnet build
   dotnet run
   ```

3. **Set up the frontend**:

   ```bash
   cd client-app
   npm install
   npm start
   ```

   The frontend will be accessible at `http://localhost:3000`, and the backend API will run on `http://localhost:5000` by default.

## 🖼 HomeSlider Component

The `HomeSlider.tsx` component, located in `client-app/src/features/home/`, is responsible for rendering the homepage's image carousel using the `react-slick` library. It dynamically maps over image data to create a smooth and responsive visual showcase.
