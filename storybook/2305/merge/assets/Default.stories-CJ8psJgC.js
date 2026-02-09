import{j as r,r as f}from"./iframe-nlVW-CPZ.js";import{M as o}from"./MarkdownEditor-BQ1ghN6b.js";import{L as R}from"./Label-BuWy1qrT.js";import{F as b}from"./FieldError-C-5FG0Dy.js";import{B as z}from"./Button-_Sn69Jgj.js";import{S as x}from"./Section-BCmWc09Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C6InYnN2.js";import"./CodeBlock-DYP69y2B.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0dn9_Da.js";import"./IconWarning-VZ7ITFqu.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./remote-D3GclicH.js";import"./Tooltip-DQ-xB6OR.js";import"./utils-CyuEFqip.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useFocus-CD1ZzMvo.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./context-CIGB7i0H.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./useFocusable-DHxyzauV.js";import"./react-children-utilities-DO_39U4f.js";import"./Action-VhJyCQWd.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./browser-BoEfPalF.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./dynamic-Dsm5lbml.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./Heading-BvsEXDXR.js";import"./Heading-Bfj0TRqM.js";import"./RSPContexts-DlUCcPRc.js";import"./InlineCode-C9fI8WmE.js";import"./Link-Dyc1bKEd.js";import"./usePress-BSHzPeES.js";import"./Separator-B6UqAx3D.js";import"./Separator-Ei4AiFvo.js";import"./CollectionBuilder-BC18ROL9.js";import"./Text-BzuDjaz9.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./TextArea-gUMmQRfu.js";import"./useFieldComponent-DOzg870F.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./FieldDescription-a2tRS2_K.js";import"./TextField-D0tY8Qlz.js";import"./FieldError-BpjEpOFY.js";import"./Form-DSPAlIu9.js";import"./Group-w-lYdjjN.js";import"./Input-BlMpicf_.js";import"./useTextField-C4USa82P.js";import"./useFormReset-J8eUPjf8.js";import"./useFormValidation-DqSMo-uw.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Dialog-zXGOOBEm.js";import"./Collection-VsHvURZ5.js";import"./SelectionIndicator-DdhOYUUY.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
