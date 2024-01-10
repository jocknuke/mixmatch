export const courtsNumberOptions = [
    {text: '1', value: 1},
    {text: '2', value: 2},
    {text: '3', value: 3},
    {text: '4', value: 4},
    {text: '5', value: 5},
    {text: '6', value: 6},
]


export const roundTypeOptions = [
    {text: 'Default Coed', value: 1},
    {text: 'Girls Only', value: 2},
    {text: 'Boys Only', value: 3},
    {text: 'Playoffs Coed', value: 4}
]


interface selectOption{

    name:string,
    checked:boolean,
    index:number,
    disabled:boolean


}
export const allCourtOptions: selectOption[] = [
    { name: "Court 1", checked: true, index:1, disabled:false },
    { name: "Court 2", checked: true, index:2 , disabled:false},
    { name: "Court 3", checked: true, index:3 , disabled:false},
    { name: "Court 4", checked: true, index:4 , disabled:false},
    { name: "Court 5", checked: true, index:5 , disabled:false},
    { name: "Court 6", checked: true, index:6 , disabled:false},
  ];




  export const allRoundTypeOptions: selectOption[] = [
    { name: 'Default Coed', checked: true, index:1 , disabled:false},
    { name: 'Girls vs Girls & Boys vs Boys', checked: false, index:2 , disabled:false},
    { name: 'Girls Only', checked: false, index:3 , disabled:false},
    { name: 'Boys Only', checked: false, index:4, disabled:false },
    { name: 'Following Friends (coming soon)', checked: false, index:5 , disabled:true},
    { name: 'Top Rank Face Off (coming soon)', checked: false, index:6 , disabled:true},
    { name: 'PLAYOFFS', checked: false, index:7, disabled:false },
    
]