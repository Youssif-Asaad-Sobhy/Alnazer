import BootstrapCarousel from "../../BootstrapCarousel";


export default function Banars({data,handleSectionSelect}){
    return (<div className={"container"}>
    <BootstrapCarousel
      data={data}
      sections={data.Sections}
      onSelectSection={handleSectionSelect}
    />
  </div>)
}