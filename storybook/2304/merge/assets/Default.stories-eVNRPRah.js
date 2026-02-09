import{j as r,r as f}from"./iframe-DsvUdpXw.js";import{M as o}from"./MarkdownEditor-86xphokD.js";import{L as R}from"./Label-V0M08dzp.js";import{F as b}from"./FieldError-DMawyIiV.js";import{B as z}from"./Button-Bh17vETd.js";import{S as x}from"./Section-DVr7ON9z.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CfP56xk3.js";import"./CodeBlock-B9A_A3NH.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CPvmC3ov.js";import"./IconWarning-DeQxeoQB.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./remote-Bzinmuoi.js";import"./Tooltip-Ij_pUzlc.js";import"./utils-elFy1-Tx.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useFocus-DN2AExbL.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./context-BSJoRVhT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DkxfWW5E.js";import"./useControlledState-HbpZAl0m.js";import"./useFocusable-CD1pLlOX.js";import"./react-children-utilities-z0EZLu3u.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./useStatic-B4i3epQD.js";import"./browser-BtOTkQbR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./dynamic-B-6cr1cE.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./Heading-B52qHDza.js";import"./Heading-BVURhSI-.js";import"./RSPContexts-C2fytUZa.js";import"./InlineCode-CemtTeaj.js";import"./Link-CmpzCeJb.js";import"./usePress-BFT-1ljl.js";import"./Separator-CVKcSQ3e.js";import"./Separator-BomnlaZI.js";import"./CollectionBuilder-CzjqfU1x.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./TextArea-OqZ5dA03.js";import"./useFieldComponent-CWVnpPPS.js";import"./useControlledHostValueProps-CBts7xi2.js";import"./FieldDescription-GkX1e7wK.js";import"./TextField-D9iaV1ub.js";import"./FieldError-S3zhgpi7.js";import"./Form-_ij7bXRe.js";import"./Group-VzCh1Jz3.js";import"./Input-B3qlT_4M.js";import"./useTextField-CImQ85Uo.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ContextMenuSection-CZOOjTrg.js";import"./Dialog-DDWgyAFS.js";import"./Collection-Da99ROgL.js";import"./SelectionIndicator-CDySPjGG.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
