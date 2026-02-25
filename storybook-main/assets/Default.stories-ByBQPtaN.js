import{j as r,r as f}from"./iframe-teIxY4wP.js";import{M as o}from"./MarkdownEditor-VStR-eYf.js";import{L as R}from"./Label-CKh72PTo.js";import{F as b}from"./FieldError-4X4kCiGy.js";import{B as z}from"./Button-CCmGuoae.js";import{S as x}from"./Section-CeVx7gOS.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CEsYgYqU.js";import"./CodeBlock-Cv_GHS_2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Vh2RMAr2.js";import"./IconWarning-C8c-iA3p.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./remote-DC3yMzFm.js";import"./Tooltip-mjvYh2yk.js";import"./utils-C8wUhSun.js";import"./OverlayArrow-BnOVUBMe.js";import"./useFocus-Pnl5w-Ue.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./context-Bkxu1haQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DM5Gti31.js";import"./useControlledState-Dnjkc9fO.js";import"./useFocusable-C4kMCM88.js";import"./react-children-utilities-nsxusDmH.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./browser-ClA0f7pc.js";import"./getActionGroupSlot-BwsAD19l.js";import"./dynamic-Bd0vnJCs.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./Heading-BcZ49Txx.js";import"./Heading-CqSJbJuk.js";import"./RSPContexts-DVypfZug.js";import"./InlineCode-B4y8Rlrb.js";import"./Link-BvNtJdb1.js";import"./usePress-Znh85jsw.js";import"./Separator-BI6REujL.js";import"./Separator-BaKjxxxO.js";import"./CollectionBuilder-6gbuY_L9.js";import"./Text-CB74-0Ir.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Text-BEd6-Qqe.js";import"./TextArea-CJOsVj1z.js";import"./useFieldComponent-DaZL5efl.js";import"./useControlledHostValueProps-CZYJDwJ3.js";import"./FieldDescription-wvwmziA3.js";import"./TextField-BQVu9MxT.js";import"./FieldError-HPfFKZ-Z.js";import"./Form-BrsNngNz.js";import"./Group-CXesKRc7.js";import"./Input-D4TpTGNB.js";import"./useTextField-DQ7VZjBn.js";import"./useFormReset-DcLCq2Kv.js";import"./useFormValidation-CRVUVzjp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B6Az6kDS.js";import"./AlertIcon-nbGMee0S.js";import"./LoadingSpinner-CKqfIoaL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DPcEERaP.js";import"./ContextMenuSection-DZpqaSo0.js";import"./Dialog-CPTLkUM-.js";import"./Collection-CPWnsoE7.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
