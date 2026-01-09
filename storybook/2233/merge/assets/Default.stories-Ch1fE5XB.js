import{j as r,r as f}from"./iframe-tI_lG94_.js";import{M as o}from"./MarkdownEditor-CNevvEDV.js";import{L as R}from"./Label-CdVUwStZ.js";import{F as b}from"./FieldError-DYW7UPuf.js";import{B as z}from"./Button-WUI-ZJ9l.js";import{S as x}from"./Section-Zl-SwqAC.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-1mBoeRmg.js";import"./CodeBlock-CuIA8Vrb.js";import"./clsx-B-dksMZM.js";import"./CopyButton-hoYgXexT.js";import"./IconWarning-BFYQkdin.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./remote-CmKo-bli.js";import"./Tooltip-DZr1j3bU.js";import"./utils-bmh-HeLH.js";import"./OverlayArrow-DuDGHp0O.js";import"./useFocus-DCHopMY8.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./context-CBF_EHvQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BE5RFE46.js";import"./useFocusable-BnM0ssdw.js";import"./useFocusRing-Dgbmnyxw.js";import"./react-children-utilities-CcY8tZWQ.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./browser-DuhBvQkx.js";import"./getActionGroupSlot-DPvye52P.js";import"./dynamic-DqOiE30k.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./Heading-BGy3_a0K.js";import"./Heading-Ds7I4FP5.js";import"./RSPContexts-C1ceWNax.js";import"./InlineCode-COBQfWW8.js";import"./Link-z4t99LEz.js";import"./usePress-C1ke7TUF.js";import"./Separator-VWf9hotQ.js";import"./Separator-AUomIBZD.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./TextArea-7O6tW0nE.js";import"./TextFieldBase-Cf2px3GI.js";import"./FieldDescription-CSWmc1EX.js";import"./useFieldComponent-_Dyiwxtg.js";import"./TextField-U30YbphT.js";import"./FieldError-CdG59lLT.js";import"./Form-B72YgAOe.js";import"./Group-CWqc5_8a.js";import"./Input-DTXfGVIZ.js";import"./useTextField-DIaV0kgB.js";import"./useFormReset-LNt8buNd.js";import"./useFormValidation--MR_E_GW.js";import"./useControlledHostValueProps-Mo_orcSi.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-EHR8zEQX.js";import"./ContextMenuSection-Co6pbj1l.js";import"./Dialog-Bo5p_Zqr.js";import"./Collection-DCiKuUl7.js";import"./SelectionIndicator-uIlcbJnR.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
