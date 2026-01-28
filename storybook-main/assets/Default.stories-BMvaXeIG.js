import{j as r,r as f}from"./iframe-DQPKoo92.js";import{M as o}from"./MarkdownEditor-l9blS-fi.js";import{L as R}from"./Label-Og-F06uZ.js";import{F as b}from"./FieldError-IxBtEnB-.js";import{B as z}from"./Button-0l0f_jx8.js";import{S as x}from"./Section-CU_KJgGZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CKdolE5K.js";import"./CodeBlock-DHTBOQtl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DS9blTPL.js";import"./IconWarning-CpLICj99.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./remote-BNYVvti7.js";import"./Tooltip-BtED7DES.js";import"./utils-XAdJPTNp.js";import"./OverlayArrow-CG2s7j2J.js";import"./useFocus-BE88ppMu.js";import"./ProgressBar-Cy5AjeoP.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DkBHutKV.js";import"./context-CJqjcP4U.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Cni30Eah.js";import"./useControlledState-CudIhSdL.js";import"./useFocusable-DX4YK8A-.js";import"./react-children-utilities-Dv85Y7H_.js";import"./Action-DXbaOV3K.js";import"./context-Fi_0LQNU.js";import"./useStatic-AmwUmW1y.js";import"./browser-ChlnFVHS.js";import"./getActionGroupSlot-BNoomJEc.js";import"./dynamic-DGh7GyZ8.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./Heading-BY6Bbsl0.js";import"./Heading-CRkNhhGs.js";import"./RSPContexts-C1KLf5C0.js";import"./InlineCode-jwrUSEh_.js";import"./Link-CBwHAhWI.js";import"./usePress-ByCBMVLm.js";import"./Separator-CRJ9kzpx.js";import"./Separator-CC-j5b8u.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./Text-C51WlGhJ.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./TextArea-t3F8AXrj.js";import"./TextFieldBase-DNuLdLmt.js";import"./FieldDescription-TOm-cQme.js";import"./useFieldComponent-BKiBq2W6.js";import"./TextField-BdwVHITI.js";import"./FieldError-C-pwln9P.js";import"./Form-C06cTOQY.js";import"./Group-hfhbZ0QM.js";import"./Input-MWzFGwJT.js";import"./useTextField-C7hH2N6q.js";import"./useFormReset-C7RuWveb.js";import"./useFormValidation-B8bsM8-M.js";import"./useControlledHostValueProps-Cp6qVjJt.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7sB4TeW.js";import"./ContextMenuSection-BCwogbjE.js";import"./Dialog-DjFTJjHY.js";import"./Collection-YBemO0n0.js";import"./SelectionIndicator-DugKwRvD.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
