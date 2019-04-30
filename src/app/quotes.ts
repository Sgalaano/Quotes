
export class Quote {

    showDescription= false;
    
      constructor(
        public description: string,
        public name: string,
        public submitter: string,
        public completeDate: Date) {
    }
      }