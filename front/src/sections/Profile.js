import React from 'react';
import axios from 'axios';
import SingleProfile from '../components/SingleProfile';
import AddButton from "../components/addPhoto";
import EditButton from "../components/editButton"
import DeleteButton from "../components/buttons/deleteButton"
// import AddPhotoPrueba from '../components/AddPhotoPrueba';
import Show from '../components/AddShow';
import SelectGenero from '../components/genereButton'
import VideoList from '../components/videoList';
import User from '../components/editPrueba';
import CardPhoto from '../components/cardPhoto';

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
                <img src={this.state.user.PicProfilePath} alt="foto de perfil" />
                <h1>Este es mi Perfil {this.state.user.username}</h1>
                <SingleProfile />
<<<<<<< HEAD
                <VideoList {...this.state.user}/><p>add video</p>
                <AddButton /><p>add photo</p>
=======
                <VideoList /><p>add video</p>
                {/* <AddButton /><p>add photo</p> */}
>>>>>>> d5fba9baa22c812b317d320a6b3b3b55b8da35c2
                <AddButton /><p>add event</p>
                <EditButton />
                

                <DeleteButton />
                {/* <Show/> */}
                <CardPhoto />
                <h1>holaaaaa</h1>
                <SingleProfile /> 
                <SelectGenero />
<<<<<<< HEAD
                
                <User/>
                <SingleProfile /> 
=======
                <VideoList></VideoList>
                {/* <User></User> */}
                {/* <SingleProfile />  */}
>>>>>>> d5fba9baa22c812b317d320a6b3b3b55b8da35c2
            </div>
            : <p>Loading...</p>
        )
    }
}