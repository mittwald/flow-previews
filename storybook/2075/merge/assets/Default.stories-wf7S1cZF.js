import{j as r,r as f}from"./iframe-QQgxjfU-.js";import{M as o}from"./MarkdownEditor-CkYXybN9.js";import{L as R}from"./Label-TUk01fEf.js";import{F as z}from"./useFieldComponent-B5mMljfV.js";import{B as b}from"./Button-BWu_s2A1.js";import{S as x}from"./Section-DXb3tH7e.js";import"./index-nuYtCEEu.js";import"./Markdown-krxBRc5F.js";import"./CodeBlock-CFw_oBS9.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DVNia6QF.js";import"./IconWarning-CSQYjrC1.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./Tooltip-DvjUvLQa.js";import"./ClearPropsContextView-DUKOvykV.js";import"./ClearPropsContext-C1xOcMSE.js";import"./utils-DhA81qjX.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useFocus-0cMRA2DE.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BVJbXyTi.js";import"./context-CRx6Bs8B.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CkoNAxF1.js";import"./useFocusable-ClkP-4lm.js";import"./useFocusRing-UOKs1Fh8.js";import"./react-children-utilities-2-HBtGkG.js";import"./Action-DetrUASE.js";import"./context-C73KBwIX.js";import"./useStatic-B5jRDwsJ.js";import"./browser-CvCNE6Dh.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./dynamic-BjF6TIyL.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./Heading-BhecTOma.js";import"./Heading-SF4sVKWG.js";import"./RSPContexts-CsH1Ib1c.js";import"./InlineCode-BALWxWrF.js";import"./Link-B57fKZbB.js";import"./usePress-BIrX7kgo.js";import"./Separator-j4RnqhJJ.js";import"./Separator-BjOsH73i.js";import"./CollectionBuilder-8HmDsnbK.js";import"./Text-CRs-OO-e.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Text-D_WC5Uss.js";import"./TextArea-Cd8V1kLr.js";import"./TextFieldBase-1UDxpFo8.js";import"./FieldDescription-ByaGBmYT.js";import"./TextField-Cw982LxM.js";import"./Form-w-Aai7lh.js";import"./Group-fEBq4Exh.js";import"./Input-BMf7xRQe.js";import"./useTextField-CzPGIxLo.js";import"./useFormReset-C3QpCCH-.js";import"./useFormValidation-CrlfASAQ.js";import"./ReactAriaControlledValueFix-1vIdF7qI.js";import"./useManagedValue-CZ4gg3S2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DsHmX75T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D9YKuqRT.js";import"./ContextMenuSection-BZb_tlaR.js";import"./Dialog-D5kgP22k.js";import"./Collection-BHgWnzFo.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
