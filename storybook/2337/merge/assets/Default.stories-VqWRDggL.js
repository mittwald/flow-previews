import{j as r,r as f}from"./iframe-BJFPIndf.js";import{M as o}from"./MarkdownEditor-DxiXzX8f.js";import{L as R}from"./Label-CVJICKuL.js";import{F as b}from"./FieldError-CerVitTZ.js";import{B as z}from"./Button-CMLIz8EV.js";import{S as x}from"./Section-C6f0l2Xs.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CJ6VfCki.js";import"./CodeBlock-D_fuP8eX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DydeSX4U.js";import"./IconWarning-BUqpCqdO.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./remote-BMkebNs4.js";import"./Tooltip-DkJnxsmF.js";import"./utils-WT8FFEB4.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useFocus-DPdw3svt.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./context-Dnh7V-Fy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BgEwvKKQ.js";import"./useControlledState-DywfuSZK.js";import"./useFocusable-DGQMpBVb.js";import"./react-children-utilities-JRqGcIWy.js";import"./ActionBatch-91iU7Ul_.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./browser-DqcTc9Nr.js";import"./getActionGroupSlot-ggari8la.js";import"./dynamic-Ds5yn-UC.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./RSPContexts-BXfCPyGV.js";import"./InlineCode-BhV3meUN.js";import"./Link-BHjJtRuV.js";import"./usePress-BHGoooY9.js";import"./Separator-CTjh1l-y.js";import"./Separator-xreemKox.js";import"./CollectionBuilder-DvmLsXRf.js";import"./Text-CGF68X8s.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./TextArea-D-NMDpKV.js";import"./useFieldComponent-gU-XMME4.js";import"./useControlledHostValueProps-D9H6S5M8.js";import"./FieldDescription-D_PxiSL1.js";import"./TextField-C4VgOiC3.js";import"./FieldError-Coj9-PqS.js";import"./Form-x5xxOUHd.js";import"./Group-Cnjfsww6.js";import"./Input-BWdvoxfF.js";import"./useTextField-D6MsdQlq.js";import"./useFormReset-CwfjSagb.js";import"./useFormValidation-BhmC515N.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";import"./LoadingSpinner-mc2sXUEG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuameHsj.js";import"./ContextMenuSection-BXIYeg2w.js";import"./Dialog-eRNfCnmO.js";import"./Collection-DFCRYzeG.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
