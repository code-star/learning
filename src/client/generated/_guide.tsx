export const guide = {
  Backend: {
    Tooling: {
      Git: {
        content: [],
        name: "Git",
        pathSegments: ["Backend", "Tooling", "Git"],
      },
    },
    "Programming Languages": {
      Kotlin: {
        content: [],
        name: "Kotlin",
        pathSegments: ["Backend", "Programming Languages", "Kotlin"],
      },
      Java: {
        content: ["OCP Study Guide by Boyarsky and Selikoff"],
        name: "Java",
        pathSegments: ["Backend", "Programming Languages", "Java"],
      },
      Scala: {
        content: [
          "Programming in Scala by Odersky",
          "Scala for the Impatient by Hostmann Cay",
          "Introduction to the Art of Programming Using Scala by Lewis",
        ],
        name: "Scala",
        pathSegments: ["Backend", "Programming Languages", "Scala"],
      },
      Typescript: {
        content: [],
        name: "Typescript",
        pathSegments: ["Backend", "Programming Languages", "Typescript"],
      },
      Bash: {
        content: [],
        name: "Bash",
        pathSegments: ["Backend", "Programming Languages", "Bash"],
      },
      Pyton: {
        content: ["Ordina Pythoneers knowledge tree"],
        name: "Pyton",
        pathSegments: ["Backend", "Programming Languages", "Pyton"],
      },
    },
    Testing: {
      "Dependency Injection": {
        content: [],
        name: "Dependency Injection",
        pathSegments: ["Backend", "Testing", "Dependency Injection"],
      },
      "End-to-end Tests": {
        content: [],
        name: "End-to-end Tests",
        pathSegments: ["Backend", "Testing", "End-to-end Tests"],
      },
      "Test Pyramid": {
        content: [],
        name: "Test Pyramid",
        pathSegments: ["Backend", "Testing", "Test Pyramid"],
      },
      "Integration Tests": {
        content: [],
        name: "Integration Tests",
        pathSegments: ["Backend", "Testing", "Integration Tests"],
      },
      Mocking: {
        content: [],
        name: "Mocking",
        pathSegments: ["Backend", "Testing", "Mocking"],
      },
      "Given When Then": {
        content: [],
        name: "Given When Then",
        pathSegments: ["Backend", "Testing", "Given When Then"],
      },
    },
    Infrastructure: {
      "Infrastructure As Code": {
        "AWS CDK": {
          content: [],
          name: "AWS CDK",
          pathSegments: [
            "Backend",
            "Infrastructure",
            "Infrastructure As Code",
            "AWS CDK",
          ],
        },
        Terraform: {
          content: [],
          name: "Terraform",
          pathSegments: [
            "Backend",
            "Infrastructure",
            "Infrastructure As Code",
            "Terraform",
          ],
        },
        Ansible: {
          content: [],
          name: "Ansible",
          pathSegments: [
            "Backend",
            "Infrastructure",
            "Infrastructure As Code",
            "Ansible",
          ],
        },
      },
      CICD: {
        CircleCI: {
          content: [],
          name: "CircleCI",
          pathSegments: ["Backend", "Infrastructure", "CICD", "CircleCI"],
        },
        "Github Actions": {
          content: [],
          name: "Github Actions",
          pathSegments: ["Backend", "Infrastructure", "CICD", "Github Actions"],
        },
      },
    },
    "Distributed Systems": {
      "Partitioning or Sharding": {
        content: [],
        name: "Partitioning or Sharding",
        pathSegments: [
          "Backend",
          "Distributed Systems",
          "Partitioning or Sharding",
        ],
      },
      "CAP Theorem": {
        content: [],
        name: "CAP Theorem",
        pathSegments: ["Backend", "Distributed Systems", "CAP Theorem"],
      },
      "Consensus Algorithms": {
        content: [],
        name: "Consensus Algorithms",
        pathSegments: [
          "Backend",
          "Distributed Systems",
          "Consensus Algorithms",
        ],
      },
      Replication: {
        "Multi-leader": {
          content: [],
          name: "Multi-leader",
          pathSegments: [
            "Backend",
            "Distributed Systems",
            "Replication",
            "Multi-leader",
          ],
        },
        "Leader Follower": {
          content: [],
          name: "Leader Follower",
          pathSegments: [
            "Backend",
            "Distributed Systems",
            "Replication",
            "Leader Follower",
          ],
        },
        Leaderless: {
          content: ["Cassandra for developers"],
          name: "Leaderless",
          pathSegments: [
            "Backend",
            "Distributed Systems",
            "Replication",
            "Leaderless",
          ],
        },
      },
      "Eventual Consistency": {
        content: [],
        name: "Eventual Consistency",
        pathSegments: [
          "Backend",
          "Distributed Systems",
          "Eventual Consistency",
        ],
      },
      "Distributed Transactions": {
        content: [],
        name: "Distributed Transactions",
        pathSegments: [
          "Backend",
          "Distributed Systems",
          "Distributed Transactions",
        ],
      },
      content: [
        "Designing Data-Intensive Applications by Martin Kleppmann",
        "https://www.coursera.org/learn/scala-akka-reactive#syllabus",
      ],
      name: "Distributed Systems",
      pathSegments: ["Backend", "Distributed Systems"],
    },
    Messaging: {
      Actors: {
        Akka: {
          content: [],
          name: "Akka",
          pathSegments: ["Backend", "Messaging", "Actors", "Akka"],
        },
      },
      "Distributed Messaging": {
        Kafka: {
          content: [
            "Kafka: The Definitive Guide by Neha Narkhede",
            "Learn Apache Kafka for Beginners (Udemy)",
            "Getting Started With Apache Kafka (Pluralsight)",
          ],
          name: "Kafka",
          pathSegments: [
            "Backend",
            "Messaging",
            "Distributed Messaging",
            "Kafka",
          ],
          "Kafka Streams": {
            content: [
              "Kafka Streams for Data Processing (Udemy)",
              "Designing Event-Driven Systems by Ben Stopford",
              "Kafka Streams in Action by Bill Bejeck",
            ],
            name: "Kafka Streams",
            pathSegments: [
              "Backend",
              "Messaging",
              "Distributed Messaging",
              "Kafka",
              "Kafka Streams",
            ],
          },
          Administration: {
            content: ["Kafka Cluster Setup and Administration (Udemy)"],
            name: "Administration",
            pathSegments: [
              "Backend",
              "Messaging",
              "Distributed Messaging",
              "Kafka",
              "Administration",
            ],
          },
          "Kafka Connect": {
            content: ["Kafka Connect Hands-on Learning (Udemy)"],
            name: "Kafka Connect",
            pathSegments: [
              "Backend",
              "Messaging",
              "Distributed Messaging",
              "Kafka",
              "Kafka Connect",
            ],
          },
          Security: {
            content: ["Kafka Security (Udemy)"],
            name: "Security",
            pathSegments: [
              "Backend",
              "Messaging",
              "Distributed Messaging",
              "Kafka",
              "Security",
            ],
          },
          "Schema Registry": {
            content: [
              "Confluent Schema Registry & REST Proxy (Udemy)",
              "Enforcing Data Contracts with Kafka Schema Registry (Pluralsight)",
            ],
            name: "Schema Registry",
            pathSegments: [
              "Backend",
              "Messaging",
              "Distributed Messaging",
              "Kafka",
              "Schema Registry",
            ],
          },
        },
      },
      "Traditional MQ": {
        RabbitMQ: {
          content: [],
          name: "RabbitMQ",
          pathSegments: ["Backend", "Messaging", "Traditional MQ", "RabbitMQ"],
        },
        JMS: {
          content: [],
          name: "JMS",
          pathSegments: ["Backend", "Messaging", "Traditional MQ", "JMS"],
        },
      },
    },
    "Functional Programming": {
      content: [
        "Functional Programming in Scala by Chiusano and Bjarnason",
        "FP Simplified by Alvin Alexander",
        "Structure and Interpretation of Computer Programs",
        "Learn You a Haskell by Miran Lipovača",
      ],
      name: "Functional Programming",
      pathSegments: ["Backend", "Functional Programming"],
      ProFunctor: {
        content: [],
        name: "ProFunctor",
        pathSegments: ["Backend", "Functional Programming", "ProFunctor"],
      },
      Semigroup: {
        content: [],
        name: "Semigroup",
        pathSegments: ["Backend", "Functional Programming", "Semigroup"],
      },
      Optics: {
        Lens: {
          content: [],
          name: "Lens",
          pathSegments: ["Backend", "Functional Programming", "Optics", "Lens"],
        },
        Traversal: {
          content: [],
          name: "Traversal",
          pathSegments: [
            "Backend",
            "Functional Programming",
            "Optics",
            "Traversal",
          ],
        },
        Plated: {
          content: [],
          name: "Plated",
          pathSegments: [
            "Backend",
            "Functional Programming",
            "Optics",
            "Plated",
          ],
        },
        Iso: {
          content: [],
          name: "Iso",
          pathSegments: ["Backend", "Functional Programming", "Optics", "Iso"],
        },
        Prism: {
          content: [],
          name: "Prism",
          pathSegments: [
            "Backend",
            "Functional Programming",
            "Optics",
            "Prism",
          ],
        },
        Fold: {
          content: [],
          name: "Fold",
          pathSegments: ["Backend", "Functional Programming", "Optics", "Fold"],
        },
      },
      Functor: {
        content: [],
        name: "Functor",
        pathSegments: ["Backend", "Functional Programming", "Functor"],
      },
      Continuations: {
        content: [],
        name: "Continuations",
        pathSegments: ["Backend", "Functional Programming", "Continuations"],
      },
      Divisble: {
        content: [],
        name: "Divisble",
        pathSegments: ["Backend", "Functional Programming", "Divisble"],
      },
      "Contravariant Functor": {
        content: [],
        name: "Contravariant Functor",
        pathSegments: [
          "Backend",
          "Functional Programming",
          "Contravariant Functor",
        ],
      },
      "Invariant Functor": {
        content: [],
        name: "Invariant Functor",
        pathSegments: [
          "Backend",
          "Functional Programming",
          "Invariant Functor",
        ],
      },
      Applicative: {
        content: [],
        name: "Applicative",
        pathSegments: ["Backend", "Functional Programming", "Applicative"],
      },
      Recursion: {
        content: [],
        name: "Recursion",
        pathSegments: ["Backend", "Functional Programming", "Recursion"],
      },
      Monad: {
        content: [],
        name: "Monad",
        pathSegments: ["Backend", "Functional Programming", "Monad"],
      },
      "Monad Transformers": {
        content: [],
        name: "Monad Transformers",
        pathSegments: [
          "Backend",
          "Functional Programming",
          "Monad Transformers",
        ],
      },
      "Functional Operators on Collections": {
        content: [],
        name: "Functional Operators on Collections",
        pathSegments: [
          "Backend",
          "Functional Programming",
          "Functional Operators on Collections",
        ],
      },
      "Free Monad": {
        content: [],
        name: "Free Monad",
        pathSegments: ["Backend", "Functional Programming", "Free Monad"],
      },
      Monoid: {
        content: [],
        name: "Monoid",
        pathSegments: ["Backend", "Functional Programming", "Monoid"],
      },
      Traversable: {
        content: [],
        name: "Traversable",
        pathSegments: ["Backend", "Functional Programming", "Traversable"],
      },
      Foldable: {
        content: [],
        name: "Foldable",
        pathSegments: ["Backend", "Functional Programming", "Foldable"],
      },
      BiFunctor: {
        content: [],
        name: "BiFunctor",
        pathSegments: ["Backend", "Functional Programming", "BiFunctor"],
      },
    },
    Cloud: {
      Kubernetes: {
        content: [],
        name: "Kubernetes",
        pathSegments: ["Backend", "Cloud", "Kubernetes"],
      },
      Docker: {
        content: [],
        name: "Docker",
        pathSegments: ["Backend", "Cloud", "Docker"],
      },
      AWS: {
        content: [],
        name: "AWS",
        pathSegments: ["Backend", "Cloud", "AWS"],
      },
      Azure: {
        content: [],
        name: "Azure",
        pathSegments: ["Backend", "Cloud", "Azure"],
      },
    },
    Frameworks: {
      Play: {
        content: ["Lightbend's Play Essential"],
        name: "Play",
        pathSegments: ["Backend", "Frameworks", "Play"],
      },
    },
    Databases: {
      Relational: {
        Normalisation: {
          content: [],
          name: "Normalisation",
          pathSegments: ["Backend", "Databases", "Relational", "Normalisation"],
        },
        "Database Design": {
          content: [
            "SQL Antipatterns: Avoiding the Pitfalls of Database Programming by Karwin",
          ],
          name: "Database Design",
          pathSegments: [
            "Backend",
            "Databases",
            "Relational",
            "Database Design",
          ],
        },
        Triggers: {
          content: [],
          name: "Triggers",
          pathSegments: ["Backend", "Databases", "Relational", "Triggers"],
        },
        Views: {
          content: [],
          name: "Views",
          pathSegments: ["Backend", "Databases", "Relational", "Views"],
        },
        Indexes: {
          content: [],
          name: "Indexes",
          pathSegments: ["Backend", "Databases", "Relational", "Indexes"],
        },
        Transactions: {
          ACID: {
            content: [],
            name: "ACID",
            pathSegments: [
              "Backend",
              "Databases",
              "Relational",
              "Transactions",
              "ACID",
            ],
          },
          "Isolation Levels": {
            content: [],
            name: "Isolation Levels",
            pathSegments: [
              "Backend",
              "Databases",
              "Relational",
              "Transactions",
              "Isolation Levels",
            ],
          },
        },
        "Foreign Keys": {
          content: [],
          name: "Foreign Keys",
          pathSegments: ["Backend", "Databases", "Relational", "Foreign Keys"],
        },
      },
      ORM: {
        "Object-Relational Mismatch": {
          content: [],
          name: "Object-Relational Mismatch",
          pathSegments: [
            "Backend",
            "Databases",
            "ORM",
            "Object-Relational Mismatch",
          ],
        },
      },
    },
    "Software Architecture": {
      CQRS: {
        content: [],
        name: "CQRS",
        pathSegments: ["Backend", "Software Architecture", "CQRS"],
      },
      SOLID: {
        content: [],
        name: "SOLID",
        pathSegments: ["Backend", "Software Architecture", "SOLID"],
      },
      "Coupling And Cohesion": {
        content: [],
        name: "Coupling And Cohesion",
        pathSegments: [
          "Backend",
          "Software Architecture",
          "Coupling And Cohesion",
        ],
      },
      "Enterprise Integration Patterns": {
        content: [],
        name: "Enterprise Integration Patterns",
        pathSegments: [
          "Backend",
          "Software Architecture",
          "Enterprise Integration Patterns",
        ],
      },
      "Design Patterns": {
        content: ["Refactoring Guru"],
        name: "Design Patterns",
        pathSegments: ["Backend", "Software Architecture", "Design Patterns"],
      },
      "Event Sourcing": {
        content: [],
        name: "Event Sourcing",
        pathSegments: ["Backend", "Software Architecture", "Event Sourcing"],
      },
      "Clean Architecture": {
        content: [],
        name: "Clean Architecture",
        pathSegments: [
          "Backend",
          "Software Architecture",
          "Clean Architecture",
        ],
      },
      "Message-driven Microservices": {
        content: [],
        name: "Message-driven Microservices",
        pathSegments: [
          "Backend",
          "Software Architecture",
          "Message-driven Microservices",
        ],
      },
      "3-tier Architecture": {
        content: [],
        name: "3-tier Architecture",
        pathSegments: [
          "Backend",
          "Software Architecture",
          "3-tier Architecture",
        ],
      },
      DDD: {
        content: [],
        name: "DDD",
        pathSegments: ["Backend", "Software Architecture", "DDD"],
      },
    },
    "General Knowledge": {
      REST: {
        content: [],
        name: "REST",
        pathSegments: ["Backend", "General Knowledge", "REST"],
      },
      Encryption: {
        content: [],
        name: "Encryption",
        pathSegments: ["Backend", "General Knowledge", "Encryption"],
      },
      "Data Structures": {
        "TreeMap and TreeSet": {
          content: [],
          name: "TreeMap and TreeSet",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Data Structures",
            "TreeMap and TreeSet",
          ],
        },
        "HashMap and HashSet": {
          content: [],
          name: "HashMap and HashSet",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Data Structures",
            "HashMap and HashSet",
          ],
        },
        Vector: {
          content: [],
          name: "Vector",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Data Structures",
            "Vector",
          ],
        },
        LinkedList: {
          content: [],
          name: "LinkedList",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Data Structures",
            "LinkedList",
          ],
        },
      },
      SSL: {
        content: [],
        name: "SSL",
        pathSegments: ["Backend", "General Knowledge", "SSL"],
      },
      "Threads and Locks": {
        Deadlocks: {
          content: [],
          name: "Deadlocks",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Threads and Locks",
            "Deadlocks",
          ],
        },
      },
      HTTP: {
        content: [],
        name: "HTTP",
        pathSegments: ["Backend", "General Knowledge", "HTTP"],
      },
      Generics: {
        "Coveriance and Contravariance and Invariance": {
          content: [],
          name: "Coveriance and Contravariance and Invariance",
          pathSegments: [
            "Backend",
            "General Knowledge",
            "Generics",
            "Coveriance and Contravariance and Invariance",
          ],
        },
      },
    },
    Streaming: {
      "Stateful Operators": {
        Windowed: {
          content: [],
          name: "Windowed",
          pathSegments: [
            "Backend",
            "Streaming",
            "Stateful Operators",
            "Windowed",
          ],
        },
        Tables: {
          content: [],
          name: "Tables",
          pathSegments: [
            "Backend",
            "Streaming",
            "Stateful Operators",
            "Tables",
          ],
        },
      },
      "Kafka Streams": {
        content: [],
        name: "Kafka Streams",
        pathSegments: ["Backend", "Streaming", "Kafka Streams"],
      },
      "Difference Hot and Cold": {
        content: [],
        name: "Difference Hot and Cold",
        pathSegments: ["Backend", "Streaming", "Difference Hot and Cold"],
      },
      "Akka Streams": {
        content: [],
        name: "Akka Streams",
        pathSegments: ["Backend", "Streaming", "Akka Streams"],
      },
      "Stateless Operators": {
        content: [],
        name: "Stateless Operators",
        pathSegments: ["Backend", "Streaming", "Stateless Operators"],
      },
      CDC: {
        content: [],
        name: "CDC",
        pathSegments: ["Backend", "Streaming", "CDC"],
      },
      Backpressure: {
        content: [],
        name: "Backpressure",
        pathSegments: ["Backend", "Streaming", "Backpressure"],
      },
    },
  },
  Frontend: {
    Tools: {
      "NPM and Yarn": {
        content: [],
        name: "NPM and Yarn",
        pathSegments: ["Frontend", "Tools", "NPM and Yarn"],
      },
      Git: {
        content: [],
        name: "Git",
        pathSegments: ["Frontend", "Tools", "Git"],
      },
      CICD: {
        "Azure Pipeline": {
          content: [],
          name: "Azure Pipeline",
          pathSegments: ["Frontend", "Tools", "CICD", "Azure Pipeline"],
        },
        "Github Actions": {
          content: [],
          name: "Github Actions",
          pathSegments: ["Frontend", "Tools", "CICD", "Github Actions"],
        },
      },
      Scaffolding: {
        Yeoman: {
          content: [],
          name: "Yeoman",
          pathSegments: ["Frontend", "Tools", "Scaffolding", "Yeoman"],
        },
        "Angular Schematics": {
          content: [],
          name: "Angular Schematics",
          pathSegments: [
            "Frontend",
            "Tools",
            "Scaffolding",
            "Angular Schematics",
          ],
        },
      },
      "Chrome Dev Tools": {
        content: [],
        name: "Chrome Dev Tools",
        pathSegments: ["Frontend", "Tools", "Chrome Dev Tools"],
      },
    },
    "Programming Languages": {
      "CSS and LESS and SASS": {
        content: [],
        name: "CSS and LESS and SASS",
        pathSegments: [
          "Frontend",
          "Programming Languages",
          "CSS and LESS and SASS",
        ],
      },
      HTML: {
        content: [],
        name: "HTML",
        pathSegments: ["Frontend", "Programming Languages", "HTML"],
      },
      Typescript: {
        content: [],
        name: "Typescript",
        pathSegments: ["Frontend", "Programming Languages", "Typescript"],
      },
      Node: {
        content: [],
        name: "Node",
        pathSegments: ["Frontend", "Programming Languages", "Node"],
      },
      Javascript: {
        content: [],
        name: "Javascript",
        pathSegments: ["Frontend", "Programming Languages", "Javascript"],
      },
    },
    Cloud: {
      "Azure Functions": {
        content: [],
        name: "Azure Functions",
        pathSegments: ["Frontend", "Cloud", "Azure Functions"],
      },
      Docker: {
        content: [],
        name: "Docker",
        pathSegments: ["Frontend", "Cloud", "Docker"],
      },
      NGINX: {
        content: [],
        name: "NGINX",
        pathSegments: ["Frontend", "Cloud", "NGINX"],
      },
      Apache: {
        content: [],
        name: "Apache",
        pathSegments: ["Frontend", "Cloud", "Apache"],
      },
      AWS: {
        content: [],
        name: "AWS",
        pathSegments: ["Frontend", "Cloud", "AWS"],
      },
    },
    Frameworks: {
      Angular: {
        content: [],
        name: "Angular",
        pathSegments: ["Frontend", "Frameworks", "Angular"],
      },
      React: {
        content: [],
        name: "React",
        pathSegments: ["Frontend", "Frameworks", "React"],
      },
      Monorepos: {
        Nx: {
          content: [],
          name: "Nx",
          pathSegments: ["Frontend", "Frameworks", "Monorepos", "Nx"],
        },
        Lerna: {
          content: [],
          name: "Lerna",
          pathSegments: ["Frontend", "Frameworks", "Monorepos", "Lerna"],
        },
      },
    },
    "Software Architecture": {
      Async: {
        Callbacks: {
          content: [],
          name: "Callbacks",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "Async",
            "Callbacks",
          ],
        },
        "async and await": {
          content: [],
          name: "async and await",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "Async",
            "async and await",
          ],
        },
        Promises: {
          content: [],
          name: "Promises",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "Async",
            "Promises",
          ],
        },
        Generators: {
          content: [],
          name: "Generators",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "Async",
            "Generators",
          ],
        },
      },
      "State Management": {
        MobX: {
          content: [],
          name: "MobX",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "State Management",
            "MobX",
          ],
        },
        Redux: {
          "Redux Toolkit": {
            content: [],
            name: "Redux Toolkit",
            pathSegments: [
              "Frontend",
              "Software Architecture",
              "State Management",
              "Redux",
              "Redux Toolkit",
            ],
          },
          content: [],
          name: "Redux",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "State Management",
            "Redux",
          ],
        },
        NgRx: {
          content: [],
          name: "NgRx",
          pathSegments: [
            "Frontend",
            "Software Architecture",
            "State Management",
            "NgRx",
          ],
        },
      },
      "Progressive Web Apps": {
        content: [],
        name: "Progressive Web Apps",
        pathSegments: [
          "Frontend",
          "Software Architecture",
          "Progressive Web Apps",
        ],
      },
      "Web Workers": {
        content: [],
        name: "Web Workers",
        pathSegments: ["Frontend", "Software Architecture", "Web Workers"],
      },
      GraphQL: {
        content: [],
        name: "GraphQL",
        pathSegments: ["Frontend", "Software Architecture", "GraphQL"],
      },
      "Service Workers": {
        content: [],
        name: "Service Workers",
        pathSegments: ["Frontend", "Software Architecture", "Service Workers"],
      },
    },
    "Functional Programming": {
      Recursion: {
        content: [],
        name: "Recursion",
        pathSegments: ["Frontend", "Functional Programming", "Recursion"],
      },
      Composition: {
        content: [],
        name: "Composition",
        pathSegments: ["Frontend", "Functional Programming", "Composition"],
      },
      "Functional Operators": {
        content: [],
        name: "Functional Operators",
        pathSegments: [
          "Frontend",
          "Functional Programming",
          "Functional Operators",
        ],
      },
    },
    Streaming: {
      Websockets: {
        content: [],
        name: "Websockets",
        pathSegments: ["Frontend", "Streaming", "Websockets"],
      },
      RxJs: {
        content: [],
        name: "RxJs",
        pathSegments: ["Frontend", "Streaming", "RxJs"],
      },
    },
  },
};
