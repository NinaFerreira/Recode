package classes;

import crud.CRUD;
import java.sql.SQLException;

/**
 * @author Nina
 */
public class Contato {

    private int id;
    private String nome;
    private String email;

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
    private String mensagem;

    public void CadastrarContato(Contato contato) {
         try {
            CRUD crud = new CRUD();
            String query = String.format("INSERT INTO Contato (nome, email, mensagem) "
                    + "VALUES('" + contato.nome + "', '" + contato.email + "', '" + contato.mensagem + "')");

            String cadastrou = crud.Cadastrar(query) ? "Contato cadastrado com sucesso, em breve entraremos em contato."
                    : "Não foi possivel cadastrar, preencha todos os campos e tente novamente.";

            System.out.println(cadastrou);
        } catch (Exception e) {
            System.out.println("Não foi possivel cadastro do Contato.");
        }
    }

    public void AtualizarContato(Contato contato) {
        try {
            CRUD crud = new CRUD();
            String query = "UPDATE Contato  SET nome = '" + contato.nome + "', mensagem = '" + contato.mensagem
                + "', email = '" + contato.email + "' WHERE id = " + contato.id;
            if (contato.id > 0) {
                crud.Atualizar(query);
                System.out.println("Contato atualizado com sucesso!");
            } else {
                System.out.println("Você precisa informa o id do contato que deseja alterar.");
            }

        } catch (Exception e) {
            System.out.println("Não foi possivel atualizar o Contato.");
        }
    }

    public void ApagarContato(int id) {
        
        try {
            if (id > 0) {
                CRUD crud = new CRUD();
                String query = "DELETE FROM Contato WHERE id = " + id;
                crud.Atualizar(query);
                System.out.println("Contato apagado.");

            } else {
                System.out.println("Você precisa informa o id do contato que deseja cancelar.");
            }
            
        } catch (Exception e) {
            System.out.println("Não foi possivel apagar o Contato.");
        }
    }

    public Contato ConsultaContato(int id) {
        try {
            CRUD crud = new CRUD();
            String query = "SELECT * FROM Contato WHERE id = " + id;
            
            var resultado = crud.Consultar(query);
            Contato contatoconsulta = new Contato();

            while (resultado.next()) {
                contatoconsulta.setId(resultado.getInt("id"));
                contatoconsulta.setNome(resultado.getString("nome"));
                contatoconsulta.setEmail(resultado.getString("email"));
                contatoconsulta.setMensagem(resultado.getString("mensagem"));
            }

            crud.Desconectar();
            return contatoconsulta;
        } catch (SQLException e) {
            System.out.println("Não foi possivel localizar o Contato.");
            return null;
        }
    }

    public void ConsultaContatos() {
        try {
            CRUD crud = new CRUD();
            String query = String.format("SELECT * FROM Contato");
            var contato2 = crud.Consultar(query);

            System.out.println("");
            System.out.println("RESULTADO DA CONSULTA DE TODOS OS CONTATOS");
            System.out.println("##########################################"
                    + "##########################################################");
            System.out.println("# ID ###        NOME       ###          EMAIL   "
                    + "       ###               MENSAGEM                  #");
            System.out.println("##################################################################"
                    + "##################################");
            while (contato2.next()) {
                System.out.println("# " + contato2.getInt("id") + "  ### " + contato2.getString("nome")
                        + " ### " + contato2.getString("email") + "  ### " + contato2.getString("mensagem") + "  ### ");
            }

            System.out.println("###################################################################"
                    + "#################################");
            crud.Desconectar();

        } catch (SQLException e) {
            System.out.println("Não foi possivel realizar a consulta.");

        }
    }
}
