
import { User } from "@/types";

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    password: "password123",
    role: "teacher",
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane@example.com",
    password: "password123",
    role: "admin",
    avatar: "/placeholder.svg"
  }
];

// In a real application, this would be handled securely with proper authentication
export const login = (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = MOCK_USERS.find(u => u.email === email && u.password === password);
      if (user) {
        // Don't include password in the returned user object
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        resolve(userWithoutPassword as User);
      } else {
        resolve(null);
      }
    }, 1000);
  });
};

export const signup = (name: string, email: string, password: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Check if user already exists
      const existingUser = MOCK_USERS.find(u => u.email === email);
      if (existingUser) {
        resolve(null);
        return;
      }
      
      // Create new user
      const newUser = {
        id: String(MOCK_USERS.length + 1),
        name,
        email,
        password,
        role: "teacher" as const,
        avatar: "/placeholder.svg"
      };
      
      // In a real app, this would add to a database
      MOCK_USERS.push(newUser);
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = newUser;
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      resolve(userWithoutPassword);
    }, 1000);
  });
};

export const logout = (): void => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  if (userJson) {
    return JSON.parse(userJson) as User;
  }
  return null;
};
