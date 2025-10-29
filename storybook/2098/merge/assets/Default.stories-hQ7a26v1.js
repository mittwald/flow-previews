import{j as r,r as f}from"./iframe-M-00ByYr.js";import{M as o}from"./MarkdownEditor-gUF1wbLQ.js";import{L as R}from"./Label-DT1JZy6g.js";import{F as z}from"./FieldError-ZwGpCE6l.js";import{B as b}from"./Button-Dye8aZJo.js";import{S as x}from"./Section-DxqiSUr-.js";import"./index-nuYtCEEu.js";import"./Markdown-BogsQkvz.js";import"./CodeBlock-Dtbhemjz.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ccz_hhPI.js";import"./IconWarning-BKX4jvdo.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./index-DpE53F72.js";import"./Tooltip-CUCw1LYX.js";import"./ClearPropsContextView-DOVoKx0-.js";import"./ClearPropsContext-DvyDrnsG.js";import"./utils-CzeOq9Jp.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useFocus-kTKNfC8f.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./context-rdrdo5ux.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cpz-s1gG.js";import"./useFocusable-Ck0hOZfS.js";import"./useFocusRing-BCZu56W_.js";import"./react-children-utilities-Dk-9Ngpu.js";import"./Action-C6LgLFNM.js";import"./context-DSFC_3Cq.js";import"./useStatic-B0qB2N-4.js";import"./browser-DuQo-X1z.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./dynamic-COr1kucW.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./Heading-Cc9x6iz-.js";import"./Heading-CaFtCNvg.js";import"./RSPContexts-D5gF1Lon.js";import"./InlineCode-PqTV7D3p.js";import"./Link-GEBmnRKv.js";import"./usePress-ZYaxT06h.js";import"./Separator-ClYnroWI.js";import"./Separator-Dlgp_N-b.js";import"./CollectionBuilder-D-4RKEgn.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./TextArea-D1o4ubWf.js";import"./TextFieldBase-BdwOCJSd.js";import"./FieldDescription-70lNmvry.js";import"./useFieldComponent-CRgHa0Rs.js";import"./TextField-DNJxyyXd.js";import"./Form-B5fCCfio.js";import"./Group-Dk159ZYr.js";import"./Input-CPscax3_.js";import"./useTextField-CKTQn_AI.js";import"./useFormReset-B1z61k1U.js";import"./useFormValidation-Co3-d3Vs.js";import"./ReactAriaControlledValueFix-Cd1cyM2V.js";import"./useManagedValue-DUfCRCd2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./Collection-BNL1juni.js";import"./SelectionIndicator-BTUqWRGF.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
