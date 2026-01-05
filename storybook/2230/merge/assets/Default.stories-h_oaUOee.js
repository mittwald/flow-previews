import{j as r,r as f}from"./iframe-CnrbHwTe.js";import{M as o}from"./MarkdownEditor-CS6shKxX.js";import{L as R}from"./Label-CIbW0Z8y.js";import{F as b}from"./FieldError-BJU6XwC7.js";import{B as z}from"./Button-DoJYz9nf.js";import{S as x}from"./Section-BExQZgWB.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B4Bt_V8B.js";import"./CodeBlock-Uzlv2B3k.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DeobnBF6.js";import"./IconWarning-DgLNPfaL.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./remote-CmycR9zC.js";import"./Tooltip-BM722GKF.js";import"./utils-r4y_43wh.js";import"./OverlayArrow-CJqqEQZv.js";import"./useFocus-CW3ebFsS.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./context-B7MLny9I.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CcfbhOaY.js";import"./useFocusable-DrwEzR41.js";import"./useFocusRing-CRQTw2D7.js";import"./react-children-utilities-Cnc3tfG3.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./useStatic-D1Vs9fsX.js";import"./browser-TZQakXKU.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./dynamic-D-DaJWqs.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./Heading-4nCu50xU.js";import"./Heading-7TXA4VJI.js";import"./RSPContexts-CU1Sv8RV.js";import"./InlineCode-DRaezd42.js";import"./Link-DNUeLtma.js";import"./usePress-DoQNUybf.js";import"./Separator-BnggOc9S.js";import"./Separator-D2suaWuM.js";import"./CollectionBuilder-BkOVJAZN.js";import"./Text-eTz9hgbN.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./Text-nMrjd92_.js";import"./TextArea-BZzlvxvN.js";import"./TextFieldBase-BQQRpBgX.js";import"./FieldDescription-B5czV7Ha.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./TextField-Cw8BSFYt.js";import"./FieldError-DsDXGDD4.js";import"./Form-CpewxKmk.js";import"./Group-Cm3CM_7W.js";import"./Input-U8_Yl4jm.js";import"./useTextField-oXE-_SAT.js";import"./useFormReset-n7eHOhOu.js";import"./useFormValidation-C9gosTEe.js";import"./useControlledHostValueProps-B_45Kqg7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BfrmZLfO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDvqfYYW.js";import"./ContextMenuSection-JoSq6Aah.js";import"./Dialog-CsKt9ioo.js";import"./Collection-Djv1d9Z_.js";import"./SelectionIndicator-CTBQmwrG.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
