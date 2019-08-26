
let rerenderEntireTree = () => {};

let posts = [
    {name: 'First name', content: 'First post content'},
    {name: 'Second name', content: 'Second post content'},
    {name: 'Third name', content: 'Third post content'}
];

let profilePage = {
    posts,
    newPostText: '',
    profileName: 'People name',
    updatePostText: (postText) => {
        profilePage.newPostText = postText;
        rerenderEntireTree();
    }
};

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

export let addPost = () => {
    let postMessage = state.profilePage.newPostText;
    let newPost = {
        id: 5,
        name: postMessage + ' name',
        content: postMessage
    };
    state.posts.push(newPost);
    profilePage.newPostText = '';

    rerenderEntireTree();
};

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}


let state = {posts, profilePage, dialogsPage};

export default state;