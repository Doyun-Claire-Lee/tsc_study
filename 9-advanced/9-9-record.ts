{
    /*
    * Record
    * - Map과 비슷한 원리로 두 개의 타입을 키, 밸류로 엮어 사용
    */

    type PageInfo = {
        title: string;
    };

    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page, PageInfo> = {
        home: {title: 'Home'},
        about: {title: 'About'},
        contact: {title: 'Contact'}
    };
}