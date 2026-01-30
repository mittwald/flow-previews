import{j as r,r as f}from"./iframe-K4Kgzs5d.js";import{M as o}from"./MarkdownEditor-BcMmejNM.js";import{L as R}from"./Label-BHhszR2e.js";import{F as b}from"./FieldError-BIdQs2eG.js";import{B as z}from"./Button-CLdF1xvY.js";import{S as x}from"./Section-DhkMhEtB.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BKXCW5Or.js";import"./CodeBlock-CEo8qshj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BEK4EptJ.js";import"./IconWarning-BGpHZy47.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./remote-DgH_DZKx.js";import"./Tooltip-DagZ8Kln.js";import"./utils--XC5cWbY.js";import"./OverlayArrow-70hjzCbF.js";import"./useFocus-CfhKlOoP.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./context-BHsz5d3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B7VfbIok.js";import"./useControlledState-UcCiEhN3.js";import"./useFocusable-H6UpmrOx.js";import"./react-children-utilities-BXss8zWH.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./browser-9MG5lDdh.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./dynamic-d4gvBHma.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./Heading-DvNGAwaU.js";import"./Heading-BKtqva_S.js";import"./RSPContexts-DBQcbxf9.js";import"./InlineCode-DpdLfDPU.js";import"./Link-D8nPfavX.js";import"./usePress-Bsv_-vru.js";import"./Separator-CnXjt8HR.js";import"./Separator-D8C38sqW.js";import"./CollectionBuilder-GLV80gvr.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./TextArea-CX5sLz3C.js";import"./TextFieldBase-BlNkxcpv.js";import"./FieldDescription--zl-7alp.js";import"./useFieldComponent-XDoLqUAT.js";import"./TextField-BaGOsx6X.js";import"./FieldError-CDQ9nLxM.js";import"./Form-BeqJ_QXS.js";import"./Group-BAVjj6lU.js";import"./Input-n3w13r8V.js";import"./useTextField--3HDyD9O.js";import"./useFormReset-Bu0cPn5B.js";import"./useFormValidation-QT1HCjbB.js";import"./useControlledHostValueProps-BXlu5ou0.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Dialog-D9y6Gm5p.js";import"./Collection-BbxJvL2P.js";import"./SelectionIndicator-LfvmrL3H.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
