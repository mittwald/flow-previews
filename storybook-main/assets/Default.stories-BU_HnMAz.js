import{j as r,r as f}from"./iframe-BFuSR0CY.js";import{M as o}from"./MarkdownEditor-CUk7mbO4.js";import{L as R}from"./Label-Bzfu9tdI.js";import{F as z}from"./useFieldComponent-DvAk7ROg.js";import{B as b}from"./Button-B8_RMB4T.js";import{S as x}from"./Section-D9YHwW4r.js";import"./index-nuYtCEEu.js";import"./Markdown-DvWAAyv6.js";import"./CodeBlock-AsRyCgMw.js";import"./clsx-B-dksMZM.js";import"./CopyButton-nwvXegUu.js";import"./IconWarning-BDLPxpKm.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./Tooltip-_6ZohaIC.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./utils-CEuw8CkJ.js";import"./OverlayArrow-wdl515fE.js";import"./useFocus-Dfi_0tQM.js";import"./ProgressBar-D1Sp6uIf.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./context-6pf_efel.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Y8_jrThy.js";import"./useFocusable-Or0L-1Mb.js";import"./useFocusRing-CdpePOyD.js";import"./react-children-utilities-705z1kI6.js";import"./Action-BBEtKGm4.js";import"./context-CFFRtyxF.js";import"./useStatic-BcQq_-tU.js";import"./browser-h3r-jBf1.js";import"./getActionGroupSlot-C1e95e1F.js";import"./dynamic-BFfatATg.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./Heading-CGhPkmp1.js";import"./Heading-BHjkLbk1.js";import"./RSPContexts-Df5wrtNL.js";import"./InlineCode-UIQIcbtA.js";import"./Link-DWegYKZ9.js";import"./usePress-BYMimxLy.js";import"./Separator-CZybpUqi.js";import"./Separator-BLwDKZm_.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./TextArea-CmrsvGfz.js";import"./TextFieldBase-DBfua65y.js";import"./FieldDescription-DReTe5UI.js";import"./TextField-CuNLH0lz.js";import"./Form-CopJ-XT2.js";import"./Group-ln6N3sDl.js";import"./Input-Dy1mfW1m.js";import"./useTextField-DzB7yg8E.js";import"./useFormReset-CMQHaKTN.js";import"./useFormValidation-Dt4bKs4p.js";import"./ReactAriaControlledValueFix-CD5iZKpR.js";import"./useManagedValue-DQtRhby5.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ContextMenuSection-DOizDCjF.js";import"./Dialog-D9CJ_WbB.js";import"./Collection-C9ImqwdO.js";import"./SelectionIndicator-DEvuKTnp.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
