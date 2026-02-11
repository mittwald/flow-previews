import{j as r,r as f}from"./iframe-C_YE0yRE.js";import{M as o}from"./MarkdownEditor-PBqPDKXu.js";import{L as R}from"./Label-Bg9ChY99.js";import{F as b}from"./FieldError-DnihSG5_.js";import{B as z}from"./Button-D40FTP7t.js";import{S as x}from"./Section-BWKpbhUe.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BX2i61Bq.js";import"./CodeBlock-BFvfIsni.js";import"./clsx-B-dksMZM.js";import"./CopyButton-YxLMp9Jg.js";import"./IconWarning-Cxe6oNxX.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./remote-C68UFTqR.js";import"./Tooltip-BHjFA-lY.js";import"./utils-DHqPz2V6.js";import"./OverlayArrow-W6M7e9jX.js";import"./useFocus-CNnZns0Y.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./context-BsGh4Cu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BwrpFxJK.js";import"./useControlledState-8IU_97yn.js";import"./useFocusable-CsoKnWSE.js";import"./react-children-utilities-zBCii16W.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./browser-BLJ3u5oR.js";import"./dynamic-DNhRkZnt.js";import"./getActionGroupSlot-C_onwoh9.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./Heading-Bwe8YU0o.js";import"./Heading-BsEG12w_.js";import"./RSPContexts-Bttm1G3N.js";import"./InlineCode-BJKE1DeP.js";import"./Link-DJvldIWm.js";import"./usePress-DNy1k_Tf.js";import"./Separator-BHY_DYho.js";import"./Separator-Wmo2b2bK.js";import"./CollectionBuilder-XRWmKPs0.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./TextArea-BBFXd9wU.js";import"./useFieldComponent-CWA258Fl.js";import"./useControlledHostValueProps-SfwBAvhq.js";import"./FieldDescription-DreGB0lk.js";import"./TextField-CV6LBDwg.js";import"./FieldError-C56-tCSc.js";import"./Form-OCRgsrlm.js";import"./Group-DxmRDWzX.js";import"./Input-BXDRgPwO.js";import"./useTextField-DFuDlfux.js";import"./useFormReset-CEMPEkJX.js";import"./useFormValidation-CAUZ7uHC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";import"./LoadingSpinner-CWKEQFJy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRed6E24.js";import"./ContextMenuSection-DRxdJG8v.js";import"./Dialog-BXH836dM.js";import"./Collection-0o2bfvEG.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./VisuallyHidden-DZpEB13Q.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
