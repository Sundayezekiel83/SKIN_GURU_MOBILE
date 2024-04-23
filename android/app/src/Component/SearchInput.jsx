import {Text, TextInput, View} from 'react-native';
import {FaMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Search from '../../../../Assest/Image/Searchsearch.svg';

export default function SearchInput({
  classN,
  placeholder,
  onChangeText,
  value,
  label,
}) {
  return (
    <View className="mb-2 flex flex-row space-x-3 items-center bg-white w-full rounded-[5px]">
      <View className="pl-4">
        <Search />
      </View>
      <View className="w-[85%]">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="p-3 text-sm w-full placeholder:text-subText placeholder:text-sm"
        />
      </View>
    </View>
  );
}
