import{j as r,r as f}from"./iframe-BUX4ZqHF.js";import{M as o}from"./MarkdownEditor-BBC8SRG6.js";import{L as R}from"./Label-kgnV-RXM.js";import{F as b}from"./FieldError-BcNphJCj.js";import{B as z}from"./Button-BQks1Fwk.js";import{S as x}from"./Section-DIg16xJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BiQWZBMN.js";import"./CodeBlock-HKBAL2kB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C4gWRz4x.js";import"./IconWarning-CQ3vdTUk.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./remote-CM65cF_Q.js";import"./Tooltip-D3oHsFSE.js";import"./utils-D9iTInv6.js";import"./OverlayArrow-BDz2U1dX.js";import"./useFocus-CJRF0W0a.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./context-DdyqVFXP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CgyNYXn6.js";import"./useFocusable-CNxG1VTZ.js";import"./useFocusRing-LYLGckDp.js";import"./react-children-utilities-CeybMn12.js";import"./Action-BoSxlb-x.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./browser-D0x3Xdqp.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./dynamic-C-JL21_Y.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./Heading-CZDnCkj5.js";import"./Heading-Dcla-H3e.js";import"./RSPContexts-CCyvn2fa.js";import"./InlineCode-CrKdXkzG.js";import"./Link-CRkcacII.js";import"./usePress-DqXzXpsh.js";import"./Separator-IJOoZkb8.js";import"./Separator-DMMpEXgu.js";import"./CollectionBuilder-CBbbBxBU.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./TextArea-D4qCnf0f.js";import"./TextFieldBase-C2uiKztE.js";import"./FieldDescription-DA8sVKuh.js";import"./useFieldComponent-L2xw4dQD.js";import"./TextField-nAzC6DdA.js";import"./FieldError-DwISghd1.js";import"./Form-Dyklbi3v.js";import"./Group-DB1vfutX.js";import"./Input-Dt9-alkO.js";import"./useTextField-DrmwD8Vx.js";import"./useFormReset-DwYjTvSA.js";import"./useFormValidation-CdmTUY1H.js";import"./useControlledHostValueProps-BQgkkibT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";import"./LoadingSpinner-DAzOOzOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cH5OT2.js";import"./ContextMenuSection-B-plY6qU.js";import"./Dialog-Ds9eM6L5.js";import"./Collection-J1EtBqZM.js";import"./SelectionIndicator-C49t11ym.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
