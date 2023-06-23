Inicia um novo repositório Git local na pasta atual.
````
git init: 
````
Baixa todas as branches no repositório remoto 
````
git fetch origin
````
Cria uma cópia local de um repositório remoto.
````
git clone <URL>: 
````
Adiciona um arquivo específico ao índice (staging area) para ser commitado posteriormente.
````
git add <arquivo>: 
````
Adiciona todas as alterações realizadas na pasta atual ao índice (staging area).
````
git add . ou git add --all: 
````
Cria um novo commit com as alterações adicionadas ao índice.
````
git commit -m "mensagem do commit": 
````
Exibe o status atual do repositório, mostrando quais arquivos foram modificados, adicionados ou removidos.
````
git status: 
````
Envia os commits locais para um repositório remoto.
````
git push: 
````
Obtém as atualizações mais recentes de um repositório remoto e mescla com o branch local atual.
````
git pull: 
````
Lista todos os branches locais presentes no repositório.
````
git branch: 
````
Cria um novo branch com o nome especificado.
````
git branch <nome_branch>: 
````
Muda para o branch especificado.
````
git checkout <nome_branch>: 
````
Mescla as alterações do branch especificado com o branch atual.
````
git merge <nome_branch>: 
````
Exibe um histórico dos commits realizados no repositório.
````
git log: 
````
Mostra as diferenças entre o estado atual do repositório e a última versão confirmada
````
git diff: 
````

## Dinâmica  de trabalho
````
Em resumo, as "Issues" são usadas para relatar problemas ou solicitar recursos,
enquanto os "Pull Requests" são usados para propor alterações e permitir a
revisão e mesclagem dessas alterações. Ambos os recursos desempenham um papel
importante na colaboração eficiente de projetos no Git.
````

Issues
````
As "Issues" são usadas para rastrear tarefas, melhorias, bugs ou discussões relacionadas a um projeto específico.
Elas servem como um sistema de acompanhamento de problemas, permitindo que os membros da equipe ou a comunidade
informem sobre problemas encontrados ou solicitem novos recursos. Cada issue geralmente inclui um título,
uma descrição detalhada do problema ou solicitação e pode ser atribuída a um ou vários colaboradores.
As issues também podem ser classificadas com etiquetas para organizar e filtrar as informações.
Elas fornecem um meio de comunicação transparente entre os membros da equipe e ajudam a manter o registro de discussões,
decisões e resoluções.
````

Pull Requests:
````
Os "Pull Requests" (ou PRs) são uma parte essencial do fluxo de trabalho de colaboração do Git.
Eles permitem que os membros da equipe proponham alterações em um projeto, normalmente uma ramificação
(branch) separada do repositório principal, e solicitem que essas alterações sejam revisadas e mescladas
(merged) no código base. Os PRs são usados principalmente quando se trabalha em equipe, permitindo que
outros membros do projeto revisem as alterações, discutam, façam comentários e solicitem modificações
antes de serem mescladas ao ramo principal. Eles fornecem um processo estruturado para garantir que as
alterações sejam revisadas e testadas antes de serem incorporadas ao código principal. Os PRs podem
estar vinculados a issues específicas, permitindo que as alterações propostas sejam relacionadas a um
problema em aberto.
````
