import GenerateContent from "../GenerateContent/GenerateContent"
import SelectMenu from "../SelectMenu/SelectMenu"

const GenAssessment = () => {
  return (
    <>
    <div className="max-w-lg mx-auto bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <h1 className="text-2xl font-semibold text-center">Generate Assessment</h1>
        <form action="">
            <SelectMenu />
            <div className="mb-4">
            <SelectMenu 
                title = "ระดับชั้น"
            />

            </div>
            <SelectMenu></SelectMenu>
            <SelectMenu></SelectMenu>
            
        </form>
    </div>
    </>
    
  )
}

export default GenAssessment