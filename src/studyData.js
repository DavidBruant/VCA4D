import {json} from 'd3-fetch'

export default function getStudyData(studyId){
    return json(`../data/${studyId}.json`)
}
