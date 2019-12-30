import {Injectable} from '@angular/core';
import {BibliographyBook} from '../models/bibliography_book';

@Injectable({
  providedIn: 'root'
})
export class BibliographyService {

  books: BibliographyBook[] = [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "S Russell, P Norvig",
      description: "Artificial Intelligence: A Modern Approach (AIMA) is a university textbook on artificial intelligence, written by Stuart J. Russell and Peter Norvig. It was first published in 1995 and the third edition of the book was released 11 December 2009.",
      image: "http://prodimage.images-bn.com/pimages/9780137903955_p0_v2_s1200x630.jpg"
    },
    {
      title: "AI Superpowers",
      author: "Kai-Fu Lee",
      description: "The Bill Gates of China and AI pioneer and entreprenuer shares his insider predictions on how AI will shape the world, and offers a blueprint for human and AI coexistence.",
      image: "https://storage.googleapis.com/aisp-assets/images/lp-book-image.png?mtime=20181113131624"
    },
    {
      title: "Introdution to algorithms",
      author: "Thomas Cormen",
      description: "Introduction to Algorithms, the 'bible' of the field, is a comprehensive textbook covering the full spectrum of modern algorithms",
      image: "https://n4.sdlcdn.com/imgs/b/z/6/Introduction-To-Algorithms-Paperback-English-SDL474587042-1-8ecff.jpg"
    },
    {
      title: "Practical Computer Vision",
      author: "O'Reilly",
      description: "Learn how to build your own computer vision (CV) applications quickly and easily with SimpleCV, an open source framework written in Python.",
      image: "https://images-na.ssl-images-amazon.com/images/I/51Di4QdnuML._SX379_BO1,204,203,200_.jpg"
    },
    {
      title: "Designing Interfaces",
      author: "O'Reily",
      description: "Anyone who’s serious about designing interfaces should have this book on their shelf for reference. It’s the most comprehensive cross-platform examination of common interface patterns anywhere.",
      image: "https://designinginterfaces.com/wp-content/themes/div2/images/cover-400x525.jpg"
    },
  ];

  constructor() {
  }

  getAllBooks(): BibliographyBook[] {
    return this.books;
  }

}
