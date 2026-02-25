import{j as r,r as f}from"./iframe-PZSwL5UI.js";import{M as o}from"./MarkdownEditor-CnmYvEgo.js";import{L as R}from"./Label-DHad4C3T.js";import{F as b}from"./FieldError-DI2vGfZA.js";import{B as z}from"./Button-Dx8ytIXV.js";import{S as x}from"./Section-Ly32yzfQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Da7u3u5Y.js";import"./CodeBlock-BAwxBjrD.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B3a5eF8F.js";import"./IconWarning-Brl3hUMe.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./remote-mdYu2fN6.js";import"./Tooltip-BciKW2TA.js";import"./utils-lOj21ZD_.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useFocus-BI7y428A.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./context-Ff7U_4vz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C-2IcVPM.js";import"./useControlledState-DIXXzqms.js";import"./useFocusable-B4WRTgkS.js";import"./react-children-utilities-CNGDxLGo.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./browser-Ds1bEyov.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./dynamic-DDVyub9n.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./InlineCode-lXY4CoYg.js";import"./Link-sMsqPXw3.js";import"./usePress-B1ZCcdw8.js";import"./Separator-BNESHi7w.js";import"./Separator-DApvHFcW.js";import"./CollectionBuilder-o3rgBYyM.js";import"./Text-CkpR2hqn.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./TextArea-DVPP5hpJ.js";import"./useFieldComponent-BUmkKSsK.js";import"./useControlledHostValueProps-Ddkm3ljY.js";import"./FieldDescription-D6wLWptA.js";import"./TextField-9pTBhuAO.js";import"./FieldError-mE8Rrcl-.js";import"./Form-BblXnLIP.js";import"./Group-DXdh9woI.js";import"./Input-uYjA58vR.js";import"./useTextField-CiLx_NKB.js";import"./useFormReset-DtrcblTn.js";import"./useFormValidation-BFZ87yhB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";import"./LoadingSpinner-kHlSwNnH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQZ9yYEV.js";import"./ContextMenuSection-B4TWz5w1.js";import"./Dialog-BxivZnjn.js";import"./Collection-D6QzoLja.js";import"./SelectionIndicator-CKNEQhdD.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
