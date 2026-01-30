import{j as r,r as f}from"./iframe-BipmDVic.js";import{M as o}from"./MarkdownEditor-BUvovLiv.js";import{L as R}from"./Label-D7pFsU69.js";import{F as b}from"./FieldError-CHo9rwLP.js";import{B as z}from"./Button-BuQAY4x2.js";import{S as x}from"./Section-BSyGStrt.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CTcsLEay.js";import"./CodeBlock-Cg_2nBxL.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CLbhqaLJ.js";import"./IconWarning-CGnZi41_.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./remote-Bx5-otuG.js";import"./Tooltip-D_Iulqg7.js";import"./utils-BmvAbY6y.js";import"./OverlayArrow-Crdn15eZ.js";import"./useFocus-1VXHi-Mn.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./context-Br1o_Gsv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B8DUU0zm.js";import"./useControlledState-CTBxctZq.js";import"./useFocusable-CoJ_GBdx.js";import"./react-children-utilities-B8QTrmWQ.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./browser-CR-oUB3P.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./dynamic-5Me7t2_P.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./Heading-BRGw-waJ.js";import"./Heading-uHa7bb0l.js";import"./RSPContexts-EgPs8m3a.js";import"./InlineCode-DBXTveHa.js";import"./Link-DJr8Hvm4.js";import"./usePress-BGUPUAq5.js";import"./Separator-BmoTQTtj.js";import"./Separator-DJ26kkKw.js";import"./CollectionBuilder-BRXbMuqB.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./TextArea-Ck4MELtI.js";import"./TextFieldBase-hQSdVVcl.js";import"./FieldDescription-BEUHW4qH.js";import"./useFieldComponent-VycST_vs.js";import"./TextField-f4qsvs-p.js";import"./FieldError-BYM5jSaa.js";import"./Form-BQ1NzRsL.js";import"./Group-C_4RVHie.js";import"./Input-CWeCnXba.js";import"./useTextField-D6dFMuMP.js";import"./useFormReset-Bn-cpXjq.js";import"./useFormValidation-DUx2L2VN.js";import"./useControlledHostValueProps-CGQBpUAS.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Dialog-BXIha8hU.js";import"./Collection-DZXXzgBW.js";import"./SelectionIndicator-DQakRxMT.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
