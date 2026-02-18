import{j as r,r as f}from"./iframe-BDFzVZbC.js";import{M as o}from"./MarkdownEditor-CcJNIOY4.js";import{L as R}from"./Label-LyL-GXC8.js";import{F as b}from"./FieldError-BgOx5Pdv.js";import{B as z}from"./Button-C7bK1-uf.js";import{S as x}from"./Section-DTE7_1U7.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CZbNuf1z.js";import"./CodeBlock-DqCmBoVs.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BZ4XU0kR.js";import"./IconWarning-aDXn3__r.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./remote-C6miTdu_.js";import"./Tooltip-bUOTRM31.js";import"./utils-DRqoG6OW.js";import"./OverlayArrow-BhJrUQVC.js";import"./useFocus-BE-kuowd.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./context-sVk6h2Ud.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CxM1MJ0B.js";import"./useControlledState-CxpqxoPE.js";import"./useFocusable-nLh15Hem.js";import"./react-children-utilities-Brx0Ao47.js";import"./ActionBatch-dkJpCMmD.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./browser-D6pVd-JB.js";import"./getActionGroupSlot-DJwqOljU.js";import"./dynamic-78IPl_xO.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./RSPContexts-CK_xwACt.js";import"./InlineCode-BIQ1cWDt.js";import"./Link-De5vpNn4.js";import"./usePress-DJEnnjGh.js";import"./Separator-CWklfHEq.js";import"./Separator-DZXWrML2.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./Text-DCO-oE1a.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./TextArea-BWwRzBX9.js";import"./useFieldComponent-DJTCy7fJ.js";import"./useControlledHostValueProps-CEpJHasI.js";import"./FieldDescription-CoqoTaGo.js";import"./TextField-BtoWGrMx.js";import"./FieldError-4UEPVceR.js";import"./Form-MSkU5_70.js";import"./Group-DLMWWecZ.js";import"./Input-CI5lEjHT.js";import"./useTextField-BGQ_V9mX.js";import"./useFormReset-CQpdwD5T.js";import"./useFormValidation-CtBJZQwA.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";import"./LoadingSpinner-CPBqqCdo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-ibrCxHHX.js";import"./ContextMenuSection-rEkP8dNP.js";import"./Dialog-C2-FJ5MR.js";import"./Collection-C1wNqiGx.js";import"./SelectionIndicator-S2R90Jld.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
