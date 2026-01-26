import{j as r,r as f}from"./iframe-CBKKDtut.js";import{M as o}from"./MarkdownEditor-CI63aoyj.js";import{L as R}from"./Label-YKVXUmct.js";import{F as b}from"./FieldError-ncR-D_4-.js";import{B as z}from"./Button-B9OQWjLR.js";import{S as x}from"./Section-DXY5zwlF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BXLKOWWK.js";import"./CodeBlock-DJyd-flg.js";import"./clsx-B-dksMZM.js";import"./CopyButton-OEM5iiC1.js";import"./IconWarning-BGeLtjSH.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./index-fGZr3eAJ.js";import"./remote-d08GjPRF.js";import"./Tooltip-CP1LuBI5.js";import"./utils-CzD9rXMA.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useFocus-BrZp4zBY.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./context-Bvh_z46p.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-1Ujh64WW.js";import"./useFocusable-DQlHlYMC.js";import"./useFocusRing-CCYWTYc5.js";import"./react-children-utilities-BSsiC8bc.js";import"./Action-DoBIVRDz.js";import"./context-B4Ey35Kl.js";import"./useStatic-n8g6U0tI.js";import"./browser-C9q5kf03.js";import"./getActionGroupSlot-CKDi87pY.js";import"./dynamic-C3t3tmF9.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./Heading-i6OL6vOG.js";import"./Heading-BVbeBqwL.js";import"./RSPContexts-B9p0Af0m.js";import"./InlineCode-DmeGTcyv.js";import"./Link-BONjZ3IX.js";import"./usePress-CCG6AvGE.js";import"./Separator-Cr7Epsqr.js";import"./Separator-CntAjx1Z.js";import"./CollectionBuilder-BsNn1R8F.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./TextArea-BY40vw2z.js";import"./TextFieldBase-DxiF4zVu.js";import"./FieldDescription-BY78pjgj.js";import"./useFieldComponent-377eOR22.js";import"./TextField-B5o54xMd.js";import"./FieldError-6zsCD2mI.js";import"./Form-CoRvbdVN.js";import"./Group-CA1lCmka.js";import"./Input-DA2pnuWC.js";import"./useTextField-CZl6lYma.js";import"./useFormReset-tFiefpak.js";import"./useFormValidation-FH2NBgqd.js";import"./useControlledHostValueProps-BbK479M6.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DyYsKNHg.js";import"./ContextMenuSection-CIoY6k-y.js";import"./Dialog-DqG8ZP0V.js";import"./Collection-Ci7EvgUR.js";import"./SelectionIndicator-D8RCowii.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./VisuallyHidden-BTRh3ybS.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
