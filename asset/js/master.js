let x = 0
let y = 0
let i = 0
let ColorCodeOne = '#ec2790'
let ColorCodeTwo = '#683b6d'
let RangeOne = '0'
let RangeTwo = '100'
let Direction = 'top'
let FinalCode = 'background: linear-gradient(to top, #ec2790 0%, #683b6d 100%);'
let colorOne = document.getElementById('color-1')
let colorTwo = document.getElementById('color-2')
let CopyBtn = document.getElementById('copy-btn')
let _body = document.body
const _btn = document.querySelectorAll('#direction>div>button')
// _body.style.background = "linear-gradient(to top, #ec2790 0%, #683b6d 100%)"

colorOne.addEventListener('input', () => {
    ColorCodeOne = colorOne.value
    document.getElementById('code-1').innerHTML = ColorCodeOne
    _body.style.background = "linear-gradient(to top, " + ColorCodeOne + " 0%, #683b6d 100%)"
    FinalCode = "background: linear-gradient(to top, " + ColorCodeOne + " 0%, #683b6d 100%);"
})

colorTwo.addEventListener('input', () => {
    ColorCodeTwo = colorTwo.value
    document.getElementById('code-2').innerHTML = ColorCodeTwo
    _body.style.background = "linear-gradient(to top, " + ColorCodeOne + " 0%," + ColorCodeTwo + " 100%)"
    FinalCode = "background: linear-gradient(to top, " + ColorCodeOne + " 0%," + ColorCodeTwo + " 100%);"
})

document.getElementById('color-percent-1').addEventListener('input', () => {
    RangeOne = document.getElementById('color-percent-1').value
    _body.style.background = "linear-gradient(to top, " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " 100%)"
    FinalCode = "background: linear-gradient(to top, " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " 100%);"
})

document.getElementById('color-percent-2').addEventListener('input', () => {
    RangeTwo = document.getElementById('color-percent-2').value
    _body.style.background = "linear-gradient(to top, " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " " + RangeTwo + "%)"
    FinalCode = "background: linear-gradient(to top, " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " " + RangeTwo + "%);"
})

_btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        Direction = item.value
        document.getElementById('direction-title').innerHTML = Direction
        _body.style.background = "linear-gradient(to" + " " + Direction + ", " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " " + RangeTwo + "%)"
        FinalCode = "background: linear-gradient(to" + " " + Direction + ", " + ColorCodeOne + " " + RangeOne + "%," + ColorCodeTwo + " " + RangeTwo + "%);"
    })
});

CopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(FinalCode)
    CopyBtn.children[0].classList.add('hide')
    CopyBtn.children[1].classList.add('unhide')
    setTimeout(() => {
        CopyBtn.children[0].classList.remove('hide')
        CopyBtn.children[1].classList.remove('unhide')
    }, 1500);
})

document.getElementById('social-madia').addEventListener('click', (e) => {
    let _social = e.target.parentElement
    if (i == 0) {
        _social.children[0].classList.add('transform')
        document.getElementById('linkedin').classList.add('active-linkedin')
        document.getElementById('github').classList.add('active-github')
        document.getElementById('insta').classList.add('active-insta')
        i++
    } else {
        _social.children[0].classList.remove('transform')
        document.getElementById('linkedin').classList.remove('active-linkedin')
        document.getElementById('github').classList.remove('active-github')
        document.getElementById('insta').classList.remove('active-insta')
        i--
    }
})