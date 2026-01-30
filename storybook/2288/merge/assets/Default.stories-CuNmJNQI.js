import{j as r,r as f}from"./iframe-DkT4d7Ot.js";import{M as o}from"./MarkdownEditor-CkeMN3s0.js";import{L as R}from"./Label-BjxJIvYs.js";import{F as b}from"./FieldError-BUQThHV3.js";import{B as z}from"./Button-B3KXRm13.js";import{S as x}from"./Section-DxjMaQtB.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D-05ICK7.js";import"./CodeBlock-C-9981d6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BMf47pPt.js";import"./IconWarning-K6asu7lY.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./remote-B8vjNxTl.js";import"./Tooltip-CJlwYS3o.js";import"./utils-up3lG_mb.js";import"./OverlayArrow-BYxGCDbr.js";import"./useFocus-Bn0bRGba.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./context-BhNnKB4w.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bn6GFEBK.js";import"./useControlledState-B7-cf8QC.js";import"./useFocusable-oFwI_mrj.js";import"./react-children-utilities-C907rqh9.js";import"./Action-BKfs-erd.js";import"./context-CpYzats6.js";import"./useStatic-DmZQ70we.js";import"./browser-CwBpRuL-.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./dynamic-AbOzqnd1.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./Heading-BxekkuWK.js";import"./Heading-DoshCNUZ.js";import"./RSPContexts-rkHdJ27o.js";import"./InlineCode-CF_LSW3Y.js";import"./Link-s3E4jLq1.js";import"./usePress-loL-ySzv.js";import"./Separator-HzIpP0WC.js";import"./Separator-DkPkeG73.js";import"./CollectionBuilder-qtEk7bDG.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./TextArea-D9JE_YjK.js";import"./TextFieldBase-sbSUwYZQ.js";import"./FieldDescription-BHCuHDvd.js";import"./useFieldComponent-FHnXwL7q.js";import"./TextField-DKJJTMZH.js";import"./FieldError-BIqVWLlF.js";import"./Form-CweUcSb7.js";import"./Group-BOYY_LIu.js";import"./Input--3PeXBSI.js";import"./useTextField-Zbiu6rp8.js";import"./useFormReset-DMhhuJvy.js";import"./useFormValidation-UULz_Uq_.js";import"./useControlledHostValueProps-QgeK23Kf.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DKCc9Jm1.js";import"./ContextMenuSection-NCgBu2Na.js";import"./Dialog-DEf0gwvq.js";import"./Collection-B11FEq3B.js";import"./SelectionIndicator-B0xJhgeU.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./VisuallyHidden-BhWvypZu.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
