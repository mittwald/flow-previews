import{j as r,r as f}from"./iframe-DITmTDde.js";import{M as o}from"./MarkdownEditor-Y6eDvUu8.js";import{L as R}from"./Label-DcnJ5Vhi.js";import{F as b}from"./FieldError-CBw2sGOe.js";import{B as z}from"./Button-DgKZKMvA.js";import{S as x}from"./Section-LC8gX_k1.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BV_onAN2.js";import"./CodeBlock-T5j1QY9C.js";import"./clsx-B-dksMZM.js";import"./CopyButton-jr4raHW7.js";import"./IconWarning-FbTim4wC.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./index-oEm39XqO.js";import"./remote-BYAMMrVX.js";import"./Tooltip-B6HtOUgJ.js";import"./utils-C40myb20.js";import"./OverlayArrow-CD7gdoFk.js";import"./useFocus-DrnrNdFb.js";import"./ProgressBar-DNk1ASVc.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./context-CEC4U_pc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D6UlgZp0.js";import"./useFocusable-m8WXVW9y.js";import"./useFocusRing-DXc99t-B.js";import"./react-children-utilities-yPv0CPC4.js";import"./Action-BJnGojjr.js";import"./context-fizPycLA.js";import"./useStatic-OoNPiP3V.js";import"./browser-wgtkTybB.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./dynamic-BjimB01T.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./Heading-BikOeUcJ.js";import"./Heading-DTo4uMVU.js";import"./RSPContexts-jFJkk-mB.js";import"./InlineCode-yGhOC11N.js";import"./Link-D_huAvzE.js";import"./usePress-Cwz_fpS2.js";import"./Separator-Bo8efYb_.js";import"./Separator-BPOzmHFV.js";import"./CollectionBuilder-IVJxZg8U.js";import"./Text-B4ALgTL8.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./TextArea-CxS5LIvb.js";import"./TextFieldBase-RS_A_YdG.js";import"./FieldDescription-BGaJf4ya.js";import"./useFieldComponent-CR_sI6nz.js";import"./TextField-C51vSSpo.js";import"./FieldError-B8qSKLtD.js";import"./Form-C6LPNxyn.js";import"./Group-BcWNK89K.js";import"./Input-tNtxpliI.js";import"./useTextField-Mn5K0qmA.js";import"./useFormReset-vbhoemIT.js";import"./useFormValidation-gmIFw0Kx.js";import"./useControlledHostValueProps-DAUukQ8V.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CQhA1l2h.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CsPSNcu1.js";import"./ContextMenuSection-Dk8lBhMu.js";import"./Dialog-Bmgfq9R9.js";import"./Collection-CIVuuc0n.js";import"./SelectionIndicator-711mCjj0.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
