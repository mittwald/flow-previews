import{j as r,r as f}from"./iframe-BLMVSPV3.js";import{M as o}from"./MarkdownEditor-B9pTj2ST.js";import{L as R}from"./Label-C8Rr5uKt.js";import{F as b}from"./FieldError-C9r0kVik.js";import{B as z}from"./Button-RfhP7QLX.js";import{S as x}from"./Section-Sirm0ClO.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DumXodI_.js";import"./CodeBlock-CyC1rgKL.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CPie9VpD.js";import"./IconWarning-DFK0SIT3.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./remote-B_iWR4WH.js";import"./Tooltip-Cn4nFX1Z.js";import"./utils-je6Mfjnf.js";import"./OverlayArrow-DqBJvRH_.js";import"./useFocus-B92CKOsl.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./context-BPm1HUwp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-IVoDVSxb.js";import"./useControlledState-Bp8O9Zqw.js";import"./useFocusable-DsXmOaAq.js";import"./react-children-utilities-BRkHxvnD.js";import"./ActionBatch-Cx_n21HW.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./browser-CtcijgRV.js";import"./getActionGroupSlot-BdFM70uG.js";import"./dynamic-DAjDUp_G.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./Heading-BFhkb_kv.js";import"./Heading-DGpyEp1Z.js";import"./RSPContexts-BTwsU_Cp.js";import"./InlineCode-Do7_PVwx.js";import"./Link-CC9mDZZh.js";import"./usePress-DgsdN2D5.js";import"./Separator-C7bqjogf.js";import"./Separator-CN6eRPM4.js";import"./CollectionBuilder-DVFPK5dr.js";import"./Text-CGLO_VNW.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./TextArea-B1wO0rIB.js";import"./useFieldComponent-y-VnQdYS.js";import"./useControlledHostValueProps-Ch3Pmn36.js";import"./FieldDescription-1iFVSl7S.js";import"./TextField-CJFAhKLP.js";import"./FieldError-CUXp9-J-.js";import"./Form-CkFb-Mj9.js";import"./Group-fZwN4R35.js";import"./Input-BNOgaKSE.js";import"./useTextField-CR83D2he.js";import"./useFormReset-7ZGeCzym.js";import"./useFormValidation-CsmzuQo6.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";import"./LoadingSpinner-BCnxKzgI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-4lGsfIj0.js";import"./ContextMenuSection-BvWYHMvE.js";import"./Dialog-BT74UQ_T.js";import"./Collection-D_0q5y9E.js";import"./SelectionIndicator-MBj-w85S.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
