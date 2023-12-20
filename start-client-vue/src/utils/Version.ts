const strictRange = /\[(.*),(.*)\]/
const halfopenRightRange = /\[(.*),(.*)\)/
const halfopenLeftRange = /\((.*),(.*)\]/
const qualifiers = ['M', 'RC', 'BUILD-SNAPSHOT', 'RELEASE']

export const parseQualifier = (version:any) => {
    const qual = (version || '')
        .replace(/\d+/g, '')
        .replace(/\./g, ' ')
        .replace(/\s/g, '')
    return qualifiers.indexOf(qual) > -1 ? qual : 'RELEASE'
}

export const parseVersion = (version:any) => {
    const r = version.toString().split('.')
    if (r.length < 2) {
        return {
            version,
        }
    }
    return {
        version,
        short: `${r[0]}.${r[1]}.${r[2]}`,
        major: `${r[0]}.${r[1]}.x`,
        qualify: qualifiers.indexOf(parseQualifier(version)),
        minor: +r[2],
    }
}

export const compare = (a:string, b:string) => {
    let result
    const versionA = a.split('.')
    const versionB = b.split('.')
    if (versionA.length === 3) {
        versionA[3] = ''
    }
    if (versionB.length === 3) {
        versionB[3] = ''
    }
    for (let i = 0; i < 3; i += 1) {
        result = parseInt(versionA[i], 10) - parseInt(versionB[i], 10)
        if (result !== 0) {
            return result
        }
    }
    const qualify = (version:any) => qualifiers.indexOf(parseQualifier(version))
    result = qualify(a) - qualify(b)
    if (result !== 0) {
        return result
    }
    return versionA[3].localeCompare(versionB[3])
}

export const parseReleases = (releases:any) => {
    return releases.map((release:any) => {
        const version = parseVersion(release.key)
        return version
    })
}

export const isInRange = (version:any, range:any) => {
    if (!range) {
        return true
    }
    const strickMatch = range.match(strictRange)
    if (strickMatch) {
        return (
            compare(strickMatch[1], version) <= 0 &&
            compare(strickMatch[2], version) >= 0
        )
    }
    const horMatch = range.match(halfopenRightRange)
    if (horMatch) {
        return (
            compare(horMatch[1], version) <= 0 && compare(horMatch[2], version) > 0
        )
    }
    const holMatch = range.match(halfopenLeftRange)
    if (holMatch) {
        return (
            compare(holMatch[1], version) < 0 && compare(holMatch[2], version) >= 0
        )
    }
    return compare(range, version) <= 0
}

export const rangeToText = (range:any) => {
    const strictMatch = range.match(strictRange)
    if (strictMatch) {
        return `>= ${strictMatch[1]} and <= ${strictMatch[2]}`
    }
    const horMatch = range.match(halfopenRightRange)
    if (horMatch) {
        return `>= ${horMatch[1]} and < ${horMatch[2]}`
    }
    const holMatch = range.match(halfopenLeftRange)
    if (holMatch) {
        return `> ${holMatch[1]} and <= ${holMatch[2]}`
    }
    return `>= ${range}`
}

export const getValidDependencies = (boot:any, dependencies:any) => {
    return dependencies
        .map((dep:any) => {
            const compatibility = dep.versionRange
                ? isInRange(boot, dep.versionRange)
                : true
            if (!compatibility) {
                return null
            }
            return dep
        })
        .filter((d:any) => !!d)
}
