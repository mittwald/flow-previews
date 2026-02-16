import{j as r,r as f}from"./iframe-C5ZTNo7B.js";import{M as o}from"./MarkdownEditor-HD1iNEU9.js";import{L as R}from"./Label-D_0GeMuu.js";import{F as b}from"./FieldError-BDB9mSsz.js";import{B as z}from"./Button-CTD3uiWd.js";import{S as x}from"./Section-HUKpeM8o.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CFrFt8pP.js";import"./CodeBlock-i2Zzm8ZB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DNy_6vF0.js";import"./IconWarning-Bhk_rtuP.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./remote-DVpXA9eO.js";import"./Tooltip-BlelyQUD.js";import"./utils-BuDA3Ujk.js";import"./OverlayArrow-F8uV4qkU.js";import"./useFocus-wNGus_RY.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./context-Zfd40gqJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-rbh4dKQ_.js";import"./useControlledState-e_mWhKHk.js";import"./useFocusable-DlWx3Zdp.js";import"./react-children-utilities-DbEx9DG7.js";import"./ActionBatch-DQnznSVa.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./browser-CszbwzXz.js";import"./getActionGroupSlot-D914C5WA.js";import"./dynamic-Bw3_nZ9y.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./RSPContexts-BwPNB4Pl.js";import"./InlineCode-CowgdCO_.js";import"./Link-DMEIb5A5.js";import"./usePress-ef-k5VSc.js";import"./Separator-CreR-Ml7.js";import"./Separator-BabRRkw2.js";import"./CollectionBuilder-BNhwwjuE.js";import"./Text-vc01bOb1.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./TextArea-CLP_klkS.js";import"./useFieldComponent-hFC9tXxl.js";import"./useControlledHostValueProps-C7ReQGpt.js";import"./FieldDescription-COkKjWuk.js";import"./TextField-DgUE_Mti.js";import"./FieldError-CU71BOGK.js";import"./Form-CMpIiu9M.js";import"./Group-DGqA1oIQ.js";import"./Input-DU4gQuZk.js";import"./useTextField-BXRdWvZ1.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";import"./LoadingSpinner-DA9Opfj3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6XpNhBF.js";import"./ContextMenuSection-B0O-s6DP.js";import"./Dialog-n3Xabcyo.js";import"./Collection-CZnzaiUv.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
