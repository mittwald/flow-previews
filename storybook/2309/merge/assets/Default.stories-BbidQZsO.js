import{j as r,r as f}from"./iframe-BV_gLY1W.js";import{M as o}from"./MarkdownEditor-CIDzGb5f.js";import{L as R}from"./Label-DSp9Q3qx.js";import{F as b}from"./FieldError-Du2SwoFV.js";import{B as z}from"./Button-SSCEZ0RO.js";import{S as x}from"./Section-DFw7sWw1.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-OgWBLYW9.js";import"./CodeBlock-DAY83VJg.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cwh9uJg3.js";import"./IconWarning-BvnX4fSp.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./index-iDKz2btu.js";import"./remote-DzXnO2Bt.js";import"./Tooltip-Dl1Jj4y7.js";import"./utils-pcZMLEVF.js";import"./OverlayArrow-BxTjv8xX.js";import"./useFocus-BhZlDk36.js";import"./ProgressBar-d-6uKhr8.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BcIwqyBf.js";import"./context-D0kYsfYD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DHBFiW-v.js";import"./useControlledState-D8GCi_t3.js";import"./useFocusable-CF0VfUE0.js";import"./react-children-utilities-Ccn87ZD7.js";import"./Action-B44IIYnD.js";import"./context-DsGc8Cs0.js";import"./useStatic-Bro5j9qe.js";import"./browser-RRcj6Eel.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./dynamic-D0Gso-mt.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./Heading-DoDWvzJr.js";import"./Heading-CTg1mIVh.js";import"./RSPContexts-C37Ie1k0.js";import"./InlineCode-BV-8JfA8.js";import"./Link-Bo-tE7zs.js";import"./usePress-Cpaxayx2.js";import"./Separator-mKB8M-dh.js";import"./Separator-C5PKpWVh.js";import"./CollectionBuilder-k5dkf4C0.js";import"./Text-B1ZcDWdT.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./TextArea-vTYjmakK.js";import"./useFieldComponent-Ciy1vkCA.js";import"./useControlledHostValueProps-CdAs3b7f.js";import"./FieldDescription-DJEI_ZDJ.js";import"./TextField-B8NJHOS9.js";import"./FieldError-Q2svFxIr.js";import"./Form-Cc8Ejva8.js";import"./Group-BmpY48KV.js";import"./Input-tiA0LuFc.js";import"./useTextField-UbdMNCYP.js";import"./useFormReset-Ba41Oqje.js";import"./useFormValidation-Bzs4UsOG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";import"./LoadingSpinner-DwHnxPWs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BTyL1bMd.js";import"./ContextMenuSection-uCRJ4fX1.js";import"./Dialog-DuYLlPOJ.js";import"./Collection-B2K0MU6U.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
