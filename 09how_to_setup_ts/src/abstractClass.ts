abstract class TakePhotos {
    constructor(
        public cameraMode:  string, 
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        //some complex calculation

        return 8;
    }
}

// whatever the class is abstract it doesn't allow to create Object from it
// abstract class is just an blueprint of the class
// any class that extends the Abstract class, that class can have instance of it
class InstagramMedia extends TakePhotos {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}
const sl = new InstagramMedia("hello", "Hello", 8);

sl.getReelTime()