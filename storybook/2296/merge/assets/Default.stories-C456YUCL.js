import{j as r,r as f}from"./iframe-ByQojKkA.js";import{M as o}from"./MarkdownEditor-DtQDLdkF.js";import{L as R}from"./Label-zx0kmle1.js";import{F as b}from"./FieldError-Dl1gROKX.js";import{B as z}from"./Button-DG0b__xZ.js";import{S as x}from"./Section-C0tACEzy.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BTozfspl.js";import"./CodeBlock-GP6WvuDM.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Ds4qRFRE.js";import"./IconWarning-tVGTIzEo.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./remote-CpbK9d4g.js";import"./Tooltip-PMuvtFoA.js";import"./utils-D3Fm7Ut8.js";import"./OverlayArrow-CZRwwumO.js";import"./useFocus-CIqVesE-.js";import"./ProgressBar-bE4oj_9I.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./context-B2MAxUi3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D8JCvm1f.js";import"./useControlledState-CdOFY_9U.js";import"./useFocusable-BRqzZMJF.js";import"./react-children-utilities-Dz56Yz2y.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./useStatic-ClNGpIKI.js";import"./browser-BgQK0KeO.js";import"./getActionGroupSlot-D7PQruO1.js";import"./dynamic-G0P_JzfN.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./Heading-Cbba3Zbx.js";import"./Heading-CW6fzv-T.js";import"./RSPContexts-au40D8o8.js";import"./InlineCode-HJvn6xb-.js";import"./Link-QzLuDxqX.js";import"./usePress-BwnADfjY.js";import"./Separator-5dfmtVeW.js";import"./Separator-CVlXOjLN.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./TextArea-CdH4iHRZ.js";import"./TextFieldBase-xcr1bPfN.js";import"./FieldDescription-BpqjIUfK.js";import"./useFieldComponent-Blt-XhY9.js";import"./TextField-CcXXYOcL.js";import"./FieldError-DskIGmIg.js";import"./Form-Cffumk9C.js";import"./Group-CNDS5EKI.js";import"./Input-qfXo-HDb.js";import"./useTextField-C_dLnkiz.js";import"./useFormReset-CjuTJ3ym.js";import"./useFormValidation-DiyC9X3o.js";import"./useControlledHostValueProps-lUs8Ao02.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ContextMenuSection-6SzjTnwS.js";import"./Dialog-B4qMOx1Z.js";import"./Collection-B7VbOrxo.js";import"./SelectionIndicator-Bd5_QITD.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
