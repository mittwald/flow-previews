import{j as r,r as f}from"./iframe-EUG4rdOg.js";import{M as o}from"./MarkdownEditor-Co12EY7z.js";import{L as R}from"./Label-CkXKJRQj.js";import{F as b}from"./FieldError-D_yigqvG.js";import{B as z}from"./Button-CEake6G1.js";import{S as x}from"./Section-BL7lUYfi.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BRlGP3ld.js";import"./CodeBlock-ChJu_Xz2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BoKfbAWe.js";import"./IconWarning-CN_aXaJM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./remote-Bl5KctCq.js";import"./Tooltip-CExrcI7T.js";import"./utils-DJPQq0Ir.js";import"./OverlayArrow-D1DBrKZH.js";import"./useFocus-Ca80QzG_.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./context-DxYQrQkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-pMATsfPY.js";import"./useControlledState-DorIVmrH.js";import"./useFocusable-YuTP7Rcp.js";import"./react-children-utilities-C7IwA1_i.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./browser-Dr5hWFfi.js";import"./getActionGroupSlot-nY47Clec.js";import"./dynamic-B-NoN6qZ.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./Heading-Bi7E6SrE.js";import"./Heading-DsDU_kOR.js";import"./RSPContexts-DeOxvpD0.js";import"./InlineCode-hCrc5VlO.js";import"./Link-DH1Vm4ZB.js";import"./usePress-CyxS_pZ-.js";import"./Separator-MTFfyjAY.js";import"./Separator-Hxx-CpzA.js";import"./CollectionBuilder-B2OL-l6X.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";import"./TextArea-DzOV-NFu.js";import"./TextFieldBase-CMhkNfPL.js";import"./FieldDescription-CfDsKzz3.js";import"./useFieldComponent-Bs969hQl.js";import"./TextField-USkkGb9p.js";import"./FieldError-CVa256dc.js";import"./Form-DdP99ZP3.js";import"./Group-BRdCtfwm.js";import"./Input-BJHxReEX.js";import"./useTextField-DlJ5_TSW.js";import"./useFormReset-BWBNxDQ8.js";import"./useFormValidation-OWtbzU_T.js";import"./useControlledHostValueProps-CMq5JcbC.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ContextMenuSection-BWaZOiqV.js";import"./Dialog-ClYDKCvQ.js";import"./Collection-D08qzwe9.js";import"./SelectionIndicator-CBEc_uRa.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./VisuallyHidden-DwLUyGt6.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
