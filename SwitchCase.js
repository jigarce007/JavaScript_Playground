console.log(`===============SWITCH CASE STATEMENT==========`)
/* lesson for switch case statements*  they are tight operators..like  === ..must be exact same*/
const day = 'Sunday'
switch (day) {
    case 'Monday':
        console.log("It's start of week!")
        break;
        case 'Tuesday':
        console.log(`work on Maybank Trade app TAsks`)
        break;

        case 'Wednesday':
            console.log(`work on MyAHB app TAsks`)
        break;
        case 'Thursday':
            console.log(`work on self learning`)
        break;

        case 'Friday':
            console.log(`work on Maybank Trade app TAsks`)
        break;
        case 'Saturday':
            console.log(`Go for vacation!`)
        break;
        case 'Sunday':
            console.log(`Enjoy the vacation!`)
        break;
    default:
            console.log('sit on sofa & watch TV,eat popcorna nd drink Coke!')
        break;
}