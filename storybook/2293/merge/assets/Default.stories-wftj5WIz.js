import{j as r,r as f}from"./iframe-bYrN4iqU.js";import{M as o}from"./MarkdownEditor-Co0Rw3By.js";import{L as R}from"./Label-CPmhF0es.js";import{F as b}from"./FieldError-DELvRCSS.js";import{B as z}from"./Button-BXFpqU-p.js";import{S as x}from"./Section-K4GUZgJE.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CGxJqPHz.js";import"./CodeBlock-Db-KacP3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CxGTlA4y.js";import"./IconWarning-m_DFVeXI.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./remote-zHy9wvpL.js";import"./Tooltip-BZOLJrl9.js";import"./utils-B3voqzat.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useFocus-DIDqk3LI.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./context-Hrlbzros.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D4lo4_Zr.js";import"./useControlledState-hBcxnaS2.js";import"./useFocusable-fXM7Y9pN.js";import"./react-children-utilities-DFfxOLWp.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./browser-CHbB-bBA.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./dynamic-CHbvz_qx.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./Heading-tEMYcZaF.js";import"./Heading-CY9qodVf.js";import"./RSPContexts-CblVL1A7.js";import"./InlineCode-7Jt6-up7.js";import"./Link-DPWKKiRI.js";import"./usePress-CHP3pRkH.js";import"./Separator-Diqeq5uG.js";import"./Separator-CVohJStV.js";import"./CollectionBuilder-B7QPPD_O.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./TextArea-Dr95tFgm.js";import"./useFieldComponent-CM1iSrAB.js";import"./useControlledHostValueProps-BerRKa1k.js";import"./FieldDescription-toQACF4D.js";import"./TextField-D0DOtFtH.js";import"./FieldError-BBcT2nDa.js";import"./Form-RNfZ8NGW.js";import"./Group-g7yR8ljX.js";import"./Input-DaDcKDBm.js";import"./useTextField-Cf3_UQe0.js";import"./useFormReset-Cb31B_gj.js";import"./useFormValidation-CAwH-_ip.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Dialog-CxLv1-pk.js";import"./Collection-k_p8jiFF.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
