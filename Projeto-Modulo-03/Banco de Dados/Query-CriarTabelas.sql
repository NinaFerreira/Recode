USE airlinestickets

@@CRIAR TABELA Viagem
CREATE TABLE Viagem (
    id Int AUTO_INCREMENT,
    data_ida varchar(10) ,
	data_volta varchar(10) ,
    origem varchar(255),
    destino varchar(255),
    valor varchar(255),
    PRIMARY KEY (id)
);

@@CRIAR TABELA Cliente
CREATE TABLE Cliente (
    id Int AUTO_INCREMENT,
    nome Varchar(100),
    data_nascimento Varchar(100),
	cpf Varchar(100),
    telefone Varchar(100),
    viagem_id Int,
    PRIMARY KEY (id),
    FOREIGN KEY (viagem_id) REFERENCES Viagem(id)
);


@@CRIAR TABELA Contato
CREATE TABLE Contato (
    id Int AUTO_INCREMENT,
    nome Varchar(100),
    email Varchar(255),
    mensagem Varchar(255),
    PRIMARY KEY (id)
);
