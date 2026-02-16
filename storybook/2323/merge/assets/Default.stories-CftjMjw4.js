import{j as r,r as f}from"./iframe-CIhdjqSz.js";import{M as o}from"./MarkdownEditor-CRUv8lW1.js";import{L as R}from"./Label-DvNJKWaN.js";import{F as b}from"./FieldError-C6Vi3jlh.js";import{B as z}from"./Button--NFWCTgK.js";import{S as x}from"./Section-DcDeoOZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DvgBMBbq.js";import"./CodeBlock-D0beVZnN.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DhDlFgoW.js";import"./IconWarning-NrGPSND5.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./remote-C6ukCFNy.js";import"./Tooltip-C87kTS20.js";import"./utils-3Ll5mTsj.js";import"./OverlayArrow-C-y_PFkG.js";import"./useFocus-CB1MjZml.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-ChVqcxnp.js";import"./useControlledState-Bhs9bgfq.js";import"./useFocusable-DArPbii_.js";import"./react-children-utilities-DApW9Qp0.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./browser-BTfojbbK.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./dynamic-DC2aGj60.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./RSPContexts-FgSmVkcq.js";import"./InlineCode-CLr_t_v8.js";import"./Link-PpAdeeeE.js";import"./usePress-BAXbDaCF.js";import"./Separator-znBBe8Ls.js";import"./Separator-CvRy5z-e.js";import"./CollectionBuilder-NdwpQU0D.js";import"./Text-DgrqnOua.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Text-BWZGL9q7.js";import"./TextArea-iw8SOaJZ.js";import"./useFieldComponent-BDBEatho.js";import"./useControlledHostValueProps-BmBohk80.js";import"./FieldDescription-CyU-MK8M.js";import"./TextField-DShuTezn.js";import"./FieldError-BrGZX-9W.js";import"./Form-C-8UFtdt.js";import"./Group-DY21f0zL.js";import"./Input-DGuJ7Hsu.js";import"./useTextField-Bg2pWp0I.js";import"./useFormReset-CCc0UGFI.js";import"./useFormValidation-kYNpgjw2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";import"./LoadingSpinner-CnQRgWlh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DTpgNeLS.js";import"./ContextMenuSection-B32Hv_M2.js";import"./Dialog-BaKpGYJ_.js";import"./Collection-CCRp5-Dk.js";import"./SelectionIndicator-BybBuRuw.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./VisuallyHidden-Szd7uPuS.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
