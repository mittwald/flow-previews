import{j as r,r as f}from"./iframe-BO07bPAa.js";import{M as o}from"./MarkdownEditor-7ertUzpc.js";import{L as R}from"./Label-D0Lhb5Vq.js";import{F as b}from"./FieldError-DlyPLChi.js";import{B as z}from"./Button-CCtz8EXc.js";import{S as x}from"./Section-DvElnkSb.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DRIH7tIJ.js";import"./CodeBlock-CJH6bTRg.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cu3HmNkM.js";import"./IconWarning-ClLv5I07.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./index-C__iODou.js";import"./remote-C9jEPRv0.js";import"./Tooltip-B3onYfdr.js";import"./utils-DpF9Snp1.js";import"./OverlayArrow-BbflWQr7.js";import"./useFocus-ntzScLPi.js";import"./ProgressBar-BUHmhWxP.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./context-DKHz4OX0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DXebh_G-.js";import"./useControlledState-DyIed2bM.js";import"./useFocusable-C66-pRTt.js";import"./react-children-utilities-CbyS1nuy.js";import"./Action-CP6j8Viu.js";import"./context-D6FqIPNt.js";import"./useStatic-Dc6GYAIK.js";import"./browser-B0pBncgx.js";import"./dynamic-CShChD8Y.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./Heading-DF6E_MT5.js";import"./Heading-Dnio4EBF.js";import"./RSPContexts-BnTR6z_r.js";import"./InlineCode-ClfmBvsX.js";import"./Link-B89XE_Hk.js";import"./usePress-UbwEnmrk.js";import"./Separator-7p3EA2_0.js";import"./Separator-DdhmoA8S.js";import"./CollectionBuilder-CRw4EwC7.js";import"./Text-CwdryKSs.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./TextArea-BSbyoe30.js";import"./useFieldComponent-B5uAaQ_H.js";import"./useControlledHostValueProps-Bu3gS6Hi.js";import"./FieldDescription-DHxK4kFP.js";import"./TextField-1eNjwi_7.js";import"./FieldError-cxGJZPY3.js";import"./Form-BBekzR8e.js";import"./Group-DG91QlCP.js";import"./Input-Drs8jYRG.js";import"./useTextField-eFQNVRem.js";import"./useFormReset-D6_s6z9R.js";import"./useFormValidation-CRjEiOmE.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CPst5v-a.js";import"./ContextMenuSection-CU407IGI.js";import"./Dialog-BBC5U6gG.js";import"./Collection-BC2XOQqq.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./SelectionManager-Chxg5cEr.js";import"./useEvent-D6dqrA9f.js";import"./useCollator-82KNa-4u.js";import"./FocusScope-BA1MxA3e.js";import"./VisuallyHidden-DCYSiy07.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
