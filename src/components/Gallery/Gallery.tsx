import {useEffect, useState} from "react";

export default function Gallery() {
      
    useEffect(()=>{
        let positionIMg = 0;
        const elementsImg = window.document.querySelectorAll(".change1")
        let conditionalBoolean = true
        const interval = setInterval(()=>{
    
            if(conditionalBoolean){
                elementsImg[positionIMg].classList.add("changeSize")              
                setTimeout(()=>{
                    if(elementsImg.length-1 !==positionIMg){
                        elementsImg[positionIMg ].classList.remove("changeSize")
                        positionIMg =positionIMg + 1
                    }         
                },1500)
                if(positionIMg === elementsImg.length-1){
                    conditionalBoolean = false
                    positionIMg = 8
                    
                }                
            }else if(!conditionalBoolean){
                elementsImg[positionIMg].classList.remove("changeSize")
                positionIMg =positionIMg - 1                
                setTimeout(()=>{
                    elementsImg[positionIMg  ].classList.add("changeSize")                    
                },1500)
                if(positionIMg === 0){
                    conditionalBoolean = true
                }
            }
    
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <main className="Main">
        <h2>Skills</h2>
        <section>
            <img className="change1" src="https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png" alt="react-js"/>
            <img className="change1" src="https://programacion.net/files/article/20161223111243_html5.jpg" alt="HTML"/>
            <img className="change1" src="https://techvccloud.mediacdn.vn/2020/4/13/photo-1-15867704341431006410340-crop-1586770597696426386843.jpg" alt="CSS"/>
            <img className="change1" src="https://openwebsolutions.in/blog/wp-content/uploads/2017/11/sass-banner-1024x497.jpg" alt="SASS"/>
            <img className="change1" src="https://i.ytimg.com/vi/3xlUAMXui2c/maxresdefault.jpg" alt="tailwind"/>
            <img className="change1" src="data:image/png;base64,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" alt="javascript"/>
            <img className="change1" src="https://i.ytimg.com/vi/wVo-UMit5Ig/maxresdefault.jpg" alt="node-js"/>
            <img className="change1" src="https://i.ytimg.com/vi/qsDvJrGMSUY/maxresdefault.jpg" alt="sequelize"/>
            <img className="change1" src="https://www.arsys.es/blog/file/uploads/2018/06/postgresql.jpg" alt="postgreSQL"/>
            <img className="change1" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/typescript-logo.png?fit=1200%2C600&ssl=1" alt="typescript"/>
            <img className="change1" src="https://res.cloudinary.com/doeqsvbxc/image/upload/v1679449427/figma_d6p1er.webp" alt="figma"/>
              
        </section>
    </main>
  )
}
