export interface TextInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}