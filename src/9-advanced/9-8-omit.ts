{
    /*
    * Omit
    *  - 기존의 타입에서 원하는 데이터만 제거하여 좀 더 제한적인 타입을 만들 때 사용
    */

    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetaData = Omit<Video, 'url' | 'data' | 'notInVideo'>;    // 원래 타입에 없는 키도 선택 가능 

    function getVideo(id: string): Video {
        return {
            id,
            title: 'title',
            url: 'http://...',
            data: 'byte-data...'
        };
    }

    function getVideoMetaData(id: string): VideoMetaData {
        return {
            id: id,
            title: 'title'
        };
    }
}