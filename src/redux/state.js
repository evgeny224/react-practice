

    let rerenderEntireTree = () => {
        console.log("State chenged");
    }

let state = {
    profilePage:{
        postsData: [   
        {id: 1, message:"Hello World!", likes: 4},
        {id: 2, message:"It is my favorite day.", likes: 1},
        {id: 3, message:"I am glad to see you.", likes: 2},
        {id: 4, message:"Me too!", likes: 5},
        {id: 5, message:"How knows that man?", likes: 6},
    ],
    newPostText: "My-Information",},
    messagePage:{
        DialogsData: [ 
            {id: 1, name: "Eva", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24XtoREBBzSPEUzf0f4xVi6YnKS6yA0-rhKHbiAE-_oIAMzNSmrVPwuzN1d0ajPDaXj4&usqp=CAU"},
            {id: 2, name: "Olga", picture:"https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"},
            {id: 3, name: "Nick", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNHQ78zty5ZpAoBPBARyRvoPOhIgXXch0yg&usqp=CAU"},
            {id: 4, name: "Petr", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkIiZXLQBb45Inw27EERnx1l-cLedtIZfNQ&usqp=CAU"},
            {id: 5, name: "Kir", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzX9moaxytlCCkDQtPF2hVKZBEmDJyhBgoA&usqp=CAU"},
            {id: 6, name: "Alex", picture:"https://picsy.ru/images/photos/1200/2/rys-avatarka-31358666.jpg"},
        ],
        MessageData: [     
            {id: 1, message: "Hello every one!"},
            {id: 2, message: "Hi!"},
            {id: 3, message: "Nice to meet you!"},
            {id: 4, message: "Thank you very mutch!"},
        ],
        newMessageText: "Message Text",
    },
    sidebarPage:{
        FriendsData:[
            {id: 1, name:"Sveta", image:"https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg"},
            {id: 1, name:"Oleg", image:"https://media.istockphoto.com/vectors/handyman-nailing-vector-id494240419"},
            {id: 1, name:"Voctor", image:"https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_23.jpg"},
        ]
    }
}

    window.state = state;

    export const addPost = () =>{

        let newPost = {
            id:6,
            message: state.profilePage.newPostText,
            likes: 0,
        };
        state.profilePage.postsData.push(newPost);
        state.profilePage.newPostText = "";
        rerenderEntireTree(state);
    }

    export const updateNewPostText = (newText) =>{
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    }

    export const addMessage = () => {
        
        let newMessage = {
            id:5,
            message: state.messagePage.newMessageText,
        };
        state.messagePage.MessageData.push(newMessage);
        state.messagePage.newMessageText = "";
        rerenderEntireTree(state);
    }

    export const updateNewMessageText = (newMessage) => {
        state.messagePage.newMessageText = newMessage;
        rerenderEntireTree(state);
    }

    export const subscribe = (observer) => {
        rerenderEntireTree = observer;
    }

export default state;