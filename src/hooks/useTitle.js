const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Skill Up Academy`;
    }, [title])
}

export default useTitle;