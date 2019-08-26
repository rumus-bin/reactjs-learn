import {rerenderEntireTree} from "../render";

let posts = [
    {name: 'First name', content: 'First post content'},
    {name: 'Second name', content: 'Second post content'},
    {name: 'Third name', content: 'Third post content'}
];

let messages = [];

let dialogsPage = {
    dialogItems: [
        {name: "Dymych", id: 1},
        {name: "Petya", id: 2},
        {name: "Egor", id: 3},
        {name: "Sveta", id: 4},
    ],
    dialogMessages: [
        {id: 1, message: "Hello world"},
        {id: 2, message: "I am"},
        {id: 3, message: "A message"},
        {id: 4, message: "Component"},
    ]
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        name: 'New post name',
        content: postMessage
    };
    state.posts.push(newPost);

    rerenderEntireTree(state);
};


let state = {posts, dialogsPage};

export default state;