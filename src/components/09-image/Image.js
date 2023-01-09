import React from 'react'
import northernLights from "../../assets/img/image1.jpg"

//backend ve json'dan gelen resimleri require ile kullanıyoruz.
const Image = () => {
  return (
    <div>
        {/* statik yöntemded görüntüler public içinde aranır*/ }
    
        <img src="assets/img/car.jpg" width="300" />

        {/*Import ve Require yonteminde dosyalar src icinde olmalidir. */}
        <img src={northernLights} alt="" width="300"/>

        <img src={require("../../assets/img/image2.jpg")} alt="" width="300" />
   
    </div>
  )
}

export default Image