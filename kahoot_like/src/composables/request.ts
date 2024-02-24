import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/main";
import { Quiz } from "src/types";


export async function getQuizzes() {
    const querySnapshot = await getDocs(collection(db, "quizs"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
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