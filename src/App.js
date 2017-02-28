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
            selectedAdjectives: [],
            animals: ["Cat", "Dog", "Fox","Fish"],
            adjectives: ["Big", "Cute", "Sad", "Happy"]
        };

        this.getVids(this.state.selectedAnimal);
    }

    componentWillUpdate(nextProps, nextState) {
        this.getVids(this.state.selectedAnimal);
    }

    updateVideo(selectedAnimal) {
        this.setState({selectedAnimal});
        let newSearch;
        if(this.state.selectedAdjectives){
            console.log(this.state.selectedAdjectives);
        }
    }

    getVids(term) {
        youtubeSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos
            });
        });
    }

    updateAdjectives(newAdjective) {
        let newAdjectives = this.state.selectedAdjectives;
        let ifExists = newAdjectives.indexOf(newAdjective);
        if (ifExists === -1){
            newAdjectives.push(newAdjective);
        } else {
            newAdjectives.splice(ifExists,1);
        }
        console.log(newAdjectives);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>[Adjective][Animal] Viewer</h1>
                </div>
                <div className="App-intro">
                    <div className="row">
                        <ButtonPanel
                            onAnimalSelect={selectedAnimal =>this.setState({selectedAnimal})}
                            onAdjectiveSelect={selectedAdjective =>this.updateAdjectives(selectedAdjective)}
                            animals={this.state.animals}
                            adjectives={this.state.adjectives}/>
                        <VideoPlayer video={this.state.videos[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
