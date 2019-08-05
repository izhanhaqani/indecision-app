console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put ur life in the hands of computers',
    option: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.option.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

let count = 0;

const onRemoveAll = () => {
    app.option = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.option.length);
    const option = app.option[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.option.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.option.length}</p>
            <button disabled={app.option.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove List</button>
            <ol>
                {
                    app.option.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();