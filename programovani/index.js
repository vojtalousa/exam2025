const uchazeci = [
    {jmeno: "Jan Novák", matematika: 85, cestina: 78, anglictina: 90},
    {jmeno: "Petra Svobodová", matematika: 80, cestina: 88, anglictina: 85},
    {jmeno: "Karel Dvořák", matematika: 50, cestina: 95, anglictina: 80},
]

const classes = ['matematika', 'cestina', 'anglictina']

const above60 = uchazeci.filter(uchazec => {
    return classes.every(className => {
        return uchazec[className] >= 60
    })
})

const withSums = above60.map(uchazec => {
    return {
        ...uchazec,
        sum: classes.reduce((sum, className) => {
            return sum + uchazec[className]
        }, 0)
    }
})

const sorted = withSums.toSorted((a, b) => {
    const difference = b.sum - a.sum
    if (difference !== 0) return difference

    if (a.matematika > b.matematika) return -1
    else if (a.matematika < b.matematika) return 1

    return 0
})

const chosen = sorted.slice(0, 15)

chosen.forEach((uchazec, index) => {
    console.log(`${index + 1}. ${uchazec.jmeno} – ${uchazec.matematika} (M), ${uchazec.cestina} (ČJ), ${uchazec.anglictina} (AJ) – Celkem: ${uchazec.sum}`)
})