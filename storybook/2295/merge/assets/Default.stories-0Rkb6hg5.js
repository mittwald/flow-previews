import{j as r,r as f}from"./iframe-D016uj-S.js";import{M as o}from"./MarkdownEditor-BQTwD2RM.js";import{L as R}from"./Label-CPn02_Ye.js";import{F as b}from"./FieldError-CW77VWgH.js";import{B as z}from"./Button-DbVylex6.js";import{S as x}from"./Section-DP_5z26A.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DZeJgqiJ.js";import"./CodeBlock-f1M5b3ci.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cq7Pf1bI.js";import"./IconWarning-BQBcHsun.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./index-BqMc4IgT.js";import"./remote-CBH6kE0Y.js";import"./Tooltip-B4KB5uDA.js";import"./utils-DQASSsuC.js";import"./OverlayArrow-BzkfNGFW.js";import"./useFocus-tZAxz16O.js";import"./ProgressBar-CXPYtOXa.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DeeX-PEx.js";import"./context-CQQzrfiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BdU2-3MK.js";import"./useControlledState-cpMkF7RC.js";import"./useFocusable-DeuIjFJe.js";import"./react-children-utilities-CFM5VdOd.js";import"./Action-DF_37S4W.js";import"./context-BESBZ1Rk.js";import"./useStatic-Bbhetyj1.js";import"./browser-DLaO_aqG.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./dynamic-7WCHGigE.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./Heading-DfZlNpH0.js";import"./Heading-CKF5Rm78.js";import"./RSPContexts-CjK5iojx.js";import"./InlineCode-BY17Zc2m.js";import"./Link-6VlT22uZ.js";import"./usePress-CVzN9kXH.js";import"./Separator-BWuH93o-.js";import"./Separator-ByOk2cbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./Text-BZY8Sc_P.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./Text-DsGfukAy.js";import"./TextArea-BguoAXFb.js";import"./TextFieldBase-BlTIa7ut.js";import"./FieldDescription-B9DziDuG.js";import"./useFieldComponent-OnEMgUvv.js";import"./TextField-BhttkRNn.js";import"./FieldError-Db3WFp2b.js";import"./Form-BRCZloZz.js";import"./Group-As-Z9rJl.js";import"./Input-CMqHHcBD.js";import"./useTextField-DnmobBsh.js";import"./useFormReset-BG0U5_Pu.js";import"./useFormValidation-Cq6iPNGO.js";import"./useControlledHostValueProps-DmuvA75-.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-0Z7TF0Nn.js";import"./AlertIcon-DUg_mU1Z.js";import"./LoadingSpinner-Dcve79PX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cna7ldBx.js";import"./ContextMenuSection-eBZWNBFV.js";import"./Dialog-ptAcXQW8.js";import"./Collection-BcXzzjbm.js";import"./SelectionIndicator-BhBccG1G.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./useCollator-JAzbZwM3.js";import"./FocusScope-DtVgD18c.js";import"./VisuallyHidden-D5-LZtaI.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
