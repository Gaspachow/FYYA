
export default function ImgTitle({imgUrl, imgTitle, imgHeight}) {

    const titleStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "8vw"
      }
    
      const titleContainerStyle = {
        background: `url("${imgUrl}") top center`,
        backgroundSize: "cover",
        width: "100%",
        height: imgHeight
      }
    
      return (
            <div style={titleContainerStyle}>
              <div className="title-bg d-flex">
                <p className="h1 m-auto page-title" style={titleStyle}>{imgTitle}</p>
              </div>
            </div>
      )
}