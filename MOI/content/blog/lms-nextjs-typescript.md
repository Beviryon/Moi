---
title: "Créer une plateforme LMS moderne avec Next.js et TypeScript"
description: "Guide complet pour développer une plateforme de formation en ligne avec authentification sécurisée, gestion des utilisateurs et interface moderne."
date: 2025-01-27
author: "Beviryon Issanga Ngoulou"
tags: ["Next.js", "TypeScript", "LMS", "Authentication", "Tutorial", "Education"]
image: "/blog/lms-nextjs-typescript.jpg"
---

# Créer une plateforme LMS moderne avec Next.js et TypeScript

Dans cet article, je vais vous expliquer comment j'ai développé **Trevixia Formation**, une plateforme de formation en ligne moderne avec Next.js et TypeScript. Cette plateforme permet aux étudiants et administrateurs d'accéder à leurs espaces respectifs avec une authentification sécurisée.

## 🎯 Objectifs du projet

La plateforme Trevixia Formation devait répondre à plusieurs besoins :

- **Authentification dual** : Espaces séparés pour étudiants et administrateurs
- **Interface moderne** : Design responsive avec dégradés et animations
- **Sécurité** : Gestion sécurisée des sessions utilisateurs
- **Performance** : Chargement rapide et optimisations
- **Accessibilité** : Interface intuitive pour tous les utilisateurs

## 🏗️ Architecture technique

### Stack technologique

```typescript
// Technologies principales
const techStack = {
  frontend: "Next.js 14",
  language: "TypeScript",
  styling: "TailwindCSS",
  authentication: "NextAuth.js",
  database: "JSON (développement)",
  deployment: "Vercel"
}
```

### Structure du projet

```
trevixia-formation/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── student/
│   │   └── dashboard/
│   └── admin/
│       └── dashboard/
├── components/
│   ├── auth/
│   ├── ui/
│   └── forms/
├── lib/
│   ├── auth.ts
│   └── utils.ts
└── types/
    └── user.ts
```

## 🔐 Système d'authentification

### Configuration NextAuth.js

```typescript
// lib/auth.ts
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Vérification des identifiants
        const user = await verifyUser(credentials)
        
        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            userType: credentials.userType
          }
        }
        
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.userType = user.userType
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
        session.user.userType = token.userType
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
}
```

### Interface de connexion

```tsx
// app/login/page.tsx
"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [userType, setUserType] = useState<"student" | "admin">("student")
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      userType: userType,
      redirect: false
    })

    if (result?.ok) {
      router.push(`/${userType}/dashboard`)
    } else {
      // Gestion des erreurs
      console.error("Erreur de connexion")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Connexion
          </h1>
          
          <p className="text-gray-600 text-center mb-8">
            Choisissez votre type de connexion pour accéder à la plateforme
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setUserType("student")}
              className={`p-4 rounded-lg border-2 transition-all ${
                userType === "student" 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="font-semibold">Étudiant</h3>
                <p className="text-sm text-gray-600">Accédez à vos cours</p>
              </div>
            </button>

            <button
              onClick={() => setUserType("admin")}
              className={`p-4 rounded-lg border-2 transition-all ${
                userType === "admin" 
                  ? "border-purple-500 bg-purple-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="font-semibold">Administrateur</h3>
                <p className="text-sm text-gray-600">Gestion des formations</p>
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                userType === "student" 
                  ? "bg-blue-500 hover:bg-blue-600" 
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
```

## 🎨 Design et interface utilisateur

### Système de couleurs

```css
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a'
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  }
}
```

### Composants réutilisables

```tsx
// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg border border-gray-200
      ${hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}

// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick,
  disabled = false 
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
  
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300",
    secondary: "bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-300",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300"
  }
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

## 📊 Gestion des données

### Types TypeScript

```typescript
// types/user.ts
export interface User {
  id: string
  email: string
  name: string
  role: "student" | "admin"
  avatar?: string
  createdAt: Date
  lastLogin?: Date
}

export interface Student extends User {
  role: "student"
  courses: Course[]
  progress: Progress[]
  grades: Grade[]
}

export interface Admin extends User {
  role: "admin"
  permissions: Permission[]
  managedCourses: Course[]
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: number
  lessons: Lesson[]
  students: string[]
  createdAt: Date
}

export interface Lesson {
  id: string
  title: string
  content: string
  videoUrl?: string
  duration: number
  order: number
  resources: Resource[]
}

export interface Progress {
  courseId: string
  lessonId: string
  completed: boolean
  completedAt?: Date
  timeSpent: number
}
```

### Hooks personnalisés

```typescript
// hooks/useAuth.ts
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useAuth(requiredRole?: "student" | "admin") {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return

    if (!session) {
      router.push("/login")
      return
    }

    if (requiredRole && session.user.role !== requiredRole) {
      router.push("/unauthorized")
      return
    }
  }, [session, status, router, requiredRole])

  return {
    user: session?.user,
    isLoading: status === "loading",
    isAuthenticated: !!session
  }
}

// hooks/useCourses.ts
import { useState, useEffect } from "react"
import { Course } from "@/types/user"

export function useCourses(userRole: "student" | "admin") {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/courses?role=${userRole}`)
        
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des cours")
        }
        
        const data = await response.json()
        setCourses(data.courses)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Une erreur est survenue")
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [userRole])

  return { courses, loading, error, refetch: () => setLoading(true) }
}
```

## 🚀 Déploiement et optimisation

### Configuration Vercel

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXTAUTH_URL": "https://formation-trevixia-7wye.vercel.app",
    "NEXTAUTH_SECRET": "@nextauth_secret"
  }
}
```

### Optimisations de performance

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

## 📈 Résultats et apprentissages

### Performances obtenues

- **Lighthouse Score** : 95+ sur tous les critères
- **Temps de chargement** : < 2 secondes
- **Accessibilité** : Score de 100/100
- **SEO** : Optimisé pour les moteurs de recherche

### Défis relevés

1. **Authentification sécurisée** : Implémentation d'un système robuste avec NextAuth.js
2. **Interface responsive** : Design adaptatif pour tous les appareils
3. **Gestion des états** : Optimisation des performances avec des hooks personnalisés
4. **Sécurité** : Protection contre les attaques courantes (XSS, CSRF)

### Technologies apprises

- **Next.js 14** : App Router et Server Components
- **TypeScript** : Typage strict et interfaces
- **NextAuth.js** : Authentification sécurisée
- **TailwindCSS** : Design system moderne
- **Vercel** : Déploiement et optimisation

## 🔗 Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [NextAuth.js Guide](https://next-auth.js.org/getting-started/introduction)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🎯 Prochaines étapes

Pour améliorer encore la plateforme, je prévois d'ajouter :

- **Notifications en temps réel** avec WebSockets
- **Système de chat** intégré
- **Analytics avancés** pour le suivi des performances
- **API REST complète** pour l'intégration mobile
- **Tests automatisés** avec Jest et Cypress

---

*Cet article vous a-t-il aidé ? N'hésitez pas à me poser des questions ou à partager vos propres expériences avec Next.js et TypeScript !*

**Lien vers le projet** : [Trevixia Formation](https://formation-trevixia-7wye.vercel.app/login)
