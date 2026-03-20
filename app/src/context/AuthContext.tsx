import React, { createContext, useContext, useState, useCallback } from 'react';

// User interface
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

// Auth context interface
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName?: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Login function - Firebase ready structure
  const login = useCallback(async (email: string, _password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with Firebase Auth
      // import { signInWithEmailAndPassword } from 'firebase/auth';
      // const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      // Mock login for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful login
      setUser({
        uid: 'mock-uid-123',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
      });
      
      console.log('Login successful - Integrate Firebase Auth here');
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Signup function - Firebase ready structure
  const signup = useCallback(async (email: string, _password: string, displayName?: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // TODO: Replace with Firebase Auth
      // import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
      // const { user } = await createUserWithEmailAndPassword(auth, email, password);
      // await updateProfile(user, { displayName });
      
      // Mock signup for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful signup
      setUser({
        uid: 'mock-uid-' + Date.now(),
        email: email,
        displayName: displayName || email.split('@')[0],
        photoURL: null,
      });
      
      console.log('Signup successful - Integrate Firebase Auth here');
    } catch (err: any) {
      setError(err.message || 'Failed to create account. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout function - Firebase ready structure
  const logout = useCallback(async () => {
    setLoading(true);
    
    try {
      // TODO: Replace with Firebase Auth
      // import { signOut } from 'firebase/auth';
      // await signOut(auth);
      
      // Mock logout
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
      
      console.log('Logout successful - Integrate Firebase Auth here');
    } catch (err: any) {
      setError(err.message || 'Failed to logout.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
