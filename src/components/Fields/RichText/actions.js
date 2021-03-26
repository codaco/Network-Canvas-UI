import {
  Element as SlateElement,
} from 'slate';
import { EditListPlugin } from '@productboard/slate-edit-list';

const [withEditList, onKeyDown, { Editor, Transforms }] = EditListPlugin();

const LIST_TYPES = ['ul_list', 'ol_list'];

const getNewType = ({ isActive, isList, format }) => {
  if (isActive) { return 'paragraph'; }
  if (isList) { return 'list_item'; }
  return format;
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => (
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    ),
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.toggleList(editor);
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export {
  toggleMark,
  toggleBlock,
  isMarkActive,
  isBlockActive,
};
