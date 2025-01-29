import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { db } from "../firebaseConfig"; // Importe a configuração do Firebase

// Interface para o usuário
interface User {
  id?: string;
  email: string;
  password: string;
}

// Função REGEX para validar o formato do email
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Função para validar a força da senha
const validatePassword = (password: string): boolean => {
  return password.length >= 6; // Exemplo: senha deve ter pelo menos 6 caracteres
};

// Função para cadastrar um novo usuário
export const cadastro = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Valida o email
    if (!validateEmail(email)) {
      return { success: false, message: "Email inválido." };
    }

    // Valida a senha
    if (!validatePassword(password)) {
      return { success: false, message: "Senha deve ter pelo menos 6 caracteres." };
    }

    // Verifica se o email já está cadastrado
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: "Email já cadastrado." };
    }

    // Cadastra o novo usuário no Firebase
    await addDoc(usersCollectionRef, { email, password });
    return { success: true, message: "Usuário cadastrado com sucesso!" };
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return { success: false, message: "Erro ao cadastrar usuário." };
  }
};

// Função para fazer login
export const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Valida o email
    if (!validateEmail(email)) {
      return { success: false, message: "Email inválido." };
    }

    // Busca o usuário no Firebase
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: "Email não cadastrado." };
    }

    // Verifica a senha
    const user = querySnapshot.docs[0].data() as User;
    if (user.password !== password) {
      return { success: false, message: "Senha incorreta." };
    }

    return { success: true, message: "Login realizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, message: "Erro ao fazer login." };
  }
};

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// Função para login com Google
export const loginWithGoogle = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user.email) {
      return { success: false, message: "Falha ao obter o email do usuário." };
    }

    // Verifica se o usuário já está no Firestore
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    // Se não estiver cadastrado, adiciona
    if (querySnapshot.empty) {
      await addDoc(usersCollectionRef, { email: user.email, password: "" }); // Senha vazia pois é login social
    }

    return { success: true, message: "Login com Google realizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    return { success: false, message: "Erro ao autenticar com Google." };
  }
};