import{j as r,r as f}from"./iframe-RCf6-4YI.js";import{M as o}from"./MarkdownEditor-Bi-bMxVO.js";import{L as R}from"./Label-BRnkJYm7.js";import{F as b}from"./FieldError-KQe80RuS.js";import{B as z}from"./Button-CRZ6FKVD.js";import{S as x}from"./Section-Bw7Tk3Pz.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B73C0ENI.js";import"./CodeBlock-FF4BCpM4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cw2aIIM3.js";import"./IconWarning-B0h7osnB.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./remote-B1M75xiP.js";import"./Tooltip-p3ePAPsX.js";import"./utils-2Kt3K5yX.js";import"./OverlayArrow-CuFac9ex.js";import"./useFocus-BlmWIWuz.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./context-C_2cqKRl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DZgLoJPG.js";import"./useControlledState-BQGvOabU.js";import"./useFocusable-CGRcLUlH.js";import"./react-children-utilities-ChSzWVRl.js";import"./Action-3k_Z5Vty.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./browser-CrfZ_U78.js";import"./getActionGroupSlot-D-mME3-D.js";import"./dynamic-KYjVHqFc.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./Heading-B3B6PIpG.js";import"./Heading-DTpFTjmP.js";import"./RSPContexts-BsLLj1Xv.js";import"./InlineCode-BJC4jrHX.js";import"./Link-Did29DyM.js";import"./usePress--XVd0Ch5.js";import"./Separator-jSPMfvOh.js";import"./Separator-B1Fq1xVo.js";import"./CollectionBuilder-CTQYESGa.js";import"./Text-HaNR6yqL.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./TextArea-DpDAKpdY.js";import"./TextFieldBase-TygCww5R.js";import"./FieldDescription-BvKq_AxB.js";import"./useFieldComponent-C9VOsv8D.js";import"./TextField-hSyP7KVC.js";import"./FieldError-C_jxYX-6.js";import"./Form-DuREI75N.js";import"./Group-CFlsgvT_.js";import"./Input-7NMAjvPw.js";import"./useTextField-BprYoYqM.js";import"./useFormReset-CpZDZfD6.js";import"./useFormValidation-WgNojhOC.js";import"./useControlledHostValueProps-B5mIbE0-.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjppKy1G.js";import"./ContextMenuSection-BKm1CmgZ.js";import"./Dialog-DSQ8RGJ5.js";import"./Collection-DBj67fTj.js";import"./SelectionIndicator-H7CrMh-P.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
