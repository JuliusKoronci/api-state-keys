## Redux Api State Keys
This package addresses common issues with handling api flags and canonical state in Redux applications.

### The problem

The common approach nowadays is to store api loading flags alongside the data we are retrieving from our APIs. 
This means combining(polluting) our domain specific data with network status and application state. 
It also means a lot of code duplication and boilerplate for each reducer/api endpoints. For every api call, we create:
1. constants
2. actions
3. reducers
4. error and loading flags

A minimalistic example would look like:

```
// Orders reducer snippet 
{
    loading: false,
    error: false,
    payload: {}
}
```

If we have 20 api calls, we will have this structure 20 times.        

### Our solution
``` 
[API_STATE_REDUCER]: {
    users: {
        isLoading: true,
        payload: [],
        error: false,
    },
    orders: {
     isLoading: false,
     error: { code: 500, message: 'Server error'},
     payload: [],
    }
}
```
Based on the state keys pattern, separation of concerns and single responsibility principle, we suggest to separate 
API state from domain specific data. 
We believe having 1 separate reducer, actions, selectors dealing with only api state is the key to solve this problem, 
introduce consistency, avoid common bugs, reduce boilerplate and as you will see in the examples, introduce a 
lot of useful helpers which would not be possible otherwise.

``` 
export interface Store {
  [key:string]: {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    errorObject: IApiError | null;
    payload: any;
  };
...
}
```

### Installation
The package provides a saga, a reducer, selectors and a single action to trigger an api state flow: 

1. Saga catching the action
2. Saga dispatches an action to update the loading flag for the provided key
3. Saga executes the provided api call
4. Saga updates the state with the api calls result (custom state updater can be used)
5. Saga may call an optional action with the results if provided
6. Saga may call an optional callback with the results if provided

To get it working, 

1. register the reducer from the package:

```
// rootReducer.ts
const rootReducer = combineReducers<IStoreState>({
  ...
  apiState: apiStateReducer,
});
```

2. Register the Saga

``` 
export function* rootSaga() {
  yield all([
    ...
    call(apiFlowSaga),
  ]);
}
```

### Usage

#### Basic
``` 
const mapStateToProps = (state: StoreState) => ({
  apiResponse: getApiResponse(state)(MY_KEY),
  apiError: getError(state)(MY_KEY),
  isLoading: isLoading(state)(MY_KEY),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  apiStartAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)([MyCoolContainer]);

class [MyCoolClass] extends Component<IMyCoolClassProps, {}> {
  public componentDidMount(): void {
    this.props.apiStartAction(MY_KEY, callMyApiPromise);
  }

  public render(): ReactNode {
    this.props.isLoading return <p>...loading</p>;
  
    return <MyComponent data={ this.props.apiResponse } error={ this.props.apiError } />
  }
}
```

In this simple scenario we are letting our package to handle the entire process of getting data from the api and providing 
it to our component. Anytime we need to display simple data without much logic, we just provide the service for api call  
and the package handles everything else. The data provided to the container are also memoized so we avoid useless 
re-renders by default. 

In case we need to transform and operate over the response, we can just write our own selector where we encapsulate the 
business logic. Our feature can just export this selector and it can be reused within the application.

#### Pagination
The basic approach replaces with every request the entire payload in our store. What if we want to append the new data 
instead of replacing?

The apiStartAction accepts a 3rd argument.
``` 
export interface IApiActionConfig {
  action?: (response: any) => Action;
  cb?: (response: any) => any;
  merge?: (state: IApiState[keyof IApiState]['payload'], payload: any) => IApiState[keyof IApiState]['payload']
}
```

If we provide a merge function, this will be used to update our payload instead of the default replace strategy. 
We can provide any logic here, so it is very flexible.

``` 
    // config object example with axios response
   { 
      merge: (currentStatePayload, response) => Array.isArray(currentStatePayload) ?
        // merge existing data in state with new data from response 
        concat(currentStatePayload, response.data) :
        // if there is nothing in the state e.g. undefined 
        response.data.items,
    }
```
#### Separate reducers for domain specific data

If we follow a domain driven approach we want to keep our domain specific data in our own reducer with its 
corresponding selectors. This can be easily achieved by providing a custom action. Once our package resolves the api call 
it will dispatch our action and we can update our reducer with the response, do our normalization or any kind of logic.

``` 
  this.props.apiStartAction(MY_KEY, myServiceCall, {
      action: myDomainSpecifiAction,
      merge: MyReferenceMergeStrategy,
      cb: MyCustomCallbackForLogging,
  };
```

### Package Api
#### Actions
``` 
  const apiStartAction = (key: string, apiCallback: () => Promise<any>, config: IApiActionConfig = {}) => void;
```
### Selectors
``` 
  selectApiStateByKey: (state) => (MY_KEY) => {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    errorObject: IApiError | null;
    payload: any;
  }, 
  
  isLoading: (state) => (MY_KEY) => boolean, 
  
  hasError: (state) => (MY_KEY) => boolean,  
  
  hasLoaded: (state) => (MY_KEY) => boolean, 
  
  getError: (state) => (MY_KEY) => {
    message: string;
    code: string;
    
    [key: string]: any
  }, 
  
  getApiResponse: (state) => (MY_KEY) => payload: any,
  ```
  
  ### What else
  You can now really easily create useful higher order component
  
  ``` 
  withLoadingIndicator(MY_KEY, () => <LoadingIndicator />)(MyComponent);
  withApiData(MY_KEY)(MyComponent);
  ```
  
  The next version of the package will provide some components by default.
  
  ## Final Notes
  I have come up with this idea 1 year ago, it was based on many articles and actual issues I was facing.
  
 Useful Article to read:
 https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb
  
  
  I use this in my projects and it works so far great, use it on your own or just steal the idea if you will :).

