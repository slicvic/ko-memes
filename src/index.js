import { AppViewModel } from './AppViewModel'
import './components/LoadingOverlay'
import './components/MemeGallery'
import './components/MemeGalleryItem'
import './components/SearchBar'
import './components/LikeRating'
import '../styles/main.scss'

ko.applyBindings(new AppViewModel())
