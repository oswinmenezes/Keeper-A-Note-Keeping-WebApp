const year= new Date().getFullYear();
export default function Footer(){
    return <div className="footerContainer">
        <footer>Copyright © Keeper {year}</footer>
    </div>;
}