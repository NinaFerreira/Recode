package config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author Nina
 */

public class ConexaoBD {

    public static void main(String[] args) {
        ConexaoBD conexao = new ConexaoBD();
        Connection conn = conexao.conectar();
        conexao.desconectar(conn);

    }

    // CONEXÃO COM O BANCO DE DADOS
    public Connection conectar() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost/airlinestickets", "root", "Airlines@1");
            
        } catch (SQLException ex) {
            System.out.println("Erro: Não conseguiu conectar no BD.");
            
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConexaoBD.class.getName()).log(Level.SEVERE, null, ex);
        } 
//        catch (ClassNotFoundException ex) {
//            System.out.println("Erro: Não encontrou o driver do BD.");
//        }

        return conn;
    }

    // DESCONECTA DO BANCO DE DADOS
    public void desconectar(Connection conn) {
        try {
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (SQLException ex) {
            System.out.println("Não conseguiu desconectar do BD.");
        }
    }
}
