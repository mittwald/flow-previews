import{j as r,r as f}from"./iframe-DRxscI9O.js";import{M as o}from"./MarkdownEditor-CbpDhwHZ.js";import{L as R}from"./Label-QYcCSLyK.js";import{F as b}from"./FieldError-DD28rleL.js";import{B as z}from"./Button-Cn0kN-cE.js";import{S as x}from"./Section-D_wy0yj2.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BoAd-hnO.js";import"./CodeBlock-CXtk_hdq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-HcuUHXmq.js";import"./IconWarning-B0GCVytt.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./remote-5HtQVd9k.js";import"./Tooltip-DHwwi-Zz.js";import"./utils-CR6NBPUA.js";import"./OverlayArrow-CnZ26m-G.js";import"./useFocus-CSD6pEXF.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./context-B7-PA0L6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CvH2MSRC.js";import"./useFocusable-_DeXT1Pt.js";import"./useFocusRing-Dd30mTT2.js";import"./react-children-utilities-BVkMaYnK.js";import"./Action-BUOqPppc.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./browser-D6b-4R0j.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./dynamic-CC7KPApC.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./Heading-xcTY6oLo.js";import"./Heading-IJ9Uopg1.js";import"./RSPContexts-O0Lvzjxz.js";import"./InlineCode-CAgdU8Uh.js";import"./Link-DY2ykMR-.js";import"./usePress-87CEVAU1.js";import"./Separator-RI6b7A4z.js";import"./Separator-BIe6_98T.js";import"./CollectionBuilder-BZH3zSXW.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./TextArea-87oqRV7c.js";import"./TextFieldBase-CPJjkiE1.js";import"./FieldDescription-WQfxWtB-.js";import"./useFieldComponent-B2FoAAf9.js";import"./TextField-Cf9gVelS.js";import"./FieldError-qzmmAdqz.js";import"./Form-Ct55O5fT.js";import"./Group-CHdsrmB5.js";import"./Input-CIOy3WO5.js";import"./useTextField-B623kUWD.js";import"./useFormReset-Ewuleuhs.js";import"./useFormValidation-BZc6xO6n.js";import"./useControlledHostValueProps-D7RpmGIg.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf4nBLFb.js";import"./ContextMenuSection-4Pmx83k8.js";import"./Dialog-Ds8Y2vRW.js";import"./Collection-Tvviv49U.js";import"./SelectionIndicator-BPr02Xgn.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
