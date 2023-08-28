import { FlatList } from "react-native"
import { KidsProfileCard, SelectionComponent, SelectionSubject, SelectionYear } from "../commonComponent"
import { ComponentWrapper, RowWrapper } from "../wrappers"
import { height } from "react-native-dimension"

export const SchoolSelection=({data})=>{
    return(
        <FlatList
        data={data}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
        <SelectionComponent title={item?.title} image={item.image} style={{ borderBottomWidth: index == 0 ? .3 : .3 }}/>
        )}
      />
    )
}
export const EducationYear=({data})=>{
  return(
      <FlatList
      data={data}
      horizontal={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
      <SelectionYear title={item?.title}  style={{ borderBottomWidth: index == 0 ? .3 : .3 }}/>
      )}
    />
  )
}

export const SubjectComponent=({data})=>{
  return(
      <FlatList
      data={data}
      horizontal={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
      <SelectionSubject title={item?.title} style={{ borderTopWidth: index == 0 ? .3 : 0 }}/>
      )}
    />
  )
}

export const Card= ({data,onPressDelete,onPressEdit})=>{
  return(
    <FlatList
    data={data}
    horizontal={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item, index }) => (
    <KidsProfileCard onPressDelete={onPressDelete} onPressEdit={onPressEdit} image={item?.image} name={item?.name} year={item?.year} subj={item?.subject} />
    )}
  />
  )
}