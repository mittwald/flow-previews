import{j as r,r as f}from"./iframe-HxmydubW.js";import{M as o}from"./MarkdownEditor-DfrilQvx.js";import{L as R}from"./Label-Jo5QLCir.js";import{F as b}from"./FieldError-431GXjJZ.js";import{B as z}from"./Button-CfZWs4w7.js";import{S as x}from"./Section-DaADFqCH.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-oXnPGFAR.js";import"./CodeBlock-zTXKdXt4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-TbKo-80q.js";import"./IconWarning-C9xwJqAl.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./index-CEuE-GZL.js";import"./remote-fubbDoJI.js";import"./Tooltip-DSVxnjDe.js";import"./utils-QtLN3P4K.js";import"./OverlayArrow-CRirkybg.js";import"./useFocus-AF-IcVAt.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./context-CAIZZp13.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CAJt6BJw.js";import"./useControlledState-N-j6hnQm.js";import"./useFocusable-H6SSWU_B.js";import"./react-children-utilities-sEVC9Ldj.js";import"./ActionBatch-ChYSHCOJ.js";import"./context-I_ID-Cd_.js";import"./useStatic-ffXkYFOn.js";import"./browser-XpDtWA4a.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./dynamic-D7w-3Mi4.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./Heading-C9JwdE7Y.js";import"./Heading-B7f00fHt.js";import"./RSPContexts-Cjdg_leM.js";import"./InlineCode-CU4gvN_z.js";import"./Link-otQh8KUZ.js";import"./usePress-yluX3X-J.js";import"./Separator-C4E_xlKb.js";import"./Separator-D3qRtCTd.js";import"./CollectionBuilder-DZvSqS6p.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./TextArea-Dh6EQ8O4.js";import"./useFieldComponent-Bahj-THY.js";import"./useControlledHostValueProps-1O-1Ij3-.js";import"./FieldDescription-C-093zKF.js";import"./TextField-1V9RulCp.js";import"./FieldError-BaqMj9An.js";import"./Form-Di40r5ck.js";import"./Group-C6Hde1Sd.js";import"./Input-Bo21dlHq.js";import"./useTextField-Bjw6L3s9.js";import"./useFormReset-C2bi11DR.js";import"./useFormValidation-BHp8DdfT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B_Zn8gpO.js";import"./ContextMenuSection-DBGHgVvh.js";import"./Dialog-BZeO2Xjo.js";import"./Collection-Dh0U_T2u.js";import"./SelectionIndicator-dYnAwztx.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./VisuallyHidden-BPW-z4K2.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
