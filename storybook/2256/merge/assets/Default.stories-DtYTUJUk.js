import{j as r,r as f}from"./iframe-CIXg2wml.js";import{M as o}from"./MarkdownEditor-B090hQIH.js";import{L as R}from"./Label-qxc1gCGy.js";import{F as b}from"./FieldError-BH2vnwI0.js";import{B as z}from"./Button-BNUMHVa-.js";import{S as x}from"./Section-BHH0DwO5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Ck0QBiw2.js";import"./CodeBlock-BuB2pPP2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DQMzCWxT.js";import"./IconWarning-CiSujg9K.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./remote-8tD3tcl0.js";import"./Tooltip-zBV_87Ta.js";import"./utils-E3QCR4Ei.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useFocus-Xgz2P1v-.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./context-TKY6ae7T.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-euBd3hty.js";import"./useFocusable-LSbGRyyR.js";import"./useFocusRing-CJfArHTm.js";import"./react-children-utilities-D1PWLbc5.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./browser-CYeJE0Iy.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./dynamic-DkFDoLPd.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./Heading-IDnu3Squ.js";import"./Heading-NdZmHCy8.js";import"./RSPContexts-CMEo-sGH.js";import"./InlineCode-DMuuJs4x.js";import"./Link-hyB-uv4w.js";import"./usePress-C_LDf41x.js";import"./Separator-7cBlcT3d.js";import"./Separator-BD9AYapb.js";import"./CollectionBuilder-CsxYH4iw.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./TextArea-pQ4SyLY6.js";import"./TextFieldBase-OLNRDnvK.js";import"./FieldDescription-Ca0n3MzM.js";import"./useFieldComponent-D7V8J4vf.js";import"./TextField-CAQY9kvO.js";import"./FieldError-B2EiL9vq.js";import"./Form-AGjJK_iq.js";import"./Group-BARt7F5J.js";import"./Input-DGQ1K2ts.js";import"./useTextField-CGoqsooy.js";import"./useFormReset-BWhLZN3-.js";import"./useFormValidation-B5rYBS3I.js";import"./useControlledHostValueProps-DNw2Nj9Y.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BbDeItRQ.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Dialog-f9GqGINB.js";import"./Collection-PnRWL8bH.js";import"./SelectionIndicator-Ck0MHypk.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
