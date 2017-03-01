import React, {Component} from 'react';
import youtubeSearch from 'youtube-api-search';
import VideoPlayer from './video_player';
import ButtonPanel from './button_panel';
import './App.css';
const API_KEY = 'AIzaSyCw_xtd106j93aN5zIrJNe1xWtL11ZNkPI';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedAnimal: "Cat",
            selectedAdjectives: ["Cute"],
            // videoNumber: 0,
            animals: ["Cat", "Dog", "Fox","Fish", "Hippo", "Giraffe", "Tiger", "Lion", "Horse"],
            adjectives: ["Cute", "Big", "Sad", "Happy", "Crazy", "Sleepy", "Angry", "Giant", "Tiny"]
        };

        this.getVids(this.state.selectedAnimal);
    }

    componentDidMount() {
        let selectedAnimal = this.state.selectedAnimal;
        let selectedAdjectives = this.state.selectedAdjectives;
        selectedAdjectives.forEach(function(adjective){
            document.getElementById(adjective).className = "btn btn-success adjective";
        });
        document.getElementById(selectedAnimal).className = "btn btn-success animal";
    }

    updateVideo(selectedAnimal) {
        let newSearch = '';
        if(this.state.selectedAdjectives.length > 0){
            this.state.selectedAdjectives.forEach(function(adj){
                newSearch += adj + ' ';
            });
            newSearch += this.state.selectedAnimal;
            console.log(newSearch);
            this.getVids(newSearch);
        } else {
            newSearch = this.state.selectedAnimal;
            console.log(newSearch);
            this.getVids(newSearch);
        }
    }

    getVids(term) {
        youtubeSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos
            });
        });
    }

    updateAnimal(selectedAnimal) {
        this.setState({selectedAnimal});
        setTimeout(function(){this.updateVideo(selectedAnimal)}.bind(this), 500);
    }


    updateAdjectives(newAdjective) {
        let newAdjectives = this.state.selectedAdjectives;
        let ifExists = newAdjectives.indexOf(newAdjective);
        if (ifExists === -1){
            newAdjectives.push(newAdjective);
        } else {
            newAdjectives.splice(ifExists,1);
        }
        this.updateVideo(this.state.selectedAnimal);
    }

    // videoNumberStep(){
    //     this.state.videoNumber++;
    //     let test = this.refs.test;
    //     test.forceUpdate();
    //     console.log(this.state.videoNumber);
    //     document.getElementById("VideoPlayer").forceUpdate();
    // }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>[Adjective][Animal] Viewer</h1>
                </div>
                <div className="App-intro">
                    <div className="row">
                        <ButtonPanel
                            onAnimalSelect={selectedAnimal =>this.updateAnimal(selectedAnimal)}
                            onAdjectiveSelect={selectedAdjective =>this.updateAdjectives(selectedAdjective)}
                            animals={this.state.animals}
                            selectedAnimal={this.state.selectedAnimal}
                            selectedAdjectives={this.state.selectedAdjectives}
                            adjectives={this.state.adjectives}/>
                        <VideoPlayer
                            /*onVideoNumberStep={() =>this.videoNumberStep()}*/
                            video={this.state.videos[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
