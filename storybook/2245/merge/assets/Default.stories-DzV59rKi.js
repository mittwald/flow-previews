import{j as r,r as f}from"./iframe-YnzBkBP1.js";import{M as o}from"./MarkdownEditor-BWYDgqt2.js";import{L as R}from"./Label-F32H6fZQ.js";import{F as b}from"./FieldError-CkABddBr.js";import{B as z}from"./Button-BvFsSv02.js";import{S as x}from"./Section-BF-oFw9b.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DVKBbqpr.js";import"./CodeBlock-Dhuy7upk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C8It_VyC.js";import"./IconWarning-CfrgrK5w.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./remote-psJ_k7Km.js";import"./Tooltip-B-vVGHNa.js";import"./utils-CRkRQkMM.js";import"./OverlayArrow--71CUfvh.js";import"./useFocus-CEJfh5Ox.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./context-Dc351FW_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DwL8StHF.js";import"./useFocusable-BIzKoTBr.js";import"./useFocusRing-B9e_t0Os.js";import"./react-children-utilities-D2pMJJ93.js";import"./Action-DDQNlr1F.js";import"./context-CGFBFC28.js";import"./useStatic-9o3ywd_N.js";import"./browser-Sf85iaAd.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./dynamic-DAiG6Vmq.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./Heading-BiUnALLM.js";import"./Heading-ChrBU0Of.js";import"./RSPContexts-Mp6syAgQ.js";import"./InlineCode-D1j5b_c0.js";import"./Link-DQ0PSomW.js";import"./usePress-NgaP4MvP.js";import"./Separator-DH8bSJzl.js";import"./Separator-h_x_t96Z.js";import"./CollectionBuilder-DNUE6McV.js";import"./Text-CErt044E.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./TextArea-YrOzYBo5.js";import"./TextFieldBase-_ovyDT6c.js";import"./FieldDescription-2qU2oAnE.js";import"./useFieldComponent-BnDxVRXr.js";import"./TextField-tjbLvPcx.js";import"./FieldError-BIVQARwB.js";import"./Form-DTh0_D5U.js";import"./Group-BECEQ48t.js";import"./Input-9KD990Lp.js";import"./useTextField-wFMqJwOy.js";import"./useFormReset-3oD77Uyk.js";import"./useFormValidation-MbSolyNi.js";import"./useControlledHostValueProps-B6-BJ9eH.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";import"./LoadingSpinner-z9BQWCCX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DfMPCk5A.js";import"./ContextMenuSection-Bzcd8RVm.js";import"./Dialog-971pU4tV.js";import"./Collection-FfZcU2DX.js";import"./SelectionIndicator-DnZvOIyV.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./VisuallyHidden-BsENeWhO.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
