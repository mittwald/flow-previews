import{j as r,r as f}from"./iframe-B-26223i.js";import{M as o}from"./MarkdownEditor-DSNl-Hck.js";import{L as R}from"./Label-htHf1MZ3.js";import{F as b}from"./FieldError-DKJxt2u7.js";import{B as z}from"./Button-B60fo84_.js";import{S as x}from"./Section-Dq69RUil.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CdaDXZZR.js";import"./CodeBlock-B3fB441L.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BefNHywL.js";import"./IconWarning-CfZm6euj.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./remote-CUr3PG4h.js";import"./Tooltip-Da73itgb.js";import"./utils-CprJ_klo.js";import"./OverlayArrow-Cnkc5XCY.js";import"./useFocus-DYSsUR82.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./context-B9n95xcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DATGHg9y.js";import"./useControlledState-CCY4nzRh.js";import"./useFocusable-CRgLtiVg.js";import"./react-children-utilities-CKCxoaTL.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./browser-DNWQphaZ.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./dynamic-DWm47R25.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./Heading-BATksAHi.js";import"./Heading-BVbzfdRb.js";import"./RSPContexts-Braq8AdO.js";import"./InlineCode-Ce7itm6F.js";import"./Link-BQLubbaG.js";import"./usePress-BlwAXRn7.js";import"./Separator-Kmc0l0PZ.js";import"./Separator-Bc4LdP2j.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./Text-C25EED6m.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./Text-CrdzXlCc.js";import"./TextArea-DCelSzjk.js";import"./TextFieldBase-BRYuhY5e.js";import"./FieldDescription-DQk95Kge.js";import"./useFieldComponent-eul3OsXk.js";import"./TextField-BadStk_u.js";import"./FieldError-B1RwUwkr.js";import"./Form-Vtk-UJSV.js";import"./Group-DQX_CbI0.js";import"./Input-C02u9QAf.js";import"./useTextField-CNHOwRrb.js";import"./useFormReset-BQreYCpE.js";import"./useFormValidation-CodwuA9r.js";import"./useControlledHostValueProps-mi_fea-8.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";import"./LoadingSpinner-CNdw31t2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C9Zg0tM0.js";import"./ContextMenuSection-EzbGflNa.js";import"./Dialog-COoPEj_z.js";import"./Collection-DFxwbH7P.js";import"./SelectionIndicator-DrGDjKtL.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./VisuallyHidden-DpBOnOEH.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
