import{j as r,r as f}from"./iframe-CdVpWnc8.js";import{M as o}from"./MarkdownEditor-DZ0RFYVt.js";import{L as R}from"./Label-CQQzXuOB.js";import{F as b}from"./FieldError-0fRgmDO9.js";import{B as z}from"./Button-BYd_Eo9F.js";import{S as x}from"./Section-3RcIg-Ej.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DkhJhf50.js";import"./CodeBlock-DgaaKp-p.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0f7upoo.js";import"./IconWarning-Ba9_xFUh.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./remote-BheCwFS8.js";import"./Tooltip-B9z2q0FS.js";import"./utils-ClIic5nH.js";import"./OverlayArrow-CCFRyk0z.js";import"./useFocus-DZX-xW1t.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./context-Bg-StFGN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-dkAGsBkQ.js";import"./useControlledState-B7ztCH5k.js";import"./useFocusable-CzSEJZTE.js";import"./react-children-utilities-DxtCh8zv.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./browser-CWGq_9Zm.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./dynamic-Dpbpwd3I.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./Heading-6HXp4W0i.js";import"./Heading-BFrSNe6W.js";import"./RSPContexts-PfgqXwd-.js";import"./InlineCode-CbsR7OZl.js";import"./Link-I6ryM9ra.js";import"./usePress-CCAUNqmr.js";import"./Separator-O_ejgvHm.js";import"./Separator-BKBkElFN.js";import"./CollectionBuilder-Dpff-p5v.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./TextArea-Bxsdra9v.js";import"./TextFieldBase-D2gwtZ4Z.js";import"./FieldDescription-CO9NCU0r.js";import"./useFieldComponent-pH8UQhzW.js";import"./TextField-BwTHsd-m.js";import"./FieldError-U_T6R5BY.js";import"./Form-BAj6LeSM.js";import"./Group-B1_lIqzJ.js";import"./Input-CCUGOCeS.js";import"./useTextField-c4bMHwAM.js";import"./useFormReset-D5EHipFr.js";import"./useFormValidation-5isdk9bY.js";import"./useControlledHostValueProps-CZNxzonQ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Dialog-oT8hORp9.js";import"./Collection-1Gj7oR7J.js";import"./SelectionIndicator-DTqsITpO.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
