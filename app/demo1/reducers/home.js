const initialState = {
    "src":"https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1436170635521!6m8!1m7!1sEmPx53PkIOUAAAQqmWhsgw!2m2!1d-36.81214!2d174.726475!3f60.649238235862214!4f-16.318097902715365!5f0.7820865974627469"};

export default function home(state = initialState, action) {
    switch (action.type) {
    case    "TEST":
        console.log(action.text);
        return state;
    case "TEST_SUCC":
        console.log(action.text);
    default:
        return state;
    }
}


                     
