
export default function ImgTitle({imgUrl, imgTitle}) {

    const titleStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "8vw"
      }
    
      const titleContainerStyle = {
        background: `url("${imgUrl}") top center`,
        backgroundSize: "cover",
        width: "100%",
        height: "40vh"
      }
    
      return (
            <div style={titleContainerStyle}>
              <div className="title-bg d-flex">
                <p class="h1 m-auto page-title" style={titleStyle}>{imgTitle}</p>
              </div>
            </div>
      )
}