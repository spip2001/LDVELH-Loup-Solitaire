
export class DisciplineKai {

    public constructor(
        public nom: string, 
        public description: string) {

    }
}

export class DisciplinesKai {
    public static CAMOUFLAGE = new DisciplineKai(
        'Camouflage', 
        'Permet au Seigneur Kaï de se fondre dans le paysage.'
    );
    public static CHASSE = new DisciplineKai(
        'Chasse', 
        'Donne au Seigneur Kaï l\'assurance qu\'il ne mourra jamais de faim même s\'il se trouve dans un environnement hostile'
    );
    public static SIXIEME_SENS = new DisciplineKai(
        'Sixième sens', 
        'Le Seigneur Kaï devine les dangers imminents qui le menacent.'
    );
    public static ORIENTATION = new DisciplineKai(
        'Orientation', 
        'Le Seigneur Kaï saura ainsi quel chemin il convient d\'emprunter'
    );
    public static GUERISON = new DisciplineKai(
        'Guérison', 
        'Donne la faculté de récupérer des points d\'ENDURANCE perdus lors d\'un combat.'
    ); 
    public static MAITRISE_DES_ARMES = new DisciplineKai(
        'Maîtrise des armes', 
        ''
    );
    public static BOUCLIER_SPYCHIQUE = new DisciplineKai(
        'Bouclier psychique', 
        ''
    );
    public static PUISSANCE_PSYCHIQUE = new DisciplineKai(
        'Puisance psychique', 
        ''
    );
    public static COMMUNICATION_ANIMALE = new DisciplineKai(
        'Communication animale', 
        ''
    );
    public static MAITRISE_PSY_MATIERE = new DisciplineKai(
        'Maîtrise psychique de la matière', 
        ''
    );
}
