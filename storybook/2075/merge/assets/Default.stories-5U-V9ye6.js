import{j as r,r as R}from"./iframe-C3YinX3s.js";import{M as o}from"./MarkdownEditor-Bx4QB5h5.js";import{L as h}from"./Label-vc6tDbdp.js";import{F as w}from"./useFieldComponent-unfYr68o.js";import{B as b}from"./Button-B9MewrUz.js";import{S as x}from"./Section-C_5nF8l2.js";import"./index-nuYtCEEu.js";import"./Markdown-7HKmueqE.js";import"./CodeBlock-DgPeZ_8E.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DiLXxiVH.js";import"./IconWarning-6TASCfRR.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./index-BppZCGPZ.js";import"./Tooltip-D-7iaRTI.js";import"./ClearPropsContextView-j5diIoDW.js";import"./ClearPropsContext-CJ1szkV5.js";import"./utils-CkQtaKCN.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useFocus-DuIK45_5.js";import"./ProgressBar-DHxU0Tpr.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6oysTp78.js";import"./context-XadyItFl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DTNxqflL.js";import"./useFocusable-Cpx8bVI7.js";import"./useFocusRing-BT4tpo7d.js";import"./react-children-utilities-Tlnpa_z4.js";import"./Action-DH4q3DMK.js";import"./context-C6PcGqQE.js";import"./useStatic-K2T119cA.js";import"./browser-DlgIuTl3.js";import"./getActionGroupSlot-DrHtarua.js";import"./dynamic-BlWCyvfa.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./Heading-BWuvehcD.js";import"./Heading-DtjPUsAn.js";import"./RSPContexts-DbIyirJn.js";import"./InlineCode-CtEz7tac.js";import"./Link-CZlnRLHJ.js";import"./usePress-CEE7eirG.js";import"./Separator-D-jriC3-.js";import"./Separator-BjhRMKQy.js";import"./CollectionBuilder-YYQa8BK8.js";import"./Text-40KOd3GJ.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./TextArea-1OZlcyRA.js";import"./TextFieldBase-BYRjDC0U.js";import"./FieldDescription-DuQ-cxei.js";import"./TextField-DsXX1XS3.js";import"./Form-BCJL5_dO.js";import"./Group-CAUzS8Z9.js";import"./Input-MWLT5DSw.js";import"./useTextField-ZOQ3uZr1.js";import"./useFormReset-BgD1M5By.js";import"./useFormValidation-mKao3Dkx.js";import"./ReactAriaControlledValueFix-bFYYT4Mj.js";import"./useManagedValue-DsZPCuYM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BiveWKkE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBEcZBzR.js";import"./ContextMenuSection-ko5_btdi.js";import"./Dialog-CifFL37q.js";import"./Collection-CFBStWe-.js";import"./SelectionIndicator-CWOLS5ft.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";const Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(h,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(w,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(h,{children:"Message"})})},g={render:e=>{const t=R.useRef(null),f=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(h,{children:"Message"})}),r.jsx(b,{type:"button",onClick:f,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,u as WithOnChange,g as WithRef,Jr as __namedExportsOrder,Gr as default};
