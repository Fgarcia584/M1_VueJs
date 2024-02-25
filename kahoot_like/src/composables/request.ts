import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/main";
import { Quiz } from "src/types";


export async function getQuizzes() {
    const querySnapshot = await getDocs(collection(db, "quizs"));
    const quizzes: Quiz[] = [];
    querySnapshot.forEach((doc) => {
        quizzes.push(doc.data() as Quiz);
        quizzes[quizzes.length - 1].id = doc.id;
    });
    return quizzes;
}

export async function getQuizById(id: string) {
    const docRef = doc(db, "quizs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

export async function addQuiz(quiz: Quiz) {
    await addDoc(collection(db, "quizs"), quiz);
}