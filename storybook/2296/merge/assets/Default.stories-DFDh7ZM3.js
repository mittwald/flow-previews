import{j as r,r as f}from"./iframe-DdPUg3l1.js";import{M as o}from"./MarkdownEditor-CxK5ryoP.js";import{L as R}from"./Label-CBiKyrhF.js";import{F as b}from"./FieldError-Brd6jVZQ.js";import{B as z}from"./Button-BArDp6jY.js";import{S as x}from"./Section-B-inExSs.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Co8NL1Jw.js";import"./CodeBlock-CYXZ4efp.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CBSdicO-.js";import"./IconWarning-CBjvo3Bl.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./remote-C_Lvi_2k.js";import"./Tooltip-BuJmJGxo.js";import"./utils-CZc2hRnH.js";import"./OverlayArrow-CejAifjZ.js";import"./useFocus-DOBDf5za.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./context-eo9HPzgD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B1QHji0w.js";import"./useControlledState-vD92hbDx.js";import"./useFocusable-Dd42TuHo.js";import"./react-children-utilities-D942aCYp.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./browser-CdIpgqNn.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./dynamic-nfXH0DAB.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./Heading-L1WE8Mc-.js";import"./Heading-Daf4DLe6.js";import"./RSPContexts-DWbGf7NE.js";import"./InlineCode-DQSG972y.js";import"./Link-DPd8jzda.js";import"./usePress-C4aurJT7.js";import"./Separator-CVNw0DuD.js";import"./Separator-DPd0--zN.js";import"./CollectionBuilder-dja0_mRS.js";import"./Text-DjGrgiDc.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./TextArea-HlriTzJf.js";import"./TextFieldBase-yNaSSZnX.js";import"./FieldDescription-DwbcR2ZF.js";import"./useFieldComponent-CO5pYfeq.js";import"./TextField-DOHgtIkq.js";import"./FieldError-DDOFx421.js";import"./Form-0LpxOP9r.js";import"./Group-D63BMUZR.js";import"./Input--TqM61uI.js";import"./useTextField-DjpmRkhm.js";import"./useFormReset-B7Z_bYQn.js";import"./useFormValidation-ChceI0Vn.js";import"./useControlledHostValueProps-CH_JLeXe.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./LoadingSpinner-CrAIHNN2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CezSw_uu.js";import"./ContextMenuSection-CdzHr0DY.js";import"./Dialog-B4itYT93.js";import"./Collection-C0yC48YX.js";import"./SelectionIndicator-DB3-93Os.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
