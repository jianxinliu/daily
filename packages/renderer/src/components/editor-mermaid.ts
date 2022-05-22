class MermaidTemplate {
    timeSeq: string = "```mermaid\n" +
        "sequenceDiagram\n" +
        "Alice->>John: Hello John, how are you?\n" +
        "John-->>Alice: Great!\n" +
        "Alice-)John: See you later!\n" +
        "```"

    pie = "```mermaid\n" +
        "pie title Pets adopted by volunteers\n" +
        "\"Dogs\" : 386\n" +
        "\"Cats\" : 85\n" +
        "\"Rats\" : 15\n" +
        "```"
    graph = "```mermaid\n" +
        "graph LR\n" +
        "A --- B\n" +
        "B-->C[fa:fa-ban forbidden]\n" +
        "B-->D(fa:fa-spinner);\n" +
        "```"
    classDiagram = "```mermaid\n" +
        "classDiagram\n" +
        "Animal <|-- Duck\n" +
        "Animal <|-- Fish\n" +
        "Animal <|-- Zebra\n" +
        "Animal : +int age\n" +
        "Animal : +String gender\n" +
        "Animal: +isMammal()\n" +
        "Animal: +mate()\n" +
        "class Duck{\n" +
        "+String beakColor\n" +
        "+swim()\n" +
        "+quack()\n" +
        "}\n" +
        "class Fish{\n" +
        "-int sizeInFeet\n" +
        "-canEat()\n" +
        "}\n" +
        "class Zebra{\n" +
        "+bool is_wild\n" +
        "+run()\n" +
        "}\n" +
        "```"
    state = "```mermaid\n" +
        "stateDiagram-v2\n" +
        "[*] --> Still\n" +
        "Still --> [*]\n" +
        "\n" +
        "Still --> Moving\n" +
        "Moving --> Still\n" +
        "Moving --> Crash\n" +
        "Crash --> [*]\n" +
        "```"
    erDiagram = "```mermaid\n" +
        "erDiagram\n" +
        "CUSTOMER ||--o{ ORDER : places\n" +
        "ORDER ||--|{ LINE-ITEM : contains\n" +
        "CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n" +
        "```"
    journey = "```mermaid\n" +
        "journey\n" +
        "title My working day\n" +
        "section Go to work\n" +
        "Make tea: 5: Me\n" +
        "Go upstairs: 3: Me\n" +
        "Do work: 1: Me, Cat\n" +
        "section Go home\n" +
        "Go downstairs: 5: Me\n" +
        "Sit down: 5: Me\n" +
        "```"
    gantt = "```mermaid\n" +
        "gantt\n" +
        "title A Gantt Diagram\n" +
        "dateFormat  YYYY-MM-DD\n" +
        "section Section\n" +
        "A task           :a1, 2014-01-01, 30d\n" +
        "Another task     :after a1  , 20d\n" +
        "section Another\n" +
        "Task in sec      :2014-01-12  , 12d\n" +
        "another task      : 24d\n" +
        "```"
}

export default new MermaidTemplate
