import{j as r,r as f}from"./iframe-l3dQPg2D.js";import{M as o}from"./MarkdownEditor-CB_KHXoz.js";import{L as R}from"./Label-DxyvMbSs.js";import{F as b}from"./FieldError-Q6bz3Uf7.js";import{B as z}from"./Button-CVhESpos.js";import{S as x}from"./Section-CVphuZOP.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-QpPLuSdM.js";import"./CodeBlock-CV_43Gnf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CDPSChIG.js";import"./IconWarning-C2C4Ye1P.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./index-BnwDl3XO.js";import"./remote-VRbYHHBV.js";import"./Tooltip-CRXT4Jo_.js";import"./utils-BpR6PJXM.js";import"./OverlayArrow-BBo0Td8e.js";import"./useFocus-BoIaqFAK.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./context-bJyTUMD1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Sg4LsORI.js";import"./useControlledState-DV6ufSFw.js";import"./useFocusable-CewhyE_c.js";import"./react-children-utilities-6GFkF6Mz.js";import"./Action-BglyJGiG.js";import"./context-BBlsigfO.js";import"./useStatic-BdWyaTNp.js";import"./browser-vgtThTGE.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./dynamic-CCyGrJK3.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./Heading-Cf_VYr3b.js";import"./Heading-D-Y77gHO.js";import"./RSPContexts-D9dFuQ_b.js";import"./InlineCode-DtjHXuX9.js";import"./Link-C3SyFAUG.js";import"./usePress-CLrRc3iw.js";import"./Separator-Df9Wluj-.js";import"./Separator-70ZL6L0X.js";import"./CollectionBuilder-BWIBmgEn.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./TextArea-D5Bo8d9p.js";import"./useFieldComponent-CTh-2D00.js";import"./useControlledHostValueProps-Di36nhEL.js";import"./FieldDescription-DDFYZqNC.js";import"./TextField-BbT6CVIE.js";import"./FieldError-DNTSOotb.js";import"./Form-bbOcDT_r.js";import"./Group-D4YQYKb-.js";import"./Input-AZztYHyS.js";import"./useTextField-4COopty-.js";import"./useFormReset-mKOiKuYb.js";import"./useFormValidation-D7taYq4g.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ContextMenuSection-C_ZfDCN7.js";import"./Dialog-ByCdR2Sm.js";import"./Collection-3pd5EYPv.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
