import type { ImageMetadata } from 'astro';
import surLesGenoux from '../assets/livres/sur-les-genoux-de-maman.webp';
import devineCombien from '../assets/livres/devine-combien-je-t-aime.jpg';
import jeTAime from '../assets/livres/je-t-aime.jpg';
import maMaman from '../assets/livres/ma-maman.jpg';
import monPapa from '../assets/livres/mon-papa.jpg';
import jeSeraiToujours from '../assets/livres/je-serai-toujours-la-pour-toi.jpg';
import baleine from '../assets/livres/si-tu-veux-voir-une-baleine.jpg';
import quelquePart from '../assets/livres/quelque-part-sous-les-etoiles.jpg';
import unCoeur from '../assets/livres/un-coeur-qui-bat.jpg';
import bonVoyage from '../assets/livres/bon-voyage-bebe.jpg';
import abris from '../assets/livres/abris.jpg';
import bebesChouettes from '../assets/livres/bebes-chouettes.webp';
import monToutPetit from '../assets/livres/mon-tout-petit.jpg';
import chut from '../assets/livres/chut-les-petits-lapins.jpg';
import bonsoirLune from '../assets/livres/bonsoir-lune.webp';
import bon from '../assets/livres/bon.webp';
import petitesMains from '../assets/livres/2-petites-mains-et-2-petits-pieds.jpg';
import pomme from '../assets/livres/pomme-pomme-pomme.svg';
import poule from '../assets/livres/une-poule-sur-un-mur.jpg';
import commeCa from '../assets/livres/comme-ca.jpg';
import amourProfond from '../assets/livres/un-amour-profond.png';
import aToiQuiEsLa from '../assets/livres/a-toi-qui-es-la.jpg';
import pablo from '../assets/livres/pablo.jpg';

export interface Book {
  title: string;
  author: string;
  illustrator?: string;
  translator?: string;
  summary: string;
  theme: string;
  cover: ImageMetadata;
  coverAlt?: string;
}

