package airlinestickets;

import classes.Cliente;
import classes.Contato;
import classes.Viagem;
import java.util.List;
import java.util.Scanner;

/**
 * @author Nina
 */
public class AirlinesTickets {

    public static void main(String[] args) {
        // VARIAVEIS - INSTANCIA 
        List<Contato> contatos = null;
        Contato contato = new Contato();
        List<Cliente> clientes = null;
        Cliente cliente = new Cliente();
        List<Viagem> viagens = null;
        Viagem viagem = new Viagem();
        Scanner entrada = new Scanner(System.in);

        int menu = 0;
        int submenu = 0;

        do {
            submenu = 0;
            System.out.println("##### BEM-VINDOS AO MENU DA AGENCIA DE VIAGENS AIRLINES TICKETS ####\n");
            System.out.println("===== Escolha uma das opções abaixo =====");
            System.out.println("1 - Cadastros");
            System.out.println("2 - Consultas");
            System.out.println("3 - Atualizar");
            System.out.println("4 - Excluir");
            System.out.println("5 - Sair");
            menu = Integer.parseInt(entrada.nextLine());

            while (menu == 1 && submenu != 4) {
                System.out.println("===== Escolha uma das opções abaixo =====");
                System.out.println("1 - Cadastrar Cliente");
                System.out.println("2 - Cadastrar Viagem");
                System.out.println("3 - Cadastrar Contato");
                System.out.println("4 - Voltar ao Menu Principal");
                submenu = Integer.parseInt(entrada.nextLine());
                var vincular = 0;
                switch (submenu) {
                    case 1:
                        System.out.println("Bem vindo(a) ao cadastro de Cliente");
                        cliente = new Cliente();
                        System.out.println("Digite seu Nome:");
                        cliente.setNome(entrada.nextLine());
                        System.out.println("Digite sua Data de Nascimento:");
                        cliente.setData_nascimento(entrada.nextLine());
                        System.out.println("Digite seu CPF:");
                        cliente.setCpf(entrada.nextLine());
                        System.out.println("Digite seu Telefone de Contato:");
                        cliente.setTelefone(entrada.nextLine());

                        System.out.println("Deseja vincular uma viagem a seu cadastro? 1 PARA SIM e 2 PARA NAO:");
                        vincular = Integer.parseInt(entrada.nextLine());
                        if (vincular == 1) {
                            viagem = new Viagem();
                            viagem.ConsultaViagens();
                            System.out.println("Digite o ID da viagem que deseja vincular:");
                            viagem.setId(Integer.parseInt(entrada.nextLine()));
                            cliente.setViagem(viagem);
                        }

                        cliente.CadastrarCliente(cliente);

                        break;

                    case 2:
                        System.out.println("Bem vindo(a) ao cadastro de Viagem");
                        viagem = new Viagem();
                        System.out.println("Digite sua Origem:");
                        viagem.setOrigem(entrada.nextLine());
                        System.out.println("Digite seu Destino:");
                        viagem.setDestino(entrada.nextLine());
                        System.out.println("Digite a Data de Ida:");
                        viagem.setData_ida(entrada.nextLine());
                        System.out.println("Digite a Data de Volta:");
                        viagem.setData_volta(entrada.nextLine());
                        System.out.println("Digite o Valor:");
                        viagem.setValor(entrada.nextLine());

                        viagem.CadastrarViagem(viagem);
                        break;

                    case 3:
                        System.out.println("Bem vindo(a) ao cadastro de Contato");
                        contato = new Contato();
                        System.out.println("Digite seu Nome:");
                        contato.setNome(entrada.nextLine());
                        System.out.println("Digite seu E-mail:");
                        contato.setEmail(entrada.nextLine());
                        System.out.println("Digite a Mensagem:");
                        contato.setMensagem(entrada.nextLine());

                        contato.CadastrarContato(contato);
                        break;

                    case 4:
                        break;

                    default:
                        System.out.println("Escolha uma das opções.");
                }
            }

            while (menu == 2 && submenu != 7) {
                System.out.println("===== Escolha uma das opções abaixo =====");
                System.out.println("1 - Consulta Cliente por ID");
                System.out.println("2 - Listar Todos os Clientes");
                System.out.println("3 - Consulta Viagem por ID");
                System.out.println("4 - Listar Todos as Viagens");
                System.out.println("5 - Consulta Contato por ID");
                System.out.println("6 - Listar Todos os Contatos");
                System.out.println("7 - Voltar ao Menu Principal");
                submenu = Integer.parseInt(entrada.nextLine());
                var id = 0;

                switch (submenu) {
                    case 1:
                        cliente = new Cliente();
                        System.out.println("Digite o ID do Cliente");
                        id = Integer.parseInt(entrada.nextLine());
                        cliente = cliente.ConsultaCliente(id);
                        System.out.println();
                        System.out.println("RESULTADO DA CONSULTA");
                        if (cliente.getId() > 0) {

                            System.out.println("##########################################"
                                    + "#####################################################################");
                            System.out.println("# ID ###        NOME       ###          CPF   "
                                    + "       ###   DATA NASCIMENTO   ###   TELEFONE   ####   ID VIAGEM   #");
                            System.out.println("##########################################"
                                    + "#####################################################################");

                            System.out.println("# " + cliente.getId() + "  ### " + cliente.getNome() + " ### " + cliente.getCpf()
                                    + "  ### " + cliente.getData_nascimento() + "  ### " + cliente.getTelefone() + "  ### "
                                    + (cliente.getViagem().getId() != null ? cliente.getViagem().getId() : 0) + " #");
                            System.out.println("##########################################"
                                    + "#####################################################################");
                            System.out.println();
                        } else {
                            System.out.println("NENHUM CLIENTE FOI ENCONTRADO COM ESSE ID");
                            System.out.println();
                        }
                        break;

                    case 2:
                        System.out.println();
                        cliente.ConsultaClientes();
                        System.out.println();
                        break;

                    case 3:
                        viagem = new Viagem();
                        System.out.println("Digite o ID da Viagem");
                        id = Integer.parseInt(entrada.nextLine());
                        viagem = viagem.ConsultaViagem(id);
                        System.out.println();
                        System.out.println("RESULTADO DA CONSULTA");
                        if (viagem.getId() > 0) {
                            System.out.println("##########################################"
                                    + "#####################################################################");
                            System.out.println("# ID ###        ORIGEM       ###          DESTINO   "
                                    + "       ###   DATA IDA   ###   DATA VOLTA   ####   VALOR   #");
                            System.out.println("##########################################"
                                    + "#####################################################################");

                            System.out.println("# " + viagem.getId() + "  ### " + viagem.getOrigem()
                                    + " ### " + viagem.getDestino() + "  ### " + viagem.getData_ida() + "  ### "
                                    + viagem.getData_volta() + "  ### " + viagem.getValor() + "  #");

                            System.out.println("##########################################"
                                    + "#####################################################################");
                            System.out.println();
                        } else {

                            System.out.println("NENHUMA VIAGEM FOI ENCONTRADO COM ESSE ID");
                            System.out.println();
                        }
                        break;

                    case 4:
                        System.out.println();
                        viagem.ConsultaViagens();
                        System.out.println();
                        break;

                    case 5:
                        contato =  new Contato();
                        System.out.println("Digite o ID do Contato");
                        id = Integer.parseInt(entrada.nextLine());
                        contato = contato.ConsultaContato(id);
                        System.out.println();
                        System.out.println("RESULTADO DA CONSULTA");
                        if (contato.getId() > 0) {

                            System.out.println("RESULTADO DA CONSULTA");
                            System.out.println("##########################################"
                                    + "##########################################################");
                            System.out.println("# ID ###        NOME       ###          EMAIL   "
                                    + "       ###               MENSAGEM                  #");
                            System.out.println("##################################################################"
                                    + "##################################");

                            System.out.println("# " + contato.getId() + "  ### " + contato.getNome()
                                    + " ### " + contato.getEmail() + "  ### " + contato.getMensagem() + "  #");

                            System.out.println("###################################################################"
                                    + "#################################");
                            System.out.println();
                        } else {
                            System.out.println("NENHUMA CONTATO FOI ENCONTRADO COM ESSE ID");
                            System.out.println();
                        }

                        break;

                    case 6:
                        System.out.println();
                        contato.ConsultaContatos();
                        System.out.println();
                        break;
                    case 7:
                        break;
                    default:
                        System.out.println("Escolha uma das opções.");
                }
            }

            while (menu == 3 && submenu != 4) {
                System.out.println("===== Escolha uma das opções abaixo =====");
                System.out.println("1 - Atualizar Cliente");
                System.out.println("2 - Atualizar Viagem");
                System.out.println("3 - Atualizar Contato");
                System.out.println("4 - Voltar ao Menu Principal");
                submenu = Integer.parseInt(entrada.nextLine());
                var vincular = 0;
                var id = 0;
                switch (submenu) {
                    case 1:
                        System.out.println("Bem vindo(a) a atualização de dados de Cliente");
                        cliente = new Cliente();
                        
                        System.out.println("Deseja visualizar a lista de clientes para escolher o ID? 1 PARA SIM e 2 PARA NAO:");
                        vincular = Integer.parseInt(entrada.nextLine());
                        if (vincular == 1) {
                            System.out.println();
                            cliente.ConsultaClientes();
                            System.out.println();
                        }
                        
                        System.out.println("Digite o ID do cliente que você deseja atualizar:");
                        id =  Integer.parseInt(entrada.nextLine());
                        cliente = cliente.ConsultaCliente(id);
                        
                        System.out.println("Digite seu novo Nome:");
                        cliente.setNome(entrada.nextLine());
                        System.out.println("Digite sua nova Data de Nascimento:");
                        cliente.setData_nascimento(entrada.nextLine());
                        System.out.println("Digite seu novo CPF:");
                        cliente.setCpf(entrada.nextLine());
                        System.out.println("Digite seu novo Telefone de Contato:");
                        cliente.setTelefone(entrada.nextLine());

                        System.out.println("Deseja vincular uma viagem a seu cadastro? 1 PARA SIM e 2 PARA NAO:");
                        vincular = Integer.parseInt(entrada.nextLine());
                        if (vincular == 1) {
                            viagem = new Viagem();
                            viagem.ConsultaViagens();
                            System.out.println("Digite o ID da nova viagem que deseja vincular:");
                            viagem.setId(Integer.parseInt(entrada.nextLine()));
                            cliente.setViagem(viagem);
                        }
                        
                        cliente.AtualizarCliente(cliente);

                        break;

                    case 2:
                        System.out.println("Bem vindo(a) a atualização de dados de Viagem");
                        viagem = new Viagem();
                        
                        System.out.println("Deseja visualizar a lista de viagens para escolher o ID? 1 PARA SIM e 2 PARA NAO:");
                        vincular = Integer.parseInt(entrada.nextLine());
                        if (vincular == 1) {
                            System.out.println();
                            viagem.ConsultaViagens();
                            System.out.println();
                        }
                        
                        System.out.println("Digite o ID da viagem que você deseja atualizar:");
                        id =  Integer.parseInt(entrada.nextLine());
                        viagem = viagem.ConsultaViagem(id);
                        
                        System.out.println("Digite sua nova Origem:");
                        viagem.setOrigem(entrada.nextLine());
                        System.out.println("Digite seu novo Destino:");
                        viagem.setDestino(entrada.nextLine());
                        System.out.println("Digite a nova Data de Ida:");
                        viagem.setData_ida(entrada.nextLine());
                        System.out.println("Digite a nova Data de Volta:");
                        viagem.setData_volta(entrada.nextLine());
                        System.out.println("Digite o novo Valor:");
                        viagem.setValor(entrada.nextLine());

                        viagem.AtualizarViagem(viagem);
                        break;

                    case 3:
                        System.out.println("Bem vindo(a) a atualização de dados de Contato");
                        contato = new Contato();
                        
                         System.out.println("Deseja visualizar a lista de contatos para escolher o ID? 1 PARA SIM e 2 PARA NAO:");
                        vincular = Integer.parseInt(entrada.nextLine());
                        if (vincular == 1) {
                            System.out.println();
                            contato.ConsultaContatos();
                            System.out.println();
                        }
                        
                        System.out.println("Digite o ID do COntato que você deseja atualizar:");
                        id =  Integer.parseInt(entrada.nextLine());
                        contato = contato.ConsultaContato(id);
                        
                        System.out.println("Digite seu novo Nome:");
                        contato.setNome(entrada.nextLine());
                        System.out.println("Digite seu novo E-mail:");
                        contato.setEmail(entrada.nextLine());
                        System.out.println("Digite a nova Mensagem:");
                        contato.setMensagem(entrada.nextLine());

                        contato.AtualizarContato(contato);
                        break;

                    case 4:
                        break;

                    default:
                        System.out.println("Escolha uma das opções.");
                }
            }

            while (menu == 4 && submenu != 4) {
                System.out.println("===== Escolha uma das opções abaixo =====");
                System.out.println("1 - Exluir Cliente por ID");
                System.out.println("2 - Excluir Viagem por ID");
                System.out.println("3 - Excluir Contato por ID");
                System.out.println("4 - Voltar ao Menu Principal");
                submenu = Integer.parseInt(entrada.nextLine());
                var id = 0;

                switch (submenu) {
                    case 1:
                        System.out.println();
                        cliente.ConsultaClientes();
                        System.out.println();
                        System.out.println("Digite um dos ID dos Clientes listados acima para excluir:");
                        id = Integer.parseInt(entrada.nextLine());
                        cliente.ApagarCliente(id);
                        break;

                    case 2:
                        System.out.println();
                        viagem.ConsultaViagens();
                        System.out.println();
                        System.out.println("Digite um dos ID das Viagens listados acima para excluir:");
                        id = Integer.parseInt(entrada.nextLine());
                        viagem.ApagarViagem(id);
                        break;

                    case 3:
                        System.out.println();
                        contato.ConsultaContatos();
                        System.out.println();
                        System.out.println("Digite um dos ID dos Contatos listados acima para excluir:");
                        id = Integer.parseInt(entrada.nextLine());
                        contato.ApagarContato(id);
                        break;

                    case 4:
                        break;

                    default:
                        System.out.println("Escolha uma das opções.");
                }
            }

        } while (menu != 5);
    }

}
