import Content from "../../components/Content";
import Header from "../../components/Header";
import Title from "../../components/Title";
import StartButton from "../../components/StartButton";

export default function Home() {

    return (
        <>
            <Header />
            <main className="content-container">
                <div>
                    <Title title="Desafio Github API" />
                </div>
                <div>
                    <Content content="DevSuperior - Escola de programação" />
                </div>
                <div className="mt27">
                    <StartButton button="Começar" />
                </div>
            </main>
        </>
    );
}