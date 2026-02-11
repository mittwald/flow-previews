import{j as r,r as f}from"./iframe-lFICOVMG.js";import{M as o}from"./MarkdownEditor-C1B3x9jS.js";import{L as R}from"./Label-WsCexfXL.js";import{F as b}from"./FieldError-Ba2n5nZe.js";import{B as z}from"./Button-Cf-KBW4_.js";import{S as x}from"./Section-Co3yAI3_.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BHIwnuEc.js";import"./CodeBlock-BevWcO3j.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B4ub8mk5.js";import"./IconWarning-4K-DqIQK.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./remote-CRPYY61Z.js";import"./Tooltip-wWXAV_F6.js";import"./utils-DhhSlmx9.js";import"./OverlayArrow-B2p7lzkF.js";import"./useFocus-fqIQg8qR.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./context-Sy7BhgRt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeOtkCiq.js";import"./useControlledState-BZJPMeD2.js";import"./useFocusable-ByJ0NNOg.js";import"./react-children-utilities-BfOV7R51.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./useStatic-DBynbgAg.js";import"./browser-CN95VINd.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./dynamic-0KpQiqy3.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./Heading-DcmPVh6J.js";import"./Heading-BZr6A1TW.js";import"./RSPContexts-BmMWqIzn.js";import"./InlineCode-CIxQSpOJ.js";import"./Link-CbinGVB-.js";import"./usePress-BW_bFHXv.js";import"./Separator-3UHzGpvN.js";import"./Separator-h54hNRT-.js";import"./CollectionBuilder-B2841q0A.js";import"./Text-BQwiR71m.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./TextArea-DfB29ivU.js";import"./useFieldComponent-70N6l4jn.js";import"./useControlledHostValueProps-CKOcyAM8.js";import"./FieldDescription-B-4XBa_Q.js";import"./TextField-Bhd7qDTe.js";import"./FieldError-DXs5idvC.js";import"./Form-DIwrOEgx.js";import"./Group-0ck5nD0j.js";import"./Input-Cm6GPhlW.js";import"./useTextField-DsAYcK4F.js";import"./useFormReset-CPUmIViP.js";import"./useFormValidation-BdcfYetn.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ContextMenuSection-CljVwRlE.js";import"./Dialog-XpC0gjG5.js";import"./Collection-CzN4wOJ8.js";import"./SelectionIndicator-CW-bKP1t.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
