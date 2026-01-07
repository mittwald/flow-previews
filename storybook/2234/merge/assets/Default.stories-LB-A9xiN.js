import{j as r,r as f}from"./iframe-Cz8_C8zY.js";import{M as o}from"./MarkdownEditor-C0TvEhor.js";import{L as R}from"./Label-gR0Y05hv.js";import{F as b}from"./FieldError-CEw8HJGt.js";import{B as z}from"./Button-D15OVnQK.js";import{S as x}from"./Section-SSHhfNn0.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C_Kjg5Ez.js";import"./CodeBlock-DBQCyGH1.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BoHYxnaD.js";import"./IconWarning-DLbRRuK1.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./remote-D3nX27fk.js";import"./Tooltip-DAZCrBh9.js";import"./utils-BAKlH2Lm.js";import"./OverlayArrow-CwaEkqIl.js";import"./useFocus-DFbFm1Xx.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./context-VkDhZA-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C0o23ioH.js";import"./useFocusable-CJ-4fYj7.js";import"./useFocusRing-BDmU1dd9.js";import"./react-children-utilities-B_1L6MyS.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./useStatic-DFVrJYQp.js";import"./browser-B6rfwAqc.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./dynamic-CeA3emBk.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./Heading-4iah9onY.js";import"./Heading-DjrC0KPL.js";import"./RSPContexts-CQQaQyDU.js";import"./InlineCode-Bzhsb5H4.js";import"./Link-eNCbHXBt.js";import"./usePress-DcZz-lB5.js";import"./Separator-CevQWh0Q.js";import"./Separator-2dOH-BB_.js";import"./CollectionBuilder-CWbLFvvU.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./TextArea-CR3BUWAU.js";import"./TextFieldBase-B5nJt9Vp.js";import"./FieldDescription-D3ZeP19z.js";import"./useFieldComponent--MNREdev.js";import"./TextField-DW-FA0T0.js";import"./FieldError-B254xHCi.js";import"./Form-Bv3CSU0e.js";import"./Group-CFuZraH7.js";import"./Input-MUdQf2Tz.js";import"./useTextField-B_xw08pL.js";import"./useFormReset-CSPeTQLr.js";import"./useFormValidation-DBiWbYgf.js";import"./useControlledHostValueProps-D5L-E0rU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7cKgwoPB.js";import"./ContextMenuSection-DUguC81d.js";import"./Dialog-DK4i5yRx.js";import"./Collection-2S6_FH7n.js";import"./SelectionIndicator-DD4cK7So.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
