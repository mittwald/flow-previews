import{j as r,r as f}from"./iframe-VTkEMv55.js";import{M as o}from"./MarkdownEditor-7Tr6efTG.js";import{L as R}from"./Label-DwQEy05E.js";import{F as b}from"./FieldError-B1IV40_q.js";import{B as z}from"./Button-B9lvy9yg.js";import{S as x}from"./Section-DjOUR5LH.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CVmGjf5P.js";import"./CodeBlock-D3EEtG_e.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DWD4l6k8.js";import"./IconWarning-D408DR62.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./index-D_xlAiD1.js";import"./remote-pRnbNSGs.js";import"./Tooltip-DiAmgknq.js";import"./utils-DPKXOmt2.js";import"./OverlayArrow-CyTNZBgT.js";import"./useFocus-JgmAf8eL.js";import"./ProgressBar-6h4xV7_x.js";import"./Label-BRaJlgoE.js";import"./Hidden-d-f11Ccs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./context-BVezW8pN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CxodNXny.js";import"./useFocusable-CzgiUJAu.js";import"./useFocusRing-BeV8_2Yg.js";import"./react-children-utilities-39ckWr-3.js";import"./Action-DV-QBt8x.js";import"./context-CeKSAP77.js";import"./useStatic-OVy-y77u.js";import"./browser-_Qir5MkB.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./dynamic-BSd9oB0r.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./Heading-DR27KtWq.js";import"./Heading-DNyZLCgr.js";import"./RSPContexts-wdKGWz4J.js";import"./InlineCode-CFiTbiZA.js";import"./Link-DkhtPTod.js";import"./usePress-Cb2XrqKT.js";import"./Separator-oOeULqz2.js";import"./Separator-BE0n3_oB.js";import"./CollectionBuilder-DhJAnH_i.js";import"./Text-DlbRcSah.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./TextArea-BVMQ_7uy.js";import"./TextFieldBase-VkWldC8k.js";import"./FieldDescription-Ly1-BQrw.js";import"./useFieldComponent-CicShoBh.js";import"./TextField-4uISm1ZZ.js";import"./FieldError-CFdAmcbB.js";import"./Form-BAg9n-JE.js";import"./Group-CdGLrnc5.js";import"./Input-B9tYQbF3.js";import"./useTextField-DjgRalQs.js";import"./useFormReset-DRm0nHwN.js";import"./useFormValidation-CNiU2G-p.js";import"./useControlledHostValueProps-Bk08TKui.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BWeGH-7c.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKfoJr1S.js";import"./ContextMenuSection-CWe96eWW.js";import"./Dialog-Qb8RaXBy.js";import"./Collection-xr8-TVrR.js";import"./SelectionIndicator-CYSMLMH7.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
