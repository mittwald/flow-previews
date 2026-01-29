import{j as r,r as f}from"./iframe-BUwXHbLV.js";import{M as o}from"./MarkdownEditor-CT9Hyp82.js";import{L as R}from"./Label-VcTz9-oy.js";import{F as b}from"./FieldError-BFYCcyQ4.js";import{B as z}from"./Button-C47X2BbH.js";import{S as x}from"./Section-DvLGNmum.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-iDR6XShM.js";import"./CodeBlock-DOi3YxU2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DgE3DdHa.js";import"./IconWarning-DpZLdH-i.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./remote-DgECwzV4.js";import"./Tooltip-nohw18Qw.js";import"./utils-JDwP1GoF.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useFocus-B6YbSr7t.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./context-DM2fd8XH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DaHiZmYv.js";import"./useControlledState-DYrRTv7P.js";import"./useFocusable-Dbq66Fw_.js";import"./react-children-utilities-Cb59dqqA.js";import"./Action-Wt0sSzk-.js";import"./context-BtwGTzrQ.js";import"./useStatic-BtWsPYN-.js";import"./browser-DgSxuaKY.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./dynamic-jPtu3qAR.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./Heading-DVvJZI_m.js";import"./Heading-Bx_NYZMu.js";import"./RSPContexts-CfLLQl4G.js";import"./InlineCode-BuKDR--X.js";import"./Link-CLMsl6et.js";import"./usePress-BcgTA6VC.js";import"./Separator-D9hrAG9X.js";import"./Separator-BSF4rUHh.js";import"./CollectionBuilder-BS4P0rnp.js";import"./Text-DQHJUI0D.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./TextArea-aRUPPz8X.js";import"./TextFieldBase-BaRlze7B.js";import"./FieldDescription-CJjcfRgA.js";import"./useFieldComponent-NdCAuKiZ.js";import"./TextField-HNnoCTf3.js";import"./FieldError-DDJD7LnR.js";import"./Form-D0DN8V4Z.js";import"./Group-BwNIZrev.js";import"./Input-NxVda43d.js";import"./useTextField-BaJoqTBw.js";import"./useFormReset-juEzhCU8.js";import"./useFormValidation-GMJFkgaI.js";import"./useControlledHostValueProps-BrTeFcEP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Dialog-2n0yrNbm.js";import"./Collection-X5iiX-bG.js";import"./SelectionIndicator-CP3BVA3N.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
