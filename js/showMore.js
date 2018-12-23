export function showMoreWork(){
    let moreWork1 = document.querySelector('.show-more-work1')
    let infoWork1 = document.querySelector('.work-info-work1')

    let moreWork2 = document.querySelector('.show-more-work2')
    let infoWork2 = document.querySelector('.work-info-work2')
    
    let moreWork3 = document.querySelector('.show-more-work3')
    let infoWork3 = document.querySelector('.work-info-work3')
    
    let moreWork4 = document.querySelector('.show-more-work4')
    let infoWork4 = document.querySelector('.work-info-work4')

   
    moreWork1.addEventListener('click', function(){showInformation(moreWork1, infoWork1)})
    moreWork2.addEventListener('click', function(){showInformation(moreWork2, infoWork2)})
    moreWork3.addEventListener('click', function(){showInformation(moreWork3, infoWork3)})
    moreWork4.addEventListener('click', function(){showInformation(moreWork4, infoWork4)})

    function showInformation(moreWork, infoWork){
        console.log(moreWork)
        console.log(infoWork)
        infoWork.classList.toggle('hidden-field')
        moreWork.classList.toggle('fa-chevron-up')
    }
}
