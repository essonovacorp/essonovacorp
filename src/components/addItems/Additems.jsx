import { Link } from 'react-router-dom';
import addItemsImage from '../../assets/images/emojione_house-with-garden.svg';


export default function Additems() {
    return (
        <>
            <div className="addItemsContainer">
                <div className="addItemsButton text-center">
                    <img src={addItemsImage} />
                    <p className='my-3'>No Sales!</p>
                    <Link to="/add-sales" className='btn btn-primary btn-submit '>
                    Add
                                </Link>
                    
                </div>
            </div>
        </>
    )
}
