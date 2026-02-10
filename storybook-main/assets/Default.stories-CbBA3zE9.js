import{j as r,r as f}from"./iframe-CH-PGbIe.js";import{M as o}from"./MarkdownEditor-C64lgkNk.js";import{L as R}from"./Label-BpHmIn39.js";import{F as b}from"./FieldError-9pLulNyY.js";import{B as z}from"./Button-Dl-iCxcF.js";import{S as x}from"./Section-DpoV8RoH.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C8p86YpT.js";import"./CodeBlock-C430Kijh.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bq_QNDJf.js";import"./IconWarning-BrtiYPUm.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./remote-NkxELaCk.js";import"./Tooltip-gcYstrAI.js";import"./utils-BUbYN1U7.js";import"./OverlayArrow-BxBE_adq.js";import"./useFocus-C-u_ZFsP.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./context-BEPAk1pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CuUFHyYZ.js";import"./useControlledState-BQPo69mZ.js";import"./useFocusable-DX9jgPLa.js";import"./react-children-utilities-hFcdB3zS.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./browser-Bk_hun62.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./dynamic-DYPsp9rr.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./Heading-BkfS56Xz.js";import"./Heading-DuD4iKmL.js";import"./RSPContexts-CFzFD81a.js";import"./InlineCode-BI_jmHPT.js";import"./Link-DAc9zWmn.js";import"./usePress-CjXzQGxt.js";import"./Separator-B1KE2hxC.js";import"./Separator-D7Dxs4fR.js";import"./CollectionBuilder-D_HWiiHS.js";import"./Text-DUTVzyy5.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./TextArea-7o6Z08af.js";import"./useFieldComponent-R38s1k2Z.js";import"./useControlledHostValueProps-BPSsIec4.js";import"./FieldDescription-DMXEORO1.js";import"./TextField-C221tDOx.js";import"./FieldError-PikikH1M.js";import"./Form-BPpqOWmF.js";import"./Group-D9bGLtxm.js";import"./Input-C82ooeG7.js";import"./useTextField-DqKvfInW.js";import"./useFormReset-DarrOQyz.js";import"./useFormValidation-CGeoBpxY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxJ7LcYT.js";import"./ContextMenuSection-NNPlO46F.js";import"./Dialog-LWxSnoH8.js";import"./Collection-BTj5Zmqj.js";import"./SelectionIndicator-DFgYB22t.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
