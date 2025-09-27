import Carousel from "react-bootstrap/Carousel";

export function LinkedInCarousel({ urls }: { urls: string[] }) {
    return (
        <Carousel  data-bs-theme="dark">
            {urls.map((url, i) => (
                <Carousel.Item key={i}>
                    <div className="row align-items-center">
                        <iframe
                            className="col-6 m-auto"
                            src={url}
                            height="670"
                            width="50%"
                            frameBorder="0"
                            title={`Embedded post ${i}`}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
