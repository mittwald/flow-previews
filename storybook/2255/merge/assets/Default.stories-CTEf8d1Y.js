import{j as r,r as f}from"./iframe-DEsugzBP.js";import{M as o}from"./MarkdownEditor-BlQ2s_1y.js";import{L as R}from"./Label-DyIqFkt_.js";import{F as b}from"./FieldError-D0RH6F7V.js";import{B as z}from"./Button-Bh57nksp.js";import{S as x}from"./Section-Xyeq4Po7.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C4YtiPt8.js";import"./CodeBlock-Byugr8bM.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BhhcFDqr.js";import"./IconWarning-qDYXGw-D.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./remote-Bm53ArvY.js";import"./Tooltip-BQk7L_q7.js";import"./utils-k3goWFVI.js";import"./OverlayArrow-CBh5kmtO.js";import"./useFocus-B3AZuBYY.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./context-BA9NBDMH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dcr_irR6.js";import"./useFocusable-Bwqhhmq3.js";import"./useFocusRing-DuZx28fv.js";import"./react-children-utilities-B-Xj5fEX.js";import"./Action-DUjscWwq.js";import"./context-20QbnAW8.js";import"./useStatic-BMQe5ifs.js";import"./browser-DSOUTdOR.js";import"./getActionGroupSlot-d_28ev7h.js";import"./dynamic-FU-wbqWq.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./Heading-Di_kcqRZ.js";import"./Heading-B1qRR7lK.js";import"./RSPContexts-BS5BTC1y.js";import"./InlineCode-MGDioMZT.js";import"./Link-DfJDbkJP.js";import"./usePress-CsaWzeZC.js";import"./Separator-CdW-ptoP.js";import"./Separator-DPTgStgW.js";import"./CollectionBuilder-CkaEUbci.js";import"./Text-CGG2whlc.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./TextArea-BkFPZR8a.js";import"./TextFieldBase-IGnJlx4a.js";import"./FieldDescription-DsSfVktg.js";import"./useFieldComponent-CoV9Rbdv.js";import"./TextField-DZ6i9AsT.js";import"./FieldError-DL7mdN7X.js";import"./Form-BBNX_R9o.js";import"./Group-LEKqTwAp.js";import"./Input-B5rLIpjG.js";import"./useTextField-D6Qak1On.js";import"./useFormReset-D1Ly9aDH.js";import"./useFormValidation-DCx77s5O.js";import"./useControlledHostValueProps-CB-rODEV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-exCq-2.js";import"./ContextMenuSection-EcetDiW1.js";import"./Dialog-B0UO0Xtu.js";import"./Collection-YQKIf0Qf.js";import"./SelectionIndicator-BsQYAog2.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./VisuallyHidden-DVFgokJG.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
