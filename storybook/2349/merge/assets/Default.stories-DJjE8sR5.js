import{j as r,r as f}from"./iframe-gtGtPSGX.js";import{M as o}from"./MarkdownEditor-DyXLnJTA.js";import{L as R}from"./Label-ezDYxAqR.js";import{F as b}from"./FieldError-co03Ctd_.js";import{B as z}from"./Button-CvhKZeTQ.js";import{S as x}from"./Section-BQknUcw4.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-xS40Q3Uy.js";import"./CodeBlock-CoZN-00R.js";import"./clsx-B-dksMZM.js";import"./CopyButton-XOSpz6S6.js";import"./IconWarning-BtUUciVj.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./remote-DGcAtBID.js";import"./Tooltip-_9vCQN7d.js";import"./utils-1b_KoCGs.js";import"./OverlayArrow-D9TvGvP1.js";import"./useFocus-BGYZap87.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./context-B_6Y7rB4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-jJpNIKKF.js";import"./useControlledState-a_M_Sxv2.js";import"./useFocusable-uEYYPBvA.js";import"./react-children-utilities-INriXgfR.js";import"./ActionBatch-C6WY1Daf.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./browser-BLXRbgM1.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./dynamic-CLlIyxqz.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./RSPContexts-L8MWaJ6n.js";import"./InlineCode-CXUQKYdU.js";import"./Link-DAYvgODO.js";import"./usePress-ub7fcIm5.js";import"./Separator-DK63ndAh.js";import"./Separator-WOt-iCvu.js";import"./CollectionBuilder-BwhyDG2L.js";import"./Text-QzTdDFQg.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./TextArea-BoJ2xWOK.js";import"./useFieldComponent-BaX-M8wV.js";import"./useControlledHostValueProps-CP2C8WYU.js";import"./FieldDescription-ClA4Wtvf.js";import"./TextField-BDt0lpmD.js";import"./FieldError-DenhE7nb.js";import"./Form-BRxvySUZ.js";import"./Group-Dg14tYxa.js";import"./Input-1coMMItc.js";import"./useTextField-DQThDcRz.js";import"./useFormReset-TvJ_gIa-.js";import"./useFormValidation-BQy4AKy0.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";import"./LoadingSpinner-DnqSg6_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bw2A7mA1.js";import"./ContextMenuSection-CDCzjc8m.js";import"./Dialog-_BBlF040.js";import"./Collection-B35z872H.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
