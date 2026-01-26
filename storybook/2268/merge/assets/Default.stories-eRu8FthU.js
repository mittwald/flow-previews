import{j as r,r as f}from"./iframe-B-_izELn.js";import{M as o}from"./MarkdownEditor-BbPU9Dof.js";import{L as R}from"./Label-xN0BMhRq.js";import{F as b}from"./FieldError-C2OlbqQW.js";import{B as z}from"./Button-rB1lHab_.js";import{S as x}from"./Section-BEewp5lM.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BgVlLAKC.js";import"./CodeBlock-BuIL5L2j.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ByCStsSO.js";import"./IconWarning-DXXSRvhn.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./remote-DY2XWwFP.js";import"./Tooltip-DmrzTt2y.js";import"./utils-CTzaLK4l.js";import"./OverlayArrow-C1kYwcM3.js";import"./useFocus-BKzgn786.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./context-CP_ivtNk.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-tdUQVzVH.js";import"./useFocusable-I-aSrCr_.js";import"./useFocusRing-DHjGYA3Q.js";import"./react-children-utilities-z83JSavt.js";import"./Action-CmZvSofW.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./browser-C9rDHpHO.js";import"./getActionGroupSlot-DlereTwl.js";import"./dynamic-bdsqC1kS.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./Heading-BAMsaaGA.js";import"./Heading-DVKq7Ots.js";import"./RSPContexts-k_uvwm8O.js";import"./InlineCode-Btws5fwm.js";import"./Link-bJ7V2ojH.js";import"./usePress-CDCEcfQ2.js";import"./Separator-BlqSgaz1.js";import"./Separator-xctm41Qr.js";import"./CollectionBuilder-C9MyseWf.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./TextArea-CXL4L4bI.js";import"./TextFieldBase-VzMWu6Xc.js";import"./FieldDescription-Bm61smCN.js";import"./useFieldComponent-Kyt2SdHG.js";import"./TextField-BAIaIFS9.js";import"./FieldError-2QNeUIGm.js";import"./Form-CwweEOY6.js";import"./Group-CL4KrlTp.js";import"./Input-Ch7XH0d5.js";import"./useTextField-BA5-wrv-.js";import"./useFormReset-BUoUtOhQ.js";import"./useFormValidation-d7hQTD7K.js";import"./useControlledHostValueProps-DNK8lF1k.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ContextMenuSection-Cd3ymo9B.js";import"./Dialog-C6Hf8kgU.js";import"./Collection-BlKc58PT.js";import"./SelectionIndicator-ey4emqqq.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
