import{j as r,r as f}from"./iframe-CYPvHnuu.js";import{M as o}from"./MarkdownEditor-Bur8H7EI.js";import{L as R}from"./Label-BTRY4Fha.js";import{F as b}from"./FieldError-BvWeuB1p.js";import{B as z}from"./Button-DytH811E.js";import{S as x}from"./Section-CHd7gCnn.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BtQwALIX.js";import"./CodeBlock-CzLKAyY6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DEj0t3lF.js";import"./IconWarning-CxTd4Ejc.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./index-CuYxJU0p.js";import"./remote-jfB-IGaC.js";import"./Tooltip-B8RjySuy.js";import"./utils---ZBHqUT.js";import"./OverlayArrow-c0UAwNBy.js";import"./useFocus-Besr2u9O.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./context-Dv0AyQUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CzL0wnxp.js";import"./useFocusable-DNqkvuS2.js";import"./useFocusRing-CwF8Yxqy.js";import"./react-children-utilities-B44bb4Mz.js";import"./Action-Db_hw0Ue.js";import"./context-BIqaEuJx.js";import"./useStatic-Clnm1k9a.js";import"./browser-DHkGBw9W.js";import"./getActionGroupSlot-D8XZvD04.js";import"./dynamic-CLG3Xjqu.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./Heading-CueoHU19.js";import"./Heading-CWDYWjnj.js";import"./RSPContexts-B-l9PBN7.js";import"./InlineCode-CgozyGFE.js";import"./Link-1QrbY5CW.js";import"./usePress-BAll9lzw.js";import"./Separator-BLHmKNoZ.js";import"./Separator-B0yS3gpc.js";import"./CollectionBuilder-CcAo9kg0.js";import"./Text-B7HPZf5X.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./TextArea-ConfJnG8.js";import"./TextFieldBase-cOqhPmho.js";import"./FieldDescription-RtGqf3oZ.js";import"./useFieldComponent-K4osF3of.js";import"./TextField-Bmcb-2F7.js";import"./FieldError-DKbYNsKn.js";import"./Form-Bjo4WKP7.js";import"./Group-B-UmyINm.js";import"./Input-C71-o0Ak.js";import"./useTextField-310WTtjr.js";import"./useFormReset-DMfMEm_f.js";import"./useFormValidation-BOj1NNIZ.js";import"./useControlledHostValueProps-Di6e6qke.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-If-eK7wE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BM3lF2Ud.js";import"./ContextMenuSection-Cvtue2Xc.js";import"./Dialog-DVySTr_M.js";import"./Collection-CC7kOuB5.js";import"./SelectionIndicator-CQjOYyqW.js";import"./SelectionManager-D6v8Hpa5.js";import"./useEvent-ZUbDwjtd.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
