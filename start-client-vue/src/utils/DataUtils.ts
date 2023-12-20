import {get} from "lodash";
import Extend from "@/Extend.json";

export const getDefaultValues = (json:any): Values => {
    return {
        project: get(json, 'type.default'),
        language: get(json, 'language.default'),
        boot: get(json, 'bootVersion.default'),
        meta: {
            name: get(json, 'name.default'),
            group: get(json, 'groupId.default'),
            artifact: get(json, 'artifactId.default'),
            description: get(json, 'description.default'),
            packaging: get(json, 'packaging.default'),
            packageName: get(json, 'packageName.default'),
            java: get(json, 'javaVersion.default'),
        },
        dependencies: [],
    }
}

export const getLists = (json:any): Metadata => {
    const deps:any[] = []
    get(json, 'dependencies.values', []).forEach((group:any) => {
        group.values.forEach((item:any) => {
            const extend = Extend.find((it:any) => it.id === get(item, 'id', ''))
            const val = {
                id: `${get(item, 'id', '')}`,
                name: `${get(item, 'name', '')}`,
                group: `${group.name}`,
                description: `${get(item, 'description', '')}`,
                versionRange: `${get(item, 'versionRange', '')}`,
                versionRequirement: `${get(item, 'versionRange', '')}`,
                weight: get(extend, 'weight', 50),
            }
            deps.push(val)
        })
    })
    return {
        project: get(json, 'type.values', [])
            .filter((type:any) => type.action === '/starter.zip')
            .map((type:any) => ({
                key: `${type.id}`,
                text: `${type.name}`,
            })),
        language: get(json, 'language.values', []).map((language:any) => ({
            key: `${language.id}`,
            text: `${language.name}`,
        })),
        boot: get(json, 'bootVersion.values', []).map((boot:any) => ({
            key: `${boot.id}`,
            text: `${boot.name}`,
        })),
        meta: {
            java: get(json, 'javaVersion.values', []).map((java:any) => ({
                key: `${java.id}`,
                text: `${java.name}`,
            })),
            packaging: get(json, 'packaging.values', []).map((packaging:any) => ({
                key: `${packaging.id}`,
                text: `${packaging.name}`,
            })),
        },
        dependencies: deps,
    }
}