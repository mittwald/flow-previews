import{j as r,r as f}from"./iframe-CaMmm6JB.js";import{M as o}from"./MarkdownEditor-BJ4yt6UV.js";import{L as R}from"./Label-7z5ZqOim.js";import{F as b}from"./FieldError-gBRSHyIP.js";import{B as z}from"./Button-Ccdb4ZyB.js";import{S as x}from"./Section-z5Dz65CL.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DnT3RmI_.js";import"./CodeBlock-BkBzAyW2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CaWC6c4X.js";import"./IconWarning-CjIU5uAw.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./remote-B2IWJRNM.js";import"./Tooltip-Dc9CQwro.js";import"./utils-BWel_6vJ.js";import"./OverlayArrow-BudvLkgn.js";import"./useFocus-CsmVawkN.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./context-COlkIlq2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D0nVGfyc.js";import"./useControlledState-DS3iWteE.js";import"./useFocusable-D5loONxI.js";import"./react-children-utilities-Cq_ggl1Z.js";import"./ActionBatch-Q41d4eeq.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./browser-DBmSqQ-l.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./dynamic-CCT0rfWD.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./RSPContexts-HzcDbyvj.js";import"./InlineCode-B68IMgG9.js";import"./Link-DkYjPJkt.js";import"./usePress-Bq52eadg.js";import"./Separator-Dvuu9VXQ.js";import"./Separator-Du64Ymo6.js";import"./CollectionBuilder-2gYZy5f8.js";import"./Text-BytpHB1v.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./TextArea-kEU1UQ0W.js";import"./useFieldComponent-l9GEjfOW.js";import"./useControlledHostValueProps-CqHjqxx6.js";import"./FieldDescription-ZK4hQ0pT.js";import"./TextField-CfcKWnss.js";import"./FieldError-rN2a2i1l.js";import"./Form-DUaYRZYC.js";import"./Group-CbQ0bY4b.js";import"./Input-BR-ykejl.js";import"./useTextField-Cus2TleU.js";import"./useFormReset-B22K348z.js";import"./useFormValidation-BBrrlMUS.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";import"./LoadingSpinner-D3IBMWR2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Br8oe_nB.js";import"./ContextMenuSection-CGa5WiYd.js";import"./Dialog-YsZQ1_o0.js";import"./Collection-YKpSfmi_.js";import"./SelectionIndicator-C8xVf-92.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
