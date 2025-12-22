import{j as r,r as f}from"./iframe-DALg75d7.js";import{M as o}from"./MarkdownEditor-BCfOrvcH.js";import{L as R}from"./Label-CllN_pGF.js";import{F as b}from"./FieldError-JMY6vjHT.js";import{B as z}from"./Button-CxCFU3Sm.js";import{S as x}from"./Section--EZ_JCJz.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DLVe6ZiI.js";import"./CodeBlock-C3MqsvLq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-icwE7zvY.js";import"./IconWarning-CIuZ66pt.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./index-BOS789La.js";import"./remote-Bn6u74KD.js";import"./Tooltip-fK_VMBXs.js";import"./utils-CCMGMBS3.js";import"./OverlayArrow-DlELcq_K.js";import"./useFocus-uyJaeSg2.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./context-D-SwIuvT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-10c65vgi.js";import"./useFocusable-KXnvIYuK.js";import"./useFocusRing-DgbRXdyO.js";import"./react-children-utilities-Cil9A_jw.js";import"./Action-B-LX0Gdh.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./browser-BOjJAEEq.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./dynamic-DnyVnPzZ.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./Heading-CnbEZOuS.js";import"./Heading-D55KeDUv.js";import"./RSPContexts-Bv06n-kH.js";import"./InlineCode-C3NFba_o.js";import"./Link-DF9dIRnM.js";import"./usePress-BlF5TfdE.js";import"./Separator-C-7jkgIU.js";import"./Separator-5S_7F0Gu.js";import"./CollectionBuilder-CWHk20os.js";import"./Text-BfSm9wB3.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./TextArea-DannyTVh.js";import"./TextFieldBase-DgSROcfW.js";import"./FieldDescription-CPnssZ8z.js";import"./useFieldComponent-BaBZIB3g.js";import"./TextField-aWZOiaVk.js";import"./FieldError-B5AAUQ1i.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useTextField-B5pPfAtE.js";import"./useFormReset-D3blZuYj.js";import"./useFormValidation-jiwCVXG0.js";import"./useControlledHostValueProps-Ce6KWhnZ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DKmXkdSk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAn5W5h2.js";import"./ContextMenuSection-nagFkt4I.js";import"./Dialog-BcVnlKtW.js";import"./Collection-BVQ9TfqB.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
