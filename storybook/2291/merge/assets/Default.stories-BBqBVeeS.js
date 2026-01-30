import{j as r,r as f}from"./iframe-DSXKf9Qs.js";import{M as o}from"./MarkdownEditor-DnCScxRP.js";import{L as R}from"./Label-BZGX3mYQ.js";import{F as b}from"./FieldError-DyLpPvQc.js";import{B as z}from"./Button-D9RPwGO-.js";import{S as x}from"./Section-C2etDRXq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-I6iXHwem.js";import"./CodeBlock-Dryr24bF.js";import"./clsx-B-dksMZM.js";import"./CopyButton-euaw0QjX.js";import"./IconWarning-CsaNdeaY.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./index-xIXPquhv.js";import"./remote-Gy-Ku51P.js";import"./Tooltip-D-fh5voC.js";import"./utils-BkNrSrSW.js";import"./OverlayArrow-wV4le4-P.js";import"./useFocus-BkCMpCSs.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./context-DU2DYbHB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-9tutEJo4.js";import"./useControlledState-C8VBbj0I.js";import"./useFocusable-BiabYp81.js";import"./react-children-utilities-CfcEWQ4K.js";import"./Action-D8TvePO3.js";import"./context-CiYX6UJF.js";import"./useStatic-CLatwN1t.js";import"./browser-zi1f_NHh.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./dynamic-waHTXRlt.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./Heading-CyZwRqCp.js";import"./Heading-ChWDXA_z.js";import"./RSPContexts-C47t6iqA.js";import"./InlineCode-Bq-1e-vt.js";import"./Link-_tEGPnTm.js";import"./usePress-D3-3tpV2.js";import"./Separator-B94AoTSJ.js";import"./Separator-BRbgnZrd.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./Text-C7KW9wgf.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./TextArea-DLlvuXXH.js";import"./useFieldComponent-CCab4n06.js";import"./useControlledHostValueProps-DA4HPgA7.js";import"./FieldDescription-D3qqafyO.js";import"./TextField-DBMQ6SdS.js";import"./FieldError-D2u-4343.js";import"./Form-CmWGeahq.js";import"./Group-cFUMqjZ6.js";import"./Input-C3UpKYh9.js";import"./useTextField-yOaw7krz.js";import"./useFormReset-CY4Zdzy9.js";import"./useFormValidation-CZFMPKAm.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DD62R7IC.js";import"./ContextMenuSection-8AZZSNKN.js";import"./Dialog-Dgijbiav.js";import"./Collection-Bm0CT5e0.js";import"./SelectionIndicator-BtJjQV2B.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
