import{j as r,r as f}from"./iframe-BsCnutBU.js";import{M as o}from"./MarkdownEditor-CZMkn8uU.js";import{L as R}from"./Label-DBiwGOqI.js";import{F as b}from"./FieldError-CJPS-seQ.js";import{B as z}from"./Button-PMfVxp4L.js";import{S as x}from"./Section-C1RjpY9f.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CuKn4iwh.js";import"./CodeBlock-DV2B2oCv.js";import"./clsx-B-dksMZM.js";import"./CopyButton-uyxQRSUV.js";import"./IconChevronDown-C43PU1K-.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./remote-LwvHvQd9.js";import"./IconCopy-CRbgOE99.js";import"./Tooltip-CSrERER2.js";import"./utils-Dcbzlj6n.js";import"./OverlayArrow-D6gKPtoN.js";import"./useFocus-zRbhNQvs.js";import"./ProgressBar-BvRvte-F.js";import"./Label-B_59qcJ5.js";import"./Hidden-gYrC-ftW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./context-DzQn9XcF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CigtIRD8.js";import"./useFocusable-Czch9xtI.js";import"./useFocusRing-eAFZ6BYE.js";import"./react-children-utilities-D08Ya5xY.js";import"./Action-CDxlZfJH.js";import"./browser-b7DWXv2S.js";import"./useStatic-BIAK3C1m.js";import"./getActionGroupSlot-D8KutjkD.js";import"./context-bnUckVor.js";import"./dynamic-DlsVuPIo.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./Heading-CS-diEha.js";import"./Heading-D7AMkkFH.js";import"./RSPContexts-Dp9qqhDW.js";import"./InlineCode-CZ5ElL3S.js";import"./Link-CpQNpxMb.js";import"./IconDownload-CEalXOzk.js";import"./usePress-CHCx2MC1.js";import"./Separator-CNCUdJhz.js";import"./Separator-BirN-56R.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./TextArea-rmRQpnBk.js";import"./TextFieldBase-D8kM67Si.js";import"./FieldDescription-DXa041T4.js";import"./useFieldComponent-DKQov8fN.js";import"./TextField-B_R29ctY.js";import"./FieldError-oQwctYYH.js";import"./Form-te5EpUcA.js";import"./Group-zOLkyEJm.js";import"./Input-XkH6LSV2.js";import"./useTextField-DPa3Dmxj.js";import"./useFormReset-DwCUeF5J.js";import"./useFormValidation-hrdfW_GO.js";import"./useControlledHostValueProps-B2GrztKn.js";import"./IconList-PoC11l5n.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-d9R36P01.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YTgHheMP.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Dialog-CUr7rK7w.js";import"./Collection-C8-9jDK9.js";import"./SelectionIndicator-Baq8cblo.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";const Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,$r as __namedExportsOrder,Zr as default};
