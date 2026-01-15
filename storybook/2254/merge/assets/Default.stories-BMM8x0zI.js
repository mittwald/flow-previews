import{j as r,r as f}from"./iframe-pcvtdEGM.js";import{M as o}from"./MarkdownEditor-CD61Cufm.js";import{L as R}from"./Label-CRIab_7x.js";import{F as b}from"./FieldError-Brj1PtAW.js";import{B as z}from"./Button-uyxj5lKX.js";import{S as x}from"./Section-D2AtZg_F.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CQ2Erd0A.js";import"./CodeBlock-mg98559T.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CMbAJlH4.js";import"./IconWarning-BUxMadyi.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./index-YznY-g7A.js";import"./remote-O2EONUZN.js";import"./Tooltip-By81RDgR.js";import"./utils-fsWZtkeO.js";import"./OverlayArrow-KSA73Rxs.js";import"./useFocus-B8eWYfgC.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./context-We2COa_S.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CJg030Qn.js";import"./useFocusable-3pO1u96t.js";import"./useFocusRing-Zb0us3UP.js";import"./react-children-utilities-CJQgD6VA.js";import"./Action-DJjvSFsd.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./browser-DdUrC3oM.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./dynamic-CjFFErYF.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./Heading-BaRKstVM.js";import"./Heading-BBMu1zEG.js";import"./RSPContexts-DZfuqB-R.js";import"./InlineCode-uLzMuQFD.js";import"./Link-F1t-GURJ.js";import"./usePress-Dv_EQiAe.js";import"./Separator-DP-MjS7Z.js";import"./Separator-CvwRIy8P.js";import"./CollectionBuilder-Bto5ITGH.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./TextArea-CxGN-m3t.js";import"./TextFieldBase-DyEmPogL.js";import"./FieldDescription-Q7UMdTIm.js";import"./useFieldComponent-DX_YsVYS.js";import"./TextField-DqPYw359.js";import"./FieldError-DSNAXrm1.js";import"./Form-e5z3-mU_.js";import"./Group-DcVE6dEM.js";import"./Input-OfkHEYOp.js";import"./useTextField-Cc5HjTsD.js";import"./useFormReset-D7xZNI6Q.js";import"./useFormValidation-6fXj-s64.js";import"./useControlledHostValueProps-DDcvOf9E.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7g9LfsB.js";import"./ContextMenuSection-CnsRFJEn.js";import"./Dialog-DwYtEz4y.js";import"./Collection-CigrVSlS.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
