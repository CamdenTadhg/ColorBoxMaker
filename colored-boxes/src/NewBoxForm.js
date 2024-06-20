import react, {useState} from 'react';
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) => {
    const initialState = {
        color: "",
        width: 0,
        height: 0
    };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {color, width, height} = formData;
        addBox(color, width, height);
        setFormData(initialState);
    };

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit} data-testid='newBoxForm'>
            <label className="NewBoxForm-label" htmlFor="color">Color:
                <input type="text" id="color" name="color" placeholder="color" value={formData.color} onChange={handleChange}/>
            </label>
            <label className="NewBoxForm-label" htmlFor="width">Width: 
                <input type="number" id="width" name="width" placeholder="width" value={formData.width} onChange={handleChange}/>
            </label>
            <label className="NewBoxForm-label" htmlFor="height">Height:
                <input type="number" id="height" name="height" placeholder="height" value={formData.height} onChange={handleChange}/>
            </label>
            <button>Add Box</button>
        </form>
    )
};

export default NewBoxForm;
