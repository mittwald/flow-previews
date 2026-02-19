import{j as r,r as f}from"./iframe-DQkRMfo_.js";import{M as o}from"./MarkdownEditor-EChl4JNI.js";import{L as R}from"./Label-CITwA187.js";import{F as b}from"./FieldError-Bk57uQQs.js";import{B as z}from"./Button-CTuc7Sb1.js";import{S as x}from"./Section-L3monAfc.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CSai7T0A.js";import"./CodeBlock-DDaaVQYW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bfv6Fhhc.js";import"./IconWarning-D2qqMRrO.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./remote-CkmXCgJk.js";import"./Tooltip-BgfDz5r2.js";import"./utils-Bfb5K-41.js";import"./OverlayArrow-CqKSMCIB.js";import"./useFocus-BSyQYzHK.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./context-XfcuIoVT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CrR0o1Yj.js";import"./useControlledState-CA4wGiI1.js";import"./useFocusable-BWtjl4YZ.js";import"./react-children-utilities-N2YjBirW.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./browser-BnHwZVCd.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./dynamic-Bf6rAVHb.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./RSPContexts-Bk8qKDL5.js";import"./InlineCode-Dc6I-jrC.js";import"./Link-OZkk74Cu.js";import"./usePress-D8-KGEPi.js";import"./Separator-BJ07qKiN.js";import"./Separator-6qwbqbNk.js";import"./CollectionBuilder-DaRvbySL.js";import"./Text-DZXogYJp.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Text-BXxFgtol.js";import"./TextArea-C8pbRX-X.js";import"./useFieldComponent-DKGKIVkH.js";import"./useControlledHostValueProps-2C9MclVl.js";import"./FieldDescription-BmqjHv9O.js";import"./TextField-CntM8-Yw.js";import"./FieldError-BDV0g7vQ.js";import"./Form-DMHoM5vs.js";import"./Group-Dmhi8ayL.js";import"./Input-DgbrTWmb.js";import"./useTextField-CluWqEKL.js";import"./useFormReset-CbTvEeV3.js";import"./useFormValidation-Baae3HaH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";import"./LoadingSpinner-BfuFQdyU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqHvWFWe.js";import"./ContextMenuSection-CK2JeTTJ.js";import"./Dialog-cFet4L4X.js";import"./Collection-D_m0oZ4K.js";import"./SelectionIndicator-D4WNQsp1.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
