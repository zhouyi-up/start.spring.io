import {get} from "lodash";
import {isInRange} from "@/utils/Version";
import * as querystring from "querystring";

const API_HOST = import.meta.env.VITE_API_HOST

export const getInfo = function getInfo(url:string) {
    return new Promise((resolve, reject) => {
        fetch(`${API_HOST}/${url}`, {
            method: "GET",
            headers: {
                Accept: "application/vnd.initializr.v2.2+json",
            }
        }).then(response => response.json(), () => {
            reject()
            return null
        }).then(data => {
                if (data){
                    resolve(data)
                }
            })
    })
}

export const getProject = function getProject(url:string, values:any, config:any) {
    return new Promise((resolve, reject) => {
        const params = querystring.stringify({
            type: get(values, 'project'),
            language: get(values, 'language'),
            bootVersion: get(values, 'boot'),
            baseDir: get(values, 'meta.artifact'),
            groupId: get(values, 'meta.group'),
            artifactId: get(values, 'meta.artifact'),
            name: get(values, 'meta.name'),
            description: get(values, 'meta.description'),
            packageName: get(values, 'meta.packageName'),
            packaging: get(values, 'meta.packaging'),
            javaVersion: get(values, 'meta.java'),
        })
        let paramsDependencies = get(values, 'dependencies', [])
            .map((dependency:any) => {
                const dep = config.find((it:any) => it.id === dependency)
                return isValidDependency(get(values, 'boot'), dep) ? dependency : null
            })
            .filter((dep:any) => !!dep)
            .join(',')

        if (paramsDependencies) {
            paramsDependencies = `&dependencies=${paramsDependencies}`
        }
        fetch(`${API_HOST}/${url}?${params}${paramsDependencies}`, {
            method: 'GET',
        }).then(
            response => {
                if (response.status === 200) {
                    resolve(response.blob())
                    return
                }
                reject()
            },
            () => {
                reject()
            }
        )
    })
}

export const isValidDependency = function isValidDependency(boot:any, dependency:any) {
    if (!dependency) {
        return false
    }
    return get(dependency, 'versionRange')
        ? isInRange(boot, get(dependency, 'versionRange'))
        : true
}
