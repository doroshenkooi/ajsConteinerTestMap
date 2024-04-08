import errorRepository from './errorRepository';

const repository = new errorRepository();
repository.translate(500); 
repository.translate(404); 
repository.translate(400); 
repository.translate(999); 
