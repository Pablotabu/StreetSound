import React from 'react';
import axios from 'axios';
// import SingleProfile from '../components/SingleProfile';
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import VideoList from '../components/videos/videoList';
// import User from '../components/edit/editPrueba';
// import CardPhoto from '../components/Photos/cardPhoto';
import PhotoList from '../components/Photos/photoList'
import '../sections/MyProfile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            user:null,
            videoList: []
        }
    };

    componentWillMount() {
        this.fetchProfile();
    }

    fetchProfile() {

        axios.get(`http://localhost:3000/api/artist/profile/${this.props.match.params.id}`)
            .then(arr => {
                console.log(arr.data)
                this.setState({user: {...arr.data} })
            })
            .catch(e => console.log(e));
    };




    render() {
        console.log(this.props);
        return (
            this.state.user ? 
            <div>
                {/* <img src={this.state.user.PicProfilePath} alt="foto de perfil" />
                <h1>Este es el perfil del artistaaaaa {this.state.user.username}</h1>
                <VideoList {...this.state.user} /><p>add video</p>
                <PhotoList {...this.state.user} /><p>add photo list</p> */}
                {/* <CardPhoto {...this.state.user}/>
                <User/>
                <SingleProfile {...this.state.user}/>  */}

                <header>

<div class="container">

    <div class="profile">

        <div class="profile-image">

            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>

        </div>

        <div class="profile-user-settings">

            <h1 class="profile-user-name">janedoe_</h1>

            <button class="btn profile-edit-btn">Edit Profile</button>

            <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

        </div>

        <div class="profile-stats">

            <ul>
                <li><span class="profile-stat-count">164</span> posts</li>
                <li><span class="profile-stat-count">188</span> followers</li>
                <li><span class="profile-stat-count">206</span> following</li>
            </ul>

        </div>

        <div class="profile-bio">

            <p><span class="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

        </div>

    </div>
   
</div>


</header>

<main>

<div class="container">

    <div class="gallery">

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
                </ul>

            </div>

        </div>

        <div class="gallery-item" tabindex="0">

            <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" class="gallery-image" alt=""/>

            <div class="gallery-item-type">

                <span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

            </div>

            <div class="gallery-item-info">

                <ul>
                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
                    <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

    </div>
    

    <div class="loader"></div>

</div>


</main>
            </div>
            : <p>Loading...</p>
        )
    }
}