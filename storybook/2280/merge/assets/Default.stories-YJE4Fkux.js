import{j as r,r as f}from"./iframe-BE2KIrNP.js";import{M as o}from"./MarkdownEditor-5wNoOE6s.js";import{L as R}from"./Label-BBYAWH-Z.js";import{F as b}from"./FieldError-DLWZre89.js";import{B as z}from"./Button-DTG6_onu.js";import{S as x}from"./Section-Bmw4NyfW.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D5RJNmBa.js";import"./CodeBlock-CzwYfUZF.js";import"./clsx-B-dksMZM.js";import"./CopyButton-2OUInVSA.js";import"./IconWarning-pheKtU5F.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./remote-BDPI1xTN.js";import"./Tooltip-x26d8Z3r.js";import"./utils-CetDBScY.js";import"./OverlayArrow-B7hxVbyO.js";import"./useFocus-D19rPtJ7.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./context-Cl9Jg8XT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CXSA7vN6.js";import"./useControlledState-O9ITVI5k.js";import"./useFocusable-PS7GdwKW.js";import"./react-children-utilities-DEl2g9ZF.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./browser-B5VZQlUE.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./dynamic-DKw0AuDc.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./Heading-C03aqcaL.js";import"./Heading-CDAU15CX.js";import"./RSPContexts-B5Mb9Vey.js";import"./InlineCode-B2NOmgTO.js";import"./Link-DFoDqMYl.js";import"./usePress-wlnUrUkL.js";import"./Separator-BgVrJWWb.js";import"./Separator-kwAL4EyO.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./TextArea-qoyZc2ni.js";import"./TextFieldBase-gNnB3C6f.js";import"./FieldDescription-B7Q7zUwA.js";import"./useFieldComponent-8fOA-m-u.js";import"./TextField-W3j8ZdtU.js";import"./FieldError-CYuYbE_Y.js";import"./Form-7VWdSJkH.js";import"./Group-BgqvKisC.js";import"./Input-lgtpKVFw.js";import"./useTextField-BkiiDUW1.js";import"./useFormReset-DGFO0EL0.js";import"./useFormValidation-BVWNV9RZ.js";import"./useControlledHostValueProps-BjkpzwSM.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ContextMenuSection-DMoRGuCw.js";import"./Dialog-C3P1Ogqg.js";import"./Collection-Bn556UVc.js";import"./SelectionIndicator-B0iQvxUu.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./VisuallyHidden-KypC6JrD.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
