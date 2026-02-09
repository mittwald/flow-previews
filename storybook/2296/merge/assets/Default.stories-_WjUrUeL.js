import{j as r,r as f}from"./iframe-CJJ5mYnn.js";import{M as o}from"./MarkdownEditor-bkthMz7v.js";import{L as R}from"./Label-KzCwLrnq.js";import{F as b}from"./FieldError-DFjBSzci.js";import{B as z}from"./Button-Cm9iNCfL.js";import{S as x}from"./Section-K47s4uAu.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C9kEeKNj.js";import"./CodeBlock-COXep-Wg.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BM-YULSj.js";import"./IconWarning-7VhmiBC1.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./index-BAQeQlIi.js";import"./remote-__48vje9.js";import"./Tooltip-g0wya-FY.js";import"./utils-CzEQVu_B.js";import"./OverlayArrow-B9C6jKaR.js";import"./useFocus-CcXCF9Et.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./context-DMBLfBJz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DJCeTTlI.js";import"./useControlledState-Bk661CCw.js";import"./useFocusable-BrXzadpt.js";import"./react-children-utilities-BkMZZzNT.js";import"./Action-DnpS_czG.js";import"./context-B6BNwR5M.js";import"./useStatic-DKMjC4UR.js";import"./browser-Dno-4bzG.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./dynamic-CBA_L5x6.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./Heading-L7ubE5sI.js";import"./Heading-BM0-1eUi.js";import"./RSPContexts-BTWN0Dkl.js";import"./InlineCode-B_rfNTy8.js";import"./Link-tqtFSZsm.js";import"./usePress-BjSa1aTn.js";import"./Separator-CHiF3D-g.js";import"./Separator-Ba2IdZvX.js";import"./CollectionBuilder-DM6FVurg.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./TextArea-OA9ZptJ4.js";import"./useFieldComponent-DJ8W8blY.js";import"./useControlledHostValueProps-CAr8fGsP.js";import"./FieldDescription-BR9EjEal.js";import"./TextField-chaiVZmp.js";import"./FieldError-C22n8dTl.js";import"./Form-Di0BFhhp.js";import"./Group-Bb48B7zD.js";import"./Input-BDAHDxkc.js";import"./useTextField-RXxXKEvJ.js";import"./useFormReset-Bwb9lNn2.js";import"./useFormValidation-DDUTP5mG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";import"./LoadingSpinner-BkLfehTA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBs8-zE9.js";import"./ContextMenuSection-JlR6lzy2.js";import"./Dialog-BJQKxFLq.js";import"./Collection-B0Oi5e2R.js";import"./SelectionIndicator-t_QTWROb.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
