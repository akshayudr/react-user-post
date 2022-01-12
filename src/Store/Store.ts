import { PostsDetails, UserDetails } from "../Model/model";
import { makeAutoObservable } from "mobx";
class Store {
  users: UserDetails[] = [];
  posts: PostsDetails[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  selectUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    this.users = users;
  };

  displayPost = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
    );
    const posts = await response.json();
    this.posts = posts;
  };
}

const store = new Store();
export default store;
