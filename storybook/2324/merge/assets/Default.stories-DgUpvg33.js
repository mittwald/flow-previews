import{j as r,r as f}from"./iframe-CdHyQgwh.js";import{M as o}from"./MarkdownEditor-C-T1Jeug.js";import{L as R}from"./Label-C70YwB90.js";import{F as b}from"./FieldError-BmlEdUcT.js";import{B as z}from"./Button-B83uT_W5.js";import{S as x}from"./Section-ZayZowyU.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DC4iKYaH.js";import"./CodeBlock-Dk6R5y4w.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B-68JWXZ.js";import"./IconWarning-DGc3SgEa.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./remote-BRyh19SP.js";import"./Tooltip-BEzYuSq0.js";import"./utils-B0AChKxF.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useFocus-D4xdQDkq.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./context--lHaHpmz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Ba3uGuMn.js";import"./useControlledState-D2jLiTCX.js";import"./useFocusable-CIZyv2_u.js";import"./react-children-utilities-DGneWI-I.js";import"./ActionBatch-DZLzYfk2.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./browser-CBJMDWdB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./dynamic-CJo41kua.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./RSPContexts-DthjkPm0.js";import"./InlineCode-BnXQSDQO.js";import"./Link-BTrSypjZ.js";import"./usePress-DIa0iaS-.js";import"./Separator-Bpi6JuzI.js";import"./Separator-DJ7zA3-I.js";import"./CollectionBuilder-7T-5iTGH.js";import"./Text-CG9Jqgcw.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./TextArea-CnIiRX0M.js";import"./useFieldComponent-t62DY9AA.js";import"./useControlledHostValueProps-CK9PLT7P.js";import"./FieldDescription-BPEDfYs_.js";import"./TextField-C7oeVSLc.js";import"./FieldError-BTLVyZmC.js";import"./Form-BHZ6w-7V.js";import"./Group-B7D8BaP2.js";import"./Input-DK8ERkio.js";import"./useTextField-BoVwwEYl.js";import"./useFormReset-D88R_CF2.js";import"./useFormValidation-8M-A-L7s.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";import"./LoadingSpinner-DJPu7RL-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C8XSc9bU.js";import"./ContextMenuSection-1USXN4JB.js";import"./Dialog-DGMm3KA5.js";import"./Collection-kJPXxCPQ.js";import"./SelectionIndicator-DV4fwApE.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./VisuallyHidden-U7btBlyO.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
