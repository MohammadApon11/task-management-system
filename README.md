Install Dependencis
npm i @reduxjs/toolkit react-redux react-bootstrap react-hook-form sass

Live site: https://task-management-system-nu.vercel.app/

How All are done
- **Test Overview**
    
    Directions were given to implement some features in an existing project and that project was meant to uncover some contacts with respect to task management and logic.
    
    **Here are two problems to solve ⇒**
    
    1. The first problem was that on clicking submit button the input field value will show in below table, there will be three buttons and when click on active button it will show tasks with status active while clicking on completed button will show status completed tasks and when clicking on all button it will show serial According to will show first active second completed and third status pending respectively will show status archive. And I solved it and it is working properly.
    2. Second problem was UI will have two buttons one all contact and second US contact when I click on all contact then modal A will open and when I click on US contact then modal B will show and each modal will have three buttons Button A (All Contact) Button B (US Contact) Button C (Close) , when button A (All Contact) is clicked it will switch to modal A when button B (US Contact) is clicked then modal will be switched to B when button C (Close) is clicked then modal will be closed and there will be a check box below when checked then even number data will be shown Based on id. Modal will show all country contracts from API and Modal B will show only US contacts. When I click on an item, another modal will open, whether it is modal C, the information of that item will be shown. When modal goes to a and b the URL will change but when c is switched the URL will not change. Button A and Button B were given specific background color and Button C was given specific border color. Instructions are given to add search functionality to Modal A and Modal B and finally to add pagination feature. Problem solved with redux slice and hooks.
 
    3. - **Technical Implementation**
    
    **How Many Dependencies I installed for done this project?** **⇒**
    
    I to do the project Implementing a robust tech stack, I integrated Redux Toolkit, React-Redux, Sass, React-Bootstrap, and React Hook Form, optimizing project efficiency and user interaction seamlessly.

  - **Problem 1 solved by redux Component (Problem1)**
    
    P**roblem 1 is tasks management related.**
    
    ***I have solved this problem in two ways first redux toolkit and second handling by local storage let's see redux  solution first and then local storage ⇒***
    
    **// 1 - last - 1 // `Problem1`** component appears to be a form-based interface connected to Redux to manage task-related information. It integrates the **`react-hook-form`** library for form handling and utilizes Redux to manage state and actions for tasks.
    
    1. **Redux Integration:**
        - Uses Redux hooks (**`useSelector`** and **`useDispatch`**) to access Redux store state (**`filteredTasks`**) and dispatch actions (**`addTask`** and **`filterTasks`**).
    2. // **6 - 78** // **Form Handling:** 
        - Utilizes **`react-hook-form`** for managing form inputs (**`register`**, **`handleSubmit`**) and submission (**`onSubmit`**).
    3. **// 105  //** **Status Filtering:**
        - Displays a set of buttons (**`All`**, **`Active`**, **`Completed`**) in a navigation list to filter tasks based on their statuses (**`show`** state).
    4. **// 136 //** **Table Rendering:**
        - Renders a table with columns "Name" and "Status" to display task information fetched from Redux store (**`filteredTasks`**).
    
    Currently, the component fetches tasks from the Redux store (**`filteredTasks`**) and displays them in a table. It allows users to submit new tasks through the form and filter displayed tasks based on their status using the navigation buttons.

    - **Problem 1 Solved by tasksSlice (redux/features/tasksSlice)**
    
    **// 1 - last - 1 // This code uses Redux Toolkit's `createSlice` to define a slice of Redux state for managing tasks** **⇒**
    
    1. **Redux Setup:**
        - **tasksSlice:** Creates a Redux slice managing tasks with initial tasks, filtering, and adding functionality.
        - **Redux Store:** Configures a global Redux store using **`configureStore`** from Redux Toolkit and includes the **`tasksReducer`** created from **`tasksSlice`**.
        - **// main // And Wrapped up the whole app by Provider with store.**
    2. **// 20 // Redux Logic:**
        - **tasksSlice Reducer:**
            - Manages state for tasks and filtered tasks, with actions for filtering and adding tasks.
            - **`filterTasks`**: Filters tasks based on the provided status, updates **`filteredTasks`**, and sorts them based on a predefined order of statuses.
            - **`addTask`**: Adds a new task to the **`tasks`** array and updates **`filteredTasks`** accordingly.
    3. **// store //** **Redux Store:**
        - Creates a Redux store with **`tasksReducer`** as the reducer function, managing the state related to tasks.
      
        - - **Problem 1 solved by Local storage (Problem1)**
    
    // comment out redux logic //
    
    **Now let's solved with local storage ⇒**
    
    **// 1 - last - 1 // This code showcases how I can utilize the browser's `localStorage` to persist and manage form data within a React component.**
    
    1. **// 6 // Initializing State:**
        - **`formData`**: State variable managing an array that holds form data.
        - **`show`**: State variable managing the filter status ("all", "active", "completed").
    2. **// 22 //`useEffect`:**
        - Fetches data from **`localStorage`** upon component mounting and updates **`formData`** state if stored data exists.
    3. **Form Submission (`onSubmit`):**
        - Appends new form data to the existing **`formData`** array, updates the state, and stores it in **`localStorage`** as a stringified JSON.
        - Resets the form fields after submission using **`reset()`** from **`react-hook-form`**.
    4. **// 35 // Filtering and Sorting:**
        - **`filterAndSortData()`** sorts **`formData`** based on a predefined status order and returns the sorted array.
    5. **// 48 // Displaying Data:**
        - **`renderFilteredData()`** filters and displays data based on the **`show`** state.
        - Uses buttons to filter data based on status ("All", "Active", "Completed").
    6. **Render Function:**
        - Renders a form to input "Name" and "Status".
        - Displays a table showing the name and status of the submitted data.
    7. **// 20 // Local Storage Usage:**
        - **`localStorage.setItem("formData", JSON.stringify(updatedFormData))`** stores the updated form data in the browser's **`localStorage`**.
        - **`JSON.parse(localStorage.getItem("formData"))`** retrieves stored data from **`localStorage`** and populates the **`formData`** state on component mount.
    
    This setup allows me to manage form data persistence using **`localStorage`**, ensuring that submitted form data persists even after a page refresh. The component also provides filtering options to view specific subsets of the stored data based on their status.

    - **Problem 2 Component (Problem2)**
    
    **Now Explain Problem2**
    
    ***The problem was that modal should be shown with some buttons and all countries and us countries wise data should be shown, search functionality will be there, pagination will be there and so on.***
    
    **Start from Probelm2 Component** ⇒
    
    **// 1 - last - 1 // This component, appears to be a simple interface that triggers a modal based on user interaction with buttons.**
    
    1. **State Variables:**
        - **`title`**: Manages the title for the modal. Initialized with empty string using the **`useState`** hook.
        - **`showContactsModal`**: Manages the visibility of the **`ContactsModal`** component. Initialized as **`false`**.
    2. **Functions:**
        - **`handleContactsModal`**: Triggered by button clicks, sets **`showContactsModal`** to **`true`** and updates the **`title`** state based on the button clicked.
        - **`handleCloseContactsModal`**: Closes the modal by setting **`showContactsModal`** to **`false`** and resets the **`title`** to empty string.
    3. **// 15 // Render Function:**
        - Displays two buttons Button A labeled “All Contacts”, Button B lebeled "US Contacts", each triggering **`handleContactsModal`** with different titles when clicked.
        - These buttons presumably trigger the display of contacts based on different categories.
    4. **// 29 // Modal Component:**
        - Utilizes the **`ContactsModal`** component, passing in props:
            - **`show`**: Controls the visibility of the modal based on **`showContactsModal`**.
            - **`handleClose`**: Handles the modal closing action.
            - **`title`**: Passes the title to be displayed within the modal.
    
    This component acts as a controller for displaying specific contact information based on user interaction with buttons, utilizing the **`ContactsModal`** component to handle the modal display and content presentation.

    - **ContactsModal component**
    
    **It refers to Modal A and Modal B that name I Decide ContactsModal ⇒**
    
    ***Problem 2 Data Fetching in two ways firstly by creating custom hooks and secondly by creating redux slice.***
    
    **Let's see the solution with redux slice ⇒**
    
    **// 1 - last - 1 //`ContactsModal` integrates Redux to manage the state related to fetching contacts and renders a modal interface to display contact-related information.**
    
    1. **// 10 //** **State Initialization:**
        - **`showEven`**: Manages the visibility of even numbers.
        - **`showInnerModal`**: Manages the visibility of the inner modal.
        - **`innerModalTitle`**: Holds the title for the inner modal.
        - **`country`**: Stores the selected contacts data.
    2. **// 20 // Redux Integration:**
        - Utilizes Redux hooks to access Redux store state and dispatch actions, respectively.
        - Fetches contacts data using **`useSelector`** from the Redux store.
        - Handles loading and error states for fetching contacts.
    3. **Effects Using `useEffect`:**
        - Dispatches actions (**`fetchAllContacts()`** and **`fetchUSContacts()`**) to retrieve contacts data when the component mounts.
    4. **// 30 // Conditional Rendering Based on Loading/Error States:**
        - If loading is in progress, it displays a loading message.
        - If there's an error, it shows an error message.
    5. **// 40 // Checkbox Handling and Number Rendering:**
        - Manages the checkbox state (**`showEven`**) for filtering even numbers.
        - Renders a list of numbers based on the checkbox state through the **`renderNumbers()`** function.
    6. **// 55 // Button Handlers and Navigation:**
        - **// 55 - 90 //** Buttons trigger **`handleInnerModal()`** to set the contacts data (**`country`**) for the inner modal based on the selected category.
        - When button is clicked then URL will change by specific route directions **// Hover route // - // main Hover on 17-18 //**.
    7. **// 83 - 118 // Modal Structure:**
        - Renders a Bootstrap **`Modal`** based on the **`show`** prop, controlling its visibility through **`handleClose`**.
        - Includes header content based on the provided **`title`**.
        - Displays buttons, a checkbox, and the list of rendered numbers in the modal body.
        - Provides Button C labeled "Close" in the modal footer.
    8. **// 130 // Inner Modal Interaction:**
        - Embeds the **`InnerModal`** component within this modal, passing props such as visibility state (**`showInnerModal`**), closing function (**`handleCloseInnerModal`**), title, and selected country/contact data (**`country`**).
      
        - - **Redux contactsSlice**
    
    **// 1 - last - 1 // This code employs Redux Toolkit's `createSlice` and `createAsyncThunk` for managing asynchronous actions and reducers efficiently.**
    
    1. **Async Thunks Creation:**
        - **`fetchAllContacts`** and **`fetchUSContacts`** are created using **`createAsyncThunk`**. These thunks handle asynchronous API calls to retrieve all contacts and US contacts, respectively.
    2. **Thunk Logic:**
        - **`fetchAllContacts`**: Fetches all contacts from the specified API endpoint (**`https://contact.mediusware.com/api/contacts/`**).
        - **`fetchUSContacts`**: Fetches US contacts from the specified API endpoint (**`https://contact.mediusware.com/api/country-contacts/united%20states/`**).
    3. **// 23 - last - 23 //** **Reducer Initialization:**
        - **`contactsSlice`** is initialized using **`createSlice`**, defining the initial state and reducers.
    4. **Initial State:**
        - **`initialState`** defines the initial structure of the state for the contacts slice.
        - It includes **`allContacts`** and **`usContacts`** arrays to store fetched data.
        - **`loadingAll`** and **`loadingUS`** flags track the loading state for each API call.
        - **`errorAll`** and **`errorUS`** store potential errors encountered during API calls.
    5. **// 30 // Reducers (Empty):**
        - The **`reducers`** field is empty as no additional synchronous actions are defined.
    6. **Extra Reducers:**
        - **`extraReducers`** defines the reducers for handling the actions dispatched by **`createAsyncThunk`**.
        - For each thunk, it defines cases for **`pending`**, **`fulfilled`**, and **`rejected`** states.
    7. **// 37 // Reducers' Logic:**
        - For both **`fetchAllContacts`** and **`fetchUSContacts`**:
            - **`pending`**: Sets the loading state to **`true`** and clears any existing error.
            - **`fulfilled`**: Updates the loading state to **`false`** and stores the fetched data in **`allContacts`** or **`usContacts`**.
            - **`rejected`**: Updates the loading state to **`false`** and captures the error message in **`errorAll`** or **`errorUS`**.
    8. **// 53 // Default Export:**
        - **`contactsSlice.reducer`** is exported as the default reducer function.
    9. **// 1 - last - 1 // Overall Purpose:**
        - Manages the state for fetching all contacts and US contacts asynchronously.
        - Tracks loading states and potential errors during API calls for both sets of contacts.
    
    This setup provides a structured way to handle asynchronous data fetching, manage loading states, and handle potential errors for contacts' data within a Redux store.

    - **InnerModal (Modal A and B)**
    
    **// 1 - last - 1 // This is Inner Modal A And Inner Modal B That Name I decide InnerModal ⇒**
     This component functions as a modal within a modal, displaying a list of countries or contacts based on the selected category from the parent modal that is**`ContactsModal`**.
    
    1. **State Variables:**
        - **`showSecondaryModal`**: Manages the visibility of the secondary modal. Initialized as **`false`**.
        - **`selectedSingleCountry`**: Keeps track of the selected country or contacts for the secondary modal. Initialized as an empty string.
        - **`currentPage`**: Manages the current page number for pagination. Initialized as **`1`**.
        - **`countriesPerPage`**: Defines the number of countries per page. Initialized as 6.
        - **`searchTerm`**: Manages the search term for filtering countries or contacts. Initialized as an empty string.
    2. **// 8 //** **Functions:**
        - **`handleSecondaryModal`**: Sets the selected country and toggles the visibility of the secondary modal.
        - **`handleCloseSecondaryModal`**: Closes the secondary modal and resets the selected country.
    3. **// 20 // Pagination Logic:**
        - Calculates the indices of the countries to be displayed based on the current page and items per page.
        - Filters the countries or contacts based on the search term and paginates the results accordingly**`filteredCountries`**.
    4. **// 34 //** **Render Function:**
        - Renders a Bootstrap **`Modal.`**
        - Provides a search bar to filter countries or contacts based on the country name.
        - **// 7 - 55 //** Renders a list of filtered countries or contacts as buttons, triggering **`handleSecondaryModal`** on click.
    5. **// 72 // Pagination Display:**
        - Renders pagination buttons based on the total number of pages, allowing users to navigate through pages.
        - Changes the **`currentPage`** state based on the clicked page number.
    6. **// 88 // Nested Modal C That Component name is Secondary Modal:**
        - Utilizes the **`SecondaryModal`** component, passing props:
            - **`show`**
            - **`handleClose`**
            - **`selectedSingleCountry`**: Passes the selected country/contact information to be displayed in the secondary modal.
    
    This **`InnerModal`** component essentially acts as a sub-modal to the main modal that is**`ContactsModal`**, allowing users to view and interact with a list of countries or contacts based on categories and search criteria. It incorporates pagination for better navigation through the displayed list and also handles the display of a secondary modal for detailed information on a selected country/contact.

    - **SecondaryModal (Modal C)**
    
    **// 1 - last - 1 //**  This ****component responsible for displaying detailed information about a selected country/contact within a Bootstrap modal.
    
    1. **Props Received:**
        - **`show`**: Controls the visibility of the modal.
        - **`handleClose`**: Handles the action to close the modal.
        - **`selectedSingleCountry`**: Contains the details of the selected country/contact.
    2. **Modal Structure:**
        - Renders a Bootstrap **`Modal.`**
        - Displays information about the selected country/contact inside the modal body.
    
    This component is designed to provide a concise overview of a selected country/contact's details within a modal structure, serving as a secondary layer of information for the user.

    - **Challenges and close**
    
    **The challenges I have faced ⇒**
    
    I faced the challenges when I was switching from one modal to another modal, I was repeatedly playing the same modal, then I created individual components for each modal in a strategic way and then called each of them from their respective places and the problem was solved. in that sequence. Had some trouble while fetching data then solved the problem by making separate redux slice for each API call
    
    **Code structure ⇒**
    I have followed the best practices for coding, by using For Example Redux toolkit, I can maintain tasks from one place, by creating individual modal components for each modal, the code structure has become very beautiful, and finally, I have made the API calls independent slice with redux toolkit. The code structure is very organized.

    
