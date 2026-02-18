import{j as r,r as f}from"./iframe-tDsAeGKm.js";import{M as o}from"./MarkdownEditor-BUeRfBgd.js";import{L as R}from"./Label-B4YMFJ8a.js";import{F as b}from"./FieldError-CA1wZrT9.js";import{B as z}from"./Button-jRtlVENb.js";import{S as x}from"./Section-CKCf0K1W.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-clkFdstv.js";import"./CodeBlock-Pl2u79I3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cwx46khi.js";import"./IconWarning-DKvGabEh.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./remote-Dyxf39S8.js";import"./Tooltip-DuE3VSgT.js";import"./utils-DhX5ITDy.js";import"./OverlayArrow-dAx307tU.js";import"./useFocus-BJatrcMj.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./context-B8HhXai5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-O-BrOcuV.js";import"./useControlledState-DJUoNOP3.js";import"./useFocusable-Dhs_EAwV.js";import"./react-children-utilities-zZY3JsK_.js";import"./ActionBatch-Dcv9mfk6.js";import"./useOverlayController-B76T1UqF.js";import"./useStatic-BTV6Su7X.js";import"./browser-CATpO6nC.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./dynamic-CfRao1zO.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./Heading-B57Tu_dh.js";import"./Heading-DyHmtFkg.js";import"./RSPContexts-1mHRta2c.js";import"./InlineCode-B8qvoOk1.js";import"./Link-D7bQunCc.js";import"./usePress-DsHBwD0o.js";import"./Separator-Dtss0mta.js";import"./Separator-C9Rj8Lhn.js";import"./CollectionBuilder-DauPrh3N.js";import"./Text-D5NMs6cZ.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Text-B29urVwj.js";import"./TextArea-DGvNwkk9.js";import"./useFieldComponent-CEijF59K.js";import"./useControlledHostValueProps-CillDfRs.js";import"./FieldDescription-DWZekG1M.js";import"./TextField-BokHL5kS.js";import"./FieldError-Duxf8Exl.js";import"./Form-DBzv0iBU.js";import"./Group-CGfCWG6F.js";import"./Input-BzgBakC2.js";import"./useTextField-BH11bfwQ.js";import"./useFormReset-Bh0h9BrG.js";import"./useFormValidation-CHyrMCXS.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CRAaEbc-.js";import"./AlertIcon-BN6nSUvJ.js";import"./LoadingSpinner-cVZxppZv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSgsBLqC.js";import"./ContextMenuSection-CLgK4tmh.js";import"./Dialog-BchFx3yj.js";import"./Collection-DX3v8hJf.js";import"./SelectionIndicator-DonQVrOH.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./VisuallyHidden-BeYtKSfy.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
