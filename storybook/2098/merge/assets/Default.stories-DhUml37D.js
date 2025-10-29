import{j as r,r as f}from"./iframe-B8r8XrPb.js";import{M as o}from"./MarkdownEditor-CYiDd9nQ.js";import{L as R}from"./Label-PmVCxAho.js";import{F as z}from"./FieldError-Cr-OeICt.js";import{B as b}from"./Button-x8S8uZ_3.js";import{S as x}from"./Section-DbQ-wmnj.js";import"./index-nuYtCEEu.js";import"./Markdown-VmyOYMaJ.js";import"./CodeBlock-CP7fsKwC.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CJY88v6t.js";import"./IconWarning-BnpSGPSL.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./Tooltip-CS_vn47s.js";import"./ClearPropsContextView-CH1TrHU5.js";import"./ClearPropsContext-BX2g1WFh.js";import"./utils-B2sHMxfy.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useFocus-Co_XlsN_.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./context-d7knuPTA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dhb_P5xS.js";import"./useFocusable-USAcjdfT.js";import"./useFocusRing-DGaivw0f.js";import"./react-children-utilities-J_GxmSqg.js";import"./Action-DHR-Mkls.js";import"./context-tqHfsDuk.js";import"./useStatic-Qi3p0Ena.js";import"./browser-5JWtNQpe.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./dynamic-Bnt25vOJ.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./Heading-1GMm3hB8.js";import"./Heading-BM099qXJ.js";import"./RSPContexts-Do_0M-hc.js";import"./InlineCode-96vPyWO1.js";import"./Link-FGA3gtv3.js";import"./usePress-BPC_OlSs.js";import"./Separator-DbXiL4fb.js";import"./Separator-BqgRmmFG.js";import"./CollectionBuilder-C1D-HmCC.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./TextArea-DYphRlrx.js";import"./TextFieldBase-c9yYS2qO.js";import"./FieldDescription-B6QY2e39.js";import"./useFieldComponent-DByhNd_z.js";import"./TextField-DYkOEqpl.js";import"./Form-C0W2Agsa.js";import"./Group-DkjxT4kZ.js";import"./Input-Cyh52Hgt.js";import"./useTextField-BBBf5j1Z.js";import"./useFormReset-Cpg0SQow.js";import"./useFormValidation-DuuScCCl.js";import"./ReactAriaControlledValueFix-PV676lWb.js";import"./useManagedValue-BwqNFsAX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-bZO-WOXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOtSsu3o.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Dialog-DJ22CsqV.js";import"./Collection-Dst8UlSd.js";import"./SelectionIndicator-BHwOxkNR.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