export const books: Book[] = [
  { title: 'Sur les genoux de maman', author: 'Ann Herbert Scott', illustrator: 'Glo Coalson', summary: 'Michaël aime se blottir sur les genoux de sa maman avec ses jouets et ses affaires. Lorsque le bébé veut lui aussi trouver sa place, Michaël découvre qu’il faut apprendre à partager. Un album tendre sur l’arrivée d’un petit frère ou d’une petite sœur.', theme: 'Famille et tendresse', cover: surLesGenoux, coverAlt: 'Couverture de Sur les genoux de maman' },
  { title: 'Devine combien je t’aime', author: 'Sam McBratney', illustrator: 'Anita Jeram', summary: 'À l’heure du coucher, Petit Lièvre Brun et Grand Lièvre Brun cherchent à se dire combien ils s’aiment. Un album tendre sur l’amour et les liens qui unissent parents et enfants.', theme: 'Famille et tendresse', cover: devineCombien, coverAlt: 'Couverture de Devine combien je t’aime de Sam McBratney et Anita Jeram' },
  { title: 'Je t’aime', author: 'Guillaume Olive', illustrator: 'Zhi Hong He', summary: 'Un enfant s’endort en se demandant ce que signifie « je t’aime ». Dans ses rêves, il interroge plusieurs animaux, qui lui donnent chacun leur définition de l’amour.', theme: 'Famille et tendresse', cover: jeTAime, coverAlt: 'Couverture de Je t’aime de Guillaume Olive et Zhi Hong He' },
  { title: 'Ma maman', author: 'Anthony Browne', illustrator: 'Anthony Browne', summary: 'Un petit garçon présente sa formidable maman et ses nombreux talents. Un album tendre et plein d’humour.', theme: 'Famille et tendresse', cover: maMaman, coverAlt: 'Couverture de Ma maman' },
  { title: 'Mon papa', author: 'Anthony Browne', illustrator: 'Anthony Browne', summary: 'Un enfant raconte toutes les qualités de son papa, qu’il imagine fort, drôle et capable de grandes choses. Une déclaration d’amour familiale.', theme: 'Famille et tendresse', cover: monPapa, coverAlt: 'Couverture de Mon papa' },
  { title: 'Je serai toujours là pour toi', author: 'Mark Sperring', illustrator: 'Layn Marlow', summary: 'Une histoire sur la présence, la protection et l’amour inconditionnel. Elle rassure l’enfant sur le fait qu’il pourra toujours compter sur quelqu’un.', theme: 'Famille et tendresse', cover: jeSeraiToujours, coverAlt: 'Couverture de Je serai toujours là pour toi' },
  { title: 'Si tu veux voir une baleine', author: 'Julie Fogliano', illustrator: 'Erin E. Stead', summary: 'Un enfant part à la recherche d’une baleine. Pour espérer l’apercevoir, il faut apprendre à attendre, observer et rester attentif au monde qui nous entoure.', theme: 'Découvertes et émotions', cover: baleine, coverAlt: 'Couverture de Si tu veux voir une baleine' },
  { title: 'Quelque part sous les étoiles', author: 'Ramona Bădescu', illustrator: 'Amélie Jackowski', summary: 'Un petit ver vient au monde et découvre progressivement les formes, les couleurs, les plantes et les animaux qui l’entourent. Un album sensoriel sur les premiers instants de la vie.', theme: 'Découvertes et émotions', cover: quelquePart, coverAlt: 'Couverture de Quelque part sous les étoiles' },
  { title: 'Un cœur qui bat', author: 'Virginie Aladjidi', illustrator: 'Joëlle Jolivet', summary: 'Un album illustré qui invite à découvrir le corps, les sensations et le vivant à travers le symbole du cœur qui bat.', theme: 'Découvertes et émotions', cover: unCoeur, coverAlt: 'Couverture de Un cœur qui bat' },
  { title: 'Bon voyage, bébé !', author: 'Béatrice Alemagna', illustrator: 'Béatrice Alemagna', summary: 'Les préparatifs du coucher de bébé sont racontés comme ceux d’un grand départ en voyage. Un album plein d’imagination autour du rituel du soir.', theme: 'Découvertes et émotions', cover: bonVoyage, coverAlt: 'Couverture de Bon voyage bébé' },
  { title: 'Abris', author: 'Emmanuelle Houdart', illustrator: 'Emmanuelle Houdart', summary: 'Du ventre maternel au berceau, de la maison à l’amour des proches, l’autrice explore les différentes formes de refuge et de protection dans un album aux phrases courtes et musicales.', theme: 'Découvertes et émotions', cover: abris, coverAlt: 'Couverture de Abris' },
  { title: 'Bébés chouettes', author: 'Martin Waddell', illustrator: 'Patrick Benson', summary: 'Trois petites chouettes se réveillent et constatent que leur maman est partie. Elles attendent son retour en se rassurant mutuellement. Une histoire sur la séparation et la confiance.', theme: 'Animaux et sommeil', cover: bebesChouettes, coverAlt: 'Couverture de Bébés chouettes' },
  { title: 'Mon Tout-Petit', author: 'Jo Weaver', illustrator: 'Jo Weaver', summary: 'Une maman ourse accompagne son petit dans ses premières découvertes au fil des saisons. Une histoire sur la relation parent-enfant et l’autonomie.', theme: 'Animaux et sommeil', cover: monToutPetit, coverAlt: 'Couverture de Mon Tout-Petit' },
  { title: 'Chut ! Il ne faut pas réveiller les petits lapins qui dorment', author: 'Amélie Jackowski', illustrator: 'Amélie Jackowski', summary: 'Un album sur la nuit et ses sensations apaisantes, à lire doucement avant le coucher pour ne pas réveiller les petits lapins.', theme: 'Animaux et sommeil', cover: chut, coverAlt: 'Couverture de Chut ! Il ne faut pas réveiller les petits lapins qui dorment' },
  { title: 'Bonsoir lune', author: 'Margaret Wise Brown', illustrator: 'Clement Hurd', summary: 'Un petit lapin dit bonne nuit aux objets et aux éléments qui l’entourent dans sa chambre. Un grand classique pour accompagner le rituel du coucher.', theme: 'Animaux et sommeil', cover: bonsoirLune, coverAlt: 'Couverture de Bonsoir lune' },
  { title: 'Bon…', author: 'Jeanne Ashbé', illustrator: 'Jeanne Ashbé', summary: 'Un petit canard sort de son œuf, plonge dans l’eau puis s’envole. Deux, trois et bientôt de nombreux autres canetons l’imitent. Un album rythmé pour jouer avec les sons et les mots.', theme: 'Animaux et sommeil', cover: bon, coverAlt: 'Couverture de Bon… de Jeanne Ashbé' },
  { title: '2 petites mains et 2 petits pieds', author: 'Mem Fox', illustrator: 'Helen Oxenbury', summary: 'Une comptine présente des bébés nés dans différents endroits du monde. Malgré leurs différences, ils ont tous deux petites mains et deux petits pieds. Une histoire sur la diversité et l’égalité.', theme: 'Comptines et premières découvertes', cover: petitesMains, coverAlt: 'Couverture de 2 petites mains et 2 petits pieds' },
  { title: 'Pomme pomme pomme', author: 'Corinne Dreyfuss', illustrator: 'Corinne Dreyfuss', summary: 'Une histoire rythmée et ludique autour d’une pomme, avec des répétitions qui invitent les tout-petits à observer, anticiper et participer à la lecture.', theme: 'Comptines et premières découvertes', cover: pomme, coverAlt: 'Couverture illustrée de Pomme pomme pomme' },
  { title: 'Une poule sur un mur', author: 'Thierry Dedieu', illustrator: 'Thierry Dedieu', summary: 'La célèbre comptine « Une poule sur un mur » est mise en images avec humour et en noir et blanc. Un album grand format pensé pour les tout-petits.', theme: 'Comptines et premières découvertes', cover: poule, coverAlt: 'Couverture de Une poule sur un mur de Thierry Dedieu' },
  { title: 'Comme ça', author: 'Claire Lebourg', illustrator: 'Claire Lebourg', summary: 'Le jour de la naissance d’un enfant, une nouvelle vie commence. Avec tendresse, l’album raconte le quotidien d’une famille, ses joies, ses inquiétudes et ses retrouvailles.', theme: 'Comptines et premières découvertes', cover: commeCa, coverAlt: 'Couverture de Comme ça' },
  { title: 'Un amour profond', author: 'Stephen Hogtun', illustrator: 'Stephen Hogtun', translator: 'Lyse Leroy', summary: 'Une maman baleine met au monde son petit, le guide, le nourrit et lui apprend à vivre. Lorsqu’il devient grand, vient le moment de la séparation, mais le chant d’amour de sa mère continue de l’accompagner.', theme: 'Famille et tendresse', cover: amourProfond, coverAlt: 'Couverture de Un amour profond' },
  { title: 'À toi qui es là', author: 'Albane Gellé et 20 autres poètes et poétesses', illustrator: 'Maya McCallum', summary: 'Un recueil de 30 poèmes inédits écrits pour les nouveau-nés et leurs parents. Ces textes poétiques évoquent la grossesse, la naissance et le monde qui s’ouvre au bébé, pour partager un moment de lecture et de douceur.', theme: 'Famille et tendresse', cover: aToiQuiEsLa, coverAlt: 'Couverture de À toi qui es là, poésie pour nouveau-né' },
];

/** Le livre offert à chaque famille lors de son arrivée dans le service. */
export const giftBook = { title: 'Pablo', author: 'Rascal', cover: pablo };

export const themes = ['Tous', ...new Set(books.map((book) => book.theme))];
