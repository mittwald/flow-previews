import{j as r,r as f}from"./iframe-d8TPt7Dq.js";import{M as o}from"./MarkdownEditor-BMftVgb0.js";import{L as R}from"./Label-DUZNK_N3.js";import{F as b}from"./FieldError-Z630sQ-Y.js";import{B as z}from"./Button-CG9B_DsC.js";import{S as x}from"./Section-gs_NZoj_.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-oTkALj7u.js";import"./CodeBlock-BTewNskY.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D6LPvLB1.js";import"./IconWarning-BBwUIuFu.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./remote-DqOJ-OtV.js";import"./Tooltip-yGszJ6IO.js";import"./utils-CQWCrNEN.js";import"./OverlayArrow-DsjdeIno.js";import"./useFocus-Dzzsimxq.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./context-s9WFa2xd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Du7Hq4ap.js";import"./useFocusable-Blyv-8JB.js";import"./useFocusRing-Pl_83XSU.js";import"./react-children-utilities-CVM7s5Om.js";import"./Action-BNptIGGg.js";import"./context-BnRBG3H-.js";import"./useStatic-C-4yNygp.js";import"./browser-Cq89yPle.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./dynamic-q6Z3lF5f.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./Heading-DEdgyyg2.js";import"./Heading-DHpEgmIr.js";import"./RSPContexts-Bn3c_trp.js";import"./InlineCode-BCeQ_52W.js";import"./Link-BAvXncIq.js";import"./usePress-DD6hZDmw.js";import"./Separator-CRxRS0xp.js";import"./Separator-CfU7skaS.js";import"./CollectionBuilder-DWjCGULS.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./TextArea-DVFtUF2z.js";import"./TextFieldBase-CrCDv3B5.js";import"./FieldDescription-CQGlo9YG.js";import"./useFieldComponent-XccPD61N.js";import"./TextField-DzbzMCaM.js";import"./FieldError-D74Rm1AJ.js";import"./Form-bB72J6qo.js";import"./Group-Bs1XJ8tf.js";import"./Input-Cp9jMkj6.js";import"./useTextField-BALSLGms.js";import"./useFormReset-AO5_sbxL.js";import"./useFormValidation-DzABwrGN.js";import"./useControlledHostValueProps-CJz_h5pu.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Dialog-DKAUR0i0.js";import"./Collection-C_DIbhIS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
