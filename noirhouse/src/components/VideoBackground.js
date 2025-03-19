export default function VideoBackground() {
    return (
        <div className="video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/videos/noirhouse-banner.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>
        </div>
    );
}
