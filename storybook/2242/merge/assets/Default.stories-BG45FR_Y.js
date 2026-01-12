import{j as r,r as f}from"./iframe-Ca6Y6Qbd.js";import{M as o}from"./MarkdownEditor-DiAVFaSg.js";import{L as R}from"./Label-BiOSulbp.js";import{F as b}from"./FieldError-Btuc_7Om.js";import{B as z}from"./Button-Cmpvhu71.js";import{S as x}from"./Section-DDmZgP0d.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DMWHQA1D.js";import"./CodeBlock-dcaBLaey.js";import"./clsx-B-dksMZM.js";import"./CopyButton-2yvuXCsL.js";import"./IconWarning-DE1Emhrq.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./remote-B__m5VQE.js";import"./Tooltip-DErBWCpz.js";import"./utils-CgPiupY7.js";import"./OverlayArrow-BonLfIYe.js";import"./useFocus-YlOppDM-.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./context-BSVjMcq9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CsFJYMR6.js";import"./useFocusable-DsA9Nlin.js";import"./useFocusRing-DB26dgIQ.js";import"./react-children-utilities-CEtYI3ik.js";import"./Action-BHbL3yoQ.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./browser-CbMIui3y.js";import"./getActionGroupSlot-DZQMPipw.js";import"./dynamic-CaH7ifbO.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./Heading-CiyOEL28.js";import"./Heading-CtfKFM99.js";import"./RSPContexts-CuMU_eQB.js";import"./InlineCode-B98Ik3r-.js";import"./Link-C_0R8BFo.js";import"./usePress-7njUzVdk.js";import"./Separator-BrJRLXAd.js";import"./Separator-BkDE-Ve8.js";import"./CollectionBuilder-CQicpO9a.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./TextArea-Cb6ram0g.js";import"./TextFieldBase-D7wBoc66.js";import"./FieldDescription-CPhIvjGD.js";import"./useFieldComponent-Drxg4ucu.js";import"./TextField-Dn0ILkoc.js";import"./FieldError-DTh-affr.js";import"./Form-DvyEl8-X.js";import"./Group-DMrJjXdW.js";import"./Input-zU6xkduX.js";import"./useTextField-DJ9r6KnP.js";import"./useFormReset-QXLzcWbc.js";import"./useFormValidation-CFRjiWi1.js";import"./useControlledHostValueProps-DPBYxvo9.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BwNAbkAI.js";import"./ContextMenuSection-Dxs1x_rP.js";import"./Dialog-B1e_uHMT.js";import"./Collection-C7E6DkxT.js";import"./SelectionIndicator-Cqdhise0.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
