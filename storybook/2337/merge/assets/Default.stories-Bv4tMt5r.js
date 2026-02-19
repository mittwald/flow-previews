import{j as r,r as f}from"./iframe-DYssR0ZO.js";import{M as o}from"./MarkdownEditor-NSRw9ham.js";import{L as R}from"./Label-D9oETDcN.js";import{F as b}from"./FieldError-BB68CtMB.js";import{B as z}from"./Button-DWrm_dbc.js";import{S as x}from"./Section-DXlc0Qej.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-PUYCQ5oR.js";import"./CodeBlock-Bk19KFU7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-u141z0Zq.js";import"./IconWarning-BhLXBIfL.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./remote-cHYIdIzb.js";import"./Tooltip-DtbED8As.js";import"./utils-C3q1cDFY.js";import"./OverlayArrow-Cf72_x8q.js";import"./useFocus-CQpADUyl.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./context-CUXiPoRo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CMEZAWj2.js";import"./useControlledState-CDSB3NYp.js";import"./useFocusable-CmCmEjiW.js";import"./react-children-utilities-MED-dOT4.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./browser-BciskJv3.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./dynamic-3BYImiyG.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./Heading-De8T3vTM.js";import"./Heading-CZjnkckI.js";import"./RSPContexts-CDW_96-t.js";import"./InlineCode-CDVg0lyD.js";import"./Link-BfMlRe4o.js";import"./usePress-xSc99ptM.js";import"./Separator-_ld7m8RD.js";import"./Separator-DtudkoI4.js";import"./CollectionBuilder-rMlba9-K.js";import"./Text-S9F4vE2H.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Text-C48KhL8P.js";import"./TextArea-Dp0rxDrQ.js";import"./useFieldComponent-MDeHyLVI.js";import"./useControlledHostValueProps-cssSA_4f.js";import"./FieldDescription-DK9jbbdr.js";import"./TextField-DDrLnvFP.js";import"./FieldError-Bq-6FZKj.js";import"./Form-C_ZwOWyd.js";import"./Group-DDubxubJ.js";import"./Input-VZe-sw4J.js";import"./useTextField-BW8H2oZa.js";import"./useFormReset-CxfaiCUr.js";import"./useFormValidation-D1fghWFH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";import"./LoadingSpinner-lL7MHRW7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dmp7BHEZ.js";import"./ContextMenuSection-DyHCMP-N.js";import"./Dialog-DF_yv1N5.js";import"./Collection-DXdmtnJo.js";import"./SelectionIndicator-02MGjaw1.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./VisuallyHidden-B8I9N7kv.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
