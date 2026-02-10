import{j as r,r as f}from"./iframe-1XlmVqd5.js";import{M as o}from"./MarkdownEditor-DE7bWMkd.js";import{L as R}from"./Label-DewN6HGl.js";import{F as b}from"./FieldError-D3E1IfUM.js";import{B as z}from"./Button-QkNnHSXc.js";import{S as x}from"./Section-D0cW5Q8y.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BPL6C2eG.js";import"./CodeBlock-QwaTaftm.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C3ri-I54.js";import"./IconWarning-B1VVAKEh.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./remote-BMRYc7VB.js";import"./Tooltip-DGtPXeP5.js";import"./utils-DcI_f0WL.js";import"./OverlayArrow-DrpYygg_.js";import"./useFocus-B3hq9TNr.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./context-cVtndIAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-nXz5Fj6s.js";import"./useControlledState-DjEU-0mZ.js";import"./useFocusable-BsD1LxMy.js";import"./react-children-utilities-DoT8SEzZ.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./browser-BzXr98QP.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./dynamic-pa5Mho8z.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./Heading-BHa3WEIV.js";import"./Heading-CLPLrGSK.js";import"./RSPContexts-Dq529x8m.js";import"./InlineCode-BMYl3-mP.js";import"./Link-BSlR1LLq.js";import"./usePress-CBxBnL8r.js";import"./Separator-CUy_0zy2.js";import"./Separator-CgzWDgSR.js";import"./CollectionBuilder-D7UVwhHW.js";import"./Text-DoMRIGKc.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./TextArea-CvyVbtYD.js";import"./useFieldComponent--2vv_KDv.js";import"./useControlledHostValueProps-B5zGe4HV.js";import"./FieldDescription-DjwLwJSM.js";import"./TextField-B-to4Icx.js";import"./FieldError-gWTdIqt3.js";import"./Form-XQS-LbjO.js";import"./Group-B8VxNK8d.js";import"./Input-DiBS55Zj.js";import"./useTextField-BfHwKAxn.js";import"./useFormReset-DNo3mt-e.js";import"./useFormValidation-BKr0RaqD.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ContextMenuSection-5WkAJf8V.js";import"./Dialog-RsR3YLab.js";import"./Collection-BIbHEmyb.js";import"./SelectionIndicator-qE_U9bCq.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./VisuallyHidden-Dm6nphJv.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
