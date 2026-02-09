import{j as r,r as f}from"./iframe-BzN-GDSV.js";import{M as o}from"./MarkdownEditor-DBHDcqm7.js";import{L as R}from"./Label-aAQCtXm8.js";import{F as b}from"./FieldError-C55-OsIs.js";import{B as z}from"./Button-CqLQCx50.js";import{S as x}from"./Section-DEFyhRPR.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-yqAr5T0A.js";import"./CodeBlock-DraB6OuT.js";import"./clsx-B-dksMZM.js";import"./CopyButton-uybmFWt2.js";import"./IconWarning-Dq5gBH8b.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./index-jqMu6fsr.js";import"./remote-DmyBa_Y3.js";import"./Tooltip-jHHI1xlH.js";import"./utils-DZiSZNRH.js";import"./OverlayArrow-45O3XaxD.js";import"./useFocus-CD9nXzJ_.js";import"./ProgressBar-BhNLuOhb.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./context-CV01TaOS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeK7XLS9.js";import"./useControlledState-VicJRSad.js";import"./useFocusable-CZxxukff.js";import"./react-children-utilities-D7lqcx1n.js";import"./Action-DMSKmOJg.js";import"./context-CO_pcEBI.js";import"./useStatic-BCK3u9CD.js";import"./browser-BZan5p2Q.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./dynamic-CBHHoCBf.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./Heading-_0-NRbck.js";import"./Heading-Cy7B52s5.js";import"./RSPContexts-836Xa0kI.js";import"./InlineCode-HNW7d-wb.js";import"./Link-sh3DNgUl.js";import"./usePress-CKBw2syN.js";import"./Separator--RufK56Z.js";import"./Separator-grnmoeTC.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./Text-w8Xk5tzh.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Text-9Slz249r.js";import"./TextArea-B2lAcwJT.js";import"./useFieldComponent-DWIvkE7m.js";import"./useControlledHostValueProps-SG0om-EY.js";import"./FieldDescription-CPA3vpEK.js";import"./TextField-CEYcqWGv.js";import"./FieldError-DErqUxVb.js";import"./Form-BzSZff5w.js";import"./Group-C5-ujBH7.js";import"./Input-C4dwqHoB.js";import"./useTextField-Czkfh9lB.js";import"./useFormReset-C_nKv_ku.js";import"./useFormValidation-Bm80HquG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ContextMenuSection-Fnzuskm8.js";import"./Dialog-D-_l-Dz2.js";import"./Collection-Ckv3RK5p.js";import"./SelectionIndicator-Clnr_8iz.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
