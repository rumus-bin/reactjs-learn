let store = {
    _state: { 
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                    {name: 'First name', content: 'First post content'},
                    {name: 'Second name', content: 'Second post content'},
                    {name: 'Third name', content: 'Third post content'}
                ],
            newPostText: '',
            peopleName: 'People name'           
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    updatePostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },
    addPost () {
        let postMessage = this._state.profilePage.newPostText;
        let newPost = {
            id: 5,
            name: postMessage + ' name',
            content: postMessage
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
    
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    }
}

export default store;
window.store = store;