import{j as r,r as f}from"./iframe-B6FtZzVw.js";import{M as o}from"./MarkdownEditor-0JuUnq6k.js";import{L as R}from"./Label-gGsAWD9A.js";import{F as b}from"./FieldError-CuRjPN5X.js";import{B as z}from"./Button-HJgKWCOC.js";import{S as x}from"./Section-D0pkBsBP.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C4mEFznF.js";import"./CodeBlock-BEbavtf-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D1C3O4a4.js";import"./IconWarning-DEHpO9Uw.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./remote-B6WYv1J0.js";import"./Tooltip-ClhjPAxm.js";import"./utils-B053wNrY.js";import"./OverlayArrow-SzptHD46.js";import"./useFocus-DnpGAVhn.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./context-D8VymAHE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ByagjwsX.js";import"./useFocusable-CPP8dzW4.js";import"./useFocusRing-C0rO9rWF.js";import"./react-children-utilities-DJRC7dOa.js";import"./Action-BQfBXJkE.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./browser-D2cTR9e8.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./dynamic-HxtCVU2-.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./Heading-DVq--lVl.js";import"./Heading-BVLRlyN8.js";import"./RSPContexts-Drji9jIz.js";import"./InlineCode-DwsKPlkW.js";import"./Link-CSToEYYe.js";import"./usePress-Bff_bCDv.js";import"./Separator-De3EoXd3.js";import"./Separator-CFp2GX75.js";import"./CollectionBuilder-D0uz5fgl.js";import"./Text-DPYEhwNL.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./TextArea-hj85icXk.js";import"./TextFieldBase-Iq-X5kUF.js";import"./FieldDescription-DCDO5HYP.js";import"./useFieldComponent-BNMXDSB6.js";import"./TextField-E2CN27aG.js";import"./FieldError-BtAF49NH.js";import"./Form-CujqqqIN.js";import"./Group-Vwt0vhiT.js";import"./Input-CxAJMr-1.js";import"./useTextField-DaLyIGOE.js";import"./useFormReset-CRRhvvtY.js";import"./useFormValidation-C7j9z4Fo.js";import"./useControlledHostValueProps-CYn0S2kn.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DXuLs3WE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJB2g2P-.js";import"./ContextMenuSection-Hdwk65mt.js";import"./Dialog-CxhUJg_S.js";import"./Collection-queVBp1u.js";import"./SelectionIndicator-DqsRzLxq.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
