import{j as r,r as f}from"./iframe-CDsKaBRg.js";import{M as o}from"./MarkdownEditor-BlSlh8uS.js";import{L as R}from"./Label-D5EyKl2G.js";import{F as b}from"./FieldError-CR7kl2wA.js";import{B as z}from"./Button-DrVGXfuQ.js";import{S as x}from"./Section-COUCeP8U.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-JcYDBqNc.js";import"./CodeBlock-BzujihP7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BMymGVdq.js";import"./IconWarning-BO7Rp0Xm.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./remote-CceIEVln.js";import"./Tooltip-B-Kh4MNQ.js";import"./utils-D_LVRUjq.js";import"./OverlayArrow-DUsbU_k4.js";import"./useFocus-DLB8Ejx4.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./context-BPMj9VV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BBPUeOqt.js";import"./useControlledState-daUq4f0n.js";import"./useFocusable-C6i2fSTk.js";import"./react-children-utilities-Dw_VGQqn.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./browser-CeRuCCb_.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./dynamic-CtOpUuGK.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./RSPContexts-B8A9jPpa.js";import"./InlineCode-ztpIApth.js";import"./Link-CAHjs5Hw.js";import"./usePress-Dan0bPtD.js";import"./Separator-BK_2iNtD.js";import"./Separator-DOC4rouP.js";import"./CollectionBuilder-CUH6PT6u.js";import"./Text-BC05_GH2.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./TextArea-B7rAVjse.js";import"./useFieldComponent-CC8SHRwT.js";import"./useControlledHostValueProps-9pbYA7lC.js";import"./FieldDescription-CzKLx4Mc.js";import"./TextField-CjTwPU2X.js";import"./FieldError-CoNTUoG6.js";import"./Form-CsNQY4H6.js";import"./Group-B8kqqSOi.js";import"./Input-BDN5Bs6G.js";import"./useTextField-C1uNYa88.js";import"./useFormReset-CxPQXG_K.js";import"./useFormValidation-B4cT2hyf.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";import"./LoadingSpinner-COR3vr_l.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BshsCdLp.js";import"./ContextMenuSection-BtR3HXLs.js";import"./Dialog-C4SGct0D.js";import"./Collection-C8L6dRd5.js";import"./SelectionIndicator-Dg52EWqk.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
