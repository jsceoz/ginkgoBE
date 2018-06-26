function WHUVerification(sid, spwd) {
    if (!(sid && spwd)) {
        return false
    }
    return {
        result: true,
        data: {
            name: 0,
            sex: 0,
            grade: 0,
            school: 0,
            department: 0,
            dorm: 0,
            room: 0
        }
    }
}

export default WHUVerification;