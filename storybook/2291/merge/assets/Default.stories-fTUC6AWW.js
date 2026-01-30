import{j as r,r as f}from"./iframe-CGL3Ztd8.js";import{M as o}from"./MarkdownEditor-pmlfOtCp.js";import{L as R}from"./Label-BdVzzMHl.js";import{F as b}from"./FieldError-Bg6s6kv2.js";import{B as z}from"./Button-CdFi_Gvp.js";import{S as x}from"./Section-DahycNJE.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BX5F2Od8.js";import"./CodeBlock-DdtRpuR4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-vr5wLNVD.js";import"./IconWarning-CMBZCdTm.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./remote-DEzwzibY.js";import"./Tooltip-D5v70f9s.js";import"./utils-BPLHaINM.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useFocus-XDda6gbt.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./context-BN4qQIb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BtxSiiWP.js";import"./useControlledState-DjoZo3jd.js";import"./useFocusable-MZ2jhLFm.js";import"./react-children-utilities-CVehgo2M.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./browser-Dk-cIrUN.js";import"./getActionGroupSlot-D2X8q845.js";import"./dynamic-C8bvHICk.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./Heading-DBE0Oj6w.js";import"./Heading-CeHJVvL3.js";import"./RSPContexts-Dbu6eLkb.js";import"./InlineCode-C5U9oshX.js";import"./Link-CU2-FrDI.js";import"./usePress-BpWTOkQr.js";import"./Separator-DMDd2Jzo.js";import"./Separator-CQ2yo0aI.js";import"./CollectionBuilder-DX9xRdaS.js";import"./Text-_sa0OuU0.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./TextArea-dbtqo4IG.js";import"./useFieldComponent-CHIggLRE.js";import"./useControlledHostValueProps-DHO1n_5T.js";import"./FieldDescription-DTkn5Gpa.js";import"./TextField-Cye5nWIo.js";import"./FieldError-CZz7QnF8.js";import"./Form-Ba7VKjcY.js";import"./Group-DH03d5g8.js";import"./Input-CtqQGuCR.js";import"./useTextField-CwFUpzxX.js";import"./useFormReset-C_UBUwcF.js";import"./useFormValidation-DhAeSygX.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ContextMenuSection-DZtKonlo.js";import"./Dialog-D5rIpj4K.js";import"./Collection-De-gN1c8.js";import"./SelectionIndicator-CKCmLDiO.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
