import{j as r,r as f}from"./iframe-BB26x0WO.js";import{M as o}from"./MarkdownEditor-4zAg3cTU.js";import{L as R}from"./Label-Dkznuq9f.js";import{F as b}from"./FieldError-EbPb3FIT.js";import{B as z}from"./Button-BTY4YrG_.js";import{S as x}from"./Section-IPK-m1wF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BidUJAKM.js";import"./CodeBlock-CH2Yhw7a.js";import"./clsx-B-dksMZM.js";import"./CopyButton-tyf2GuJk.js";import"./IconWarning-xtBRgQwR.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./remote-BOIRgCVv.js";import"./Tooltip-DC_51GpP.js";import"./utils-B0cjT-cu.js";import"./OverlayArrow-DRxGu_ip.js";import"./useFocus-BTahgc6b.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./context-CFwMSK2D.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bi3RtZ50.js";import"./useFocusable-BCoGMlTE.js";import"./useFocusRing-3NylsfEU.js";import"./react-children-utilities-CwQWrOKU.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./useStatic-CBwNmb4h.js";import"./browser-CM4yKXDn.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./dynamic-iWxR2zWf.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./Heading-DjuXjgcE.js";import"./Heading-CYNLL9tG.js";import"./RSPContexts-DeiYbaO6.js";import"./InlineCode-BZu1UrBH.js";import"./Link-Bbuns-ax.js";import"./usePress-DgIl3AW_.js";import"./Separator-ChAztj66.js";import"./Separator-BCEfhEi-.js";import"./CollectionBuilder-DSmRSiR5.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./TextArea-B7KimlrA.js";import"./TextFieldBase-CEHEFmoJ.js";import"./FieldDescription-C9tQ8Z1l.js";import"./useFieldComponent-uqIFFsha.js";import"./TextField-XAmj3fUL.js";import"./FieldError-BdEQwJOQ.js";import"./Form-D-p_8RL3.js";import"./Group-N-95shQ7.js";import"./Input-CX7n_Ikd.js";import"./useTextField-DyIHjJ7R.js";import"./useFormReset-DftD3Tx4.js";import"./useFormValidation-CSSQUpRU.js";import"./useControlledHostValueProps-xsHz9TIR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ContextMenuSection-DGimkJAp.js";import"./Dialog-rd60ApeF.js";import"./Collection-3Y1iCCsF.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
