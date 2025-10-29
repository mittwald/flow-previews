import{j as r,r as f}from"./iframe-9LT5pwxo.js";import{M as o}from"./MarkdownEditor-D4weACXn.js";import{L as R}from"./Label-Cy0HO6mF.js";import{F as z}from"./useFieldComponent-FBKhS2uw.js";import{B as b}from"./Button-DgX4Ha9j.js";import{S as x}from"./Section-BblLzrvZ.js";import"./index-nuYtCEEu.js";import"./Markdown-CmaJ4Na2.js";import"./CodeBlock-DMsbfFcb.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C7T_wC74.js";import"./IconWarning-BGmK8I3p.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./Tooltip-C-zhliMg.js";import"./ClearPropsContextView-CturT0aU.js";import"./ClearPropsContext-BgV1DGsr.js";import"./utils-C12iYS2x.js";import"./OverlayArrow-CBGQsLGC.js";import"./useFocus-CGIGFm0L.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./context-CZZdPtMN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B0dx1ah2.js";import"./useFocusable-6Pd0pdJi.js";import"./useFocusRing-BpS4vJuf.js";import"./react-children-utilities-CGBnGU1K.js";import"./Action-CxBB9EbS.js";import"./context-CNHQEL1v.js";import"./useStatic-C20s3RtG.js";import"./browser-Be7wxfSs.js";import"./getActionGroupSlot-BSebOatG.js";import"./dynamic-Dp02ioFc.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./Heading-CsMeNISd.js";import"./Heading-BdTxNxt3.js";import"./RSPContexts-D4jozd1E.js";import"./InlineCode--3Wylxtu.js";import"./Link-BPWcwyuw.js";import"./usePress-CYkWbbQS.js";import"./Separator-Cjw4NSZ2.js";import"./Separator-DiqHC5hw.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./Text-FZjxGLxv.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./TextArea-UxrAwMDC.js";import"./TextFieldBase-DYbPygQo.js";import"./FieldDescription-BLZvXXGp.js";import"./TextField-Cg6vRFbo.js";import"./Form-PBwv22gS.js";import"./Group-C-8wTSfb.js";import"./Input-CuGFAjVN.js";import"./useTextField-Bgi1f7m8.js";import"./useFormReset-DsyYy3rG.js";import"./useFormValidation-gXwoIgM4.js";import"./ReactAriaControlledValueFix-BvsinBSk.js";import"./useManagedValue-zozdo9rY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ContextMenuSection-BA7OrQRH.js";import"./Dialog-CLeuoHpB.js";import"./Collection-e6qlJrU1.js";import"./SelectionIndicator-CcfS7mad.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./VisuallyHidden-kbtTP9xl.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
