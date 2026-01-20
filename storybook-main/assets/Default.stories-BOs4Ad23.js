import{j as r,r as f}from"./iframe-C5hcdLE6.js";import{M as o}from"./MarkdownEditor-DsABXLEK.js";import{L as R}from"./Label-KhBIX57N.js";import{F as b}from"./FieldError-CRlQMLVN.js";import{B as z}from"./Button-CzDqHNvA.js";import{S as x}from"./Section-Zn6loSDR.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BuwWnimR.js";import"./CodeBlock-Bo9swz9G.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CtGxOXfc.js";import"./IconWarning-BGpxRwU-.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./remote-DfH19er1.js";import"./Tooltip-DRG-qmXR.js";import"./utils-B3GIFt3C.js";import"./OverlayArrow-DN70rght.js";import"./useFocus-Fr_BfSOs.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./context-E1uxYtQv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C9jQ4AxE.js";import"./useFocusable-xzWj-wm9.js";import"./useFocusRing-B86g4qKF.js";import"./react-children-utilities-8X3bcm-z.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./useStatic-CWBOctoH.js";import"./browser-BJ6k16eC.js";import"./getActionGroupSlot-CVriiRzc.js";import"./dynamic-DE5jfE1R.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./Heading-DWTXooi-.js";import"./Heading-Y84dBjpP.js";import"./RSPContexts-BMj0h4_3.js";import"./InlineCode-BQeI5uEP.js";import"./Link-RRZAz5HG.js";import"./usePress-CyQlFp9g.js";import"./Separator-nyeZf8D0.js";import"./Separator-DaQ1DUjO.js";import"./CollectionBuilder-CZUA7JnX.js";import"./Text-D8uazRXK.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./TextArea-BuKtL3QA.js";import"./TextFieldBase-BTr5cI6-.js";import"./FieldDescription-C0cABHms.js";import"./useFieldComponent-t_EOnv-a.js";import"./TextField-Bek_G-5m.js";import"./FieldError-CqTmSUdd.js";import"./Form-Dgtv3yvc.js";import"./Group-aRvuTcjD.js";import"./Input-0x1obYXp.js";import"./useTextField-CufDKcCg.js";import"./useFormReset-BnJ7w8Tn.js";import"./useFormValidation-BJOScXHE.js";import"./useControlledHostValueProps-BEHg_3O_.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";import"./LoadingSpinner-hJnys7-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX4O7Muw.js";import"./ContextMenuSection-Bm4KM0hd.js";import"./Dialog-D66iw0U8.js";import"./Collection-DXvYJhLm.js";import"./SelectionIndicator-B5s74P3-.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./VisuallyHidden-n5FPXG3E.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
