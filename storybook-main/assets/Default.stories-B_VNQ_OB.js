import{j as r,r as f}from"./iframe-B2CTi6cm.js";import{M as o}from"./MarkdownEditor-DxIMN3N6.js";import{L as R}from"./Label-DccH0oyj.js";import{F as b}from"./FieldError-Cpb_w0Fh.js";import{B as z}from"./Button-_yLWek3e.js";import{S as x}from"./Section-Cp9Lc84Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CCgyeiJv.js";import"./CodeBlock-Y4SneHao.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CmorkDKb.js";import"./IconWarning-hrUSNLB1.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./remote-C6QTRNf9.js";import"./Tooltip-BGjaG0Kl.js";import"./utils-CFhs-kxq.js";import"./OverlayArrow-8rub2gpn.js";import"./useFocus-iUa6wpVM.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./context-DlyTwf6g.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-G6UDZPL7.js";import"./useControlledState-D4tpAkeT.js";import"./useFocusable-DeW7JE_I.js";import"./react-children-utilities-cUpceFeE.js";import"./ActionBatch-BYvDqB3T.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./browser-Cn-sjrEd.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./dynamic-CQSnLDrl.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./Heading-DlmM6Hn_.js";import"./Heading-C9cKQsqE.js";import"./RSPContexts-BnlNRtVT.js";import"./InlineCode-DsVWuPYG.js";import"./Link-BI0SHCIC.js";import"./usePress-CXOW9Qje.js";import"./Separator-VoE0olQ0.js";import"./Separator-Dt0DKQRS.js";import"./CollectionBuilder-2L-4enMQ.js";import"./Text-4QTNuVgz.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./TextArea-CHEow88E.js";import"./useFieldComponent-DO-gEAYc.js";import"./useControlledHostValueProps-ClUMTGdq.js";import"./FieldDescription-Cp3TAr2a.js";import"./TextField-DfcZqbUi.js";import"./FieldError-Cj-zQd3o.js";import"./Form-Cx6Bm7Pi.js";import"./Group-Dv7pzL4P.js";import"./Input-KDCOY3Ar.js";import"./useTextField-BalQ2GqF.js";import"./useFormReset-BMX0RNLQ.js";import"./useFormValidation-BDHhHN4L.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";import"./LoadingSpinner-DnfUZyUE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0k2tyOZn.js";import"./ContextMenuSection-DUei6bL0.js";import"./Dialog-D2pl7IFn.js";import"./Collection-T1sKmHBq.js";import"./SelectionIndicator-BHeVA0_4.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
