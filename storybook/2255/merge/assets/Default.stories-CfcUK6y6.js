import{j as r,r as f}from"./iframe-CO_SbVCH.js";import{M as o}from"./MarkdownEditor-DXsIJEBf.js";import{L as R}from"./Label-CYi7f71w.js";import{F as b}from"./FieldError-ApIzqFqI.js";import{B as z}from"./Button-D1ylE5rB.js";import{S as x}from"./Section-DzQL888J.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C_tQKbHK.js";import"./CodeBlock-Kw3bemgu.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWk7-xtJ.js";import"./IconWarning-DnAYmwAM.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./index-CiuYSwxA.js";import"./remote-CpzHRyGl.js";import"./Tooltip-CHjDwHqM.js";import"./utils-D6Fob7yO.js";import"./OverlayArrow-D4OM36Ak.js";import"./useFocus-CPWqIWXE.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./context-CagKbUB8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BplPLiu_.js";import"./useFocusable-CMm0HKMh.js";import"./useFocusRing-BEFuW2jQ.js";import"./react-children-utilities-U9-1g4Mm.js";import"./Action-0SsHJzT_.js";import"./context-BbDJJF8K.js";import"./useStatic-D6cqHfiz.js";import"./browser-DqZUP5aL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./dynamic-7BzGeVfl.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./Heading-CF6gKKdb.js";import"./Heading-Ij8bChZd.js";import"./RSPContexts-BwOC89i_.js";import"./InlineCode-BQE7Szgf.js";import"./Link-Errn0UdC.js";import"./usePress-Dh95oJrl.js";import"./Separator-DPjjTD37.js";import"./Separator-CUNyVGir.js";import"./CollectionBuilder-BVAhjiTU.js";import"./Text-DxwcuI28.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./TextArea-D50Wj4Ji.js";import"./TextFieldBase-BTtTaUzL.js";import"./FieldDescription-C20y_Jsx.js";import"./useFieldComponent-DVhqfPKz.js";import"./TextField-DUEn72X9.js";import"./FieldError-C8I7NIV7.js";import"./Form-BhtxhsPb.js";import"./Group-DHq-dfDY.js";import"./Input-Cf-031DZ.js";import"./useTextField-D7nnFmGf.js";import"./useFormReset-DQMHGRs0.js";import"./useFormValidation-Cv-TUnys.js";import"./useControlledHostValueProps-B4-ZmfcU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ContextMenuSection-m6biFtp2.js";import"./Dialog-UmHwq-hs.js";import"./Collection-ghLLd_h5.js";import"./SelectionIndicator-Ca0su_yA.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./VisuallyHidden-DDIsYkXL.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
