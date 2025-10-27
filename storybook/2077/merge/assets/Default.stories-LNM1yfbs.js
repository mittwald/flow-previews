import{j as r,r as h}from"./iframe-B0qqkRSc.js";import{M as e}from"./MarkdownEditor-BuAi2XtC.js";import{L as l}from"./Label-Bathhgam.js";import{F as g}from"./useFieldComponent-BdE163vq.js";import{B as f}from"./Button-DJYlHg31.js";import{S as x}from"./Section-Dra2DCa6.js";import"./index-nuYtCEEu.js";import"./Markdown-MRyAeaRj.js";import"./CodeBlock-Ccec8U_D.js";import"./clsx-B-dksMZM.js";import"./CopyButton-EXfeH7BC.js";import"./IconWarning-BPZvpYf1.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./Tooltip-DhknQABK.js";import"./ClearPropsContextView-D258LB2U.js";import"./ClearPropsContext-HA28kjj1.js";import"./utils-fD_u--Rs.js";import"./OverlayArrow-B0r4AZS0.js";import"./useFocus-D6s77d5g.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-sSRBc7PO.js";import"./context-D99v7Uqm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CB1SzgEG.js";import"./useFocusable-BBZGyB5D.js";import"./useFocusRing-6YYb42D4.js";import"./react-children-utilities-BymZuw_a.js";import"./Action-CH6Q1TZa.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./browser-B1sj-_-y.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./dynamic-nZoDMFyL.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./Heading-n9cps3Jv.js";import"./Heading-Db08qSfp.js";import"./RSPContexts-JwdHw2w4.js";import"./InlineCode-DX9Lvk_l.js";import"./Link-GNL1RaFR.js";import"./usePress-CRF7-NYn.js";import"./Separator-CN80ncec.js";import"./Separator-AYUu4xVa.js";import"./CollectionBuilder-CyiVnh3g.js";import"./Text-BrTaOrXE.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./TextArea-DCpuGQBN.js";import"./TextFieldBase-CBLAjS1_.js";import"./FieldDescription-CX2AXiNE.js";import"./TextField-OdvHxJmp.js";import"./Form-Dg4UU0-2.js";import"./Group-n_vUHkH-.js";import"./Input-C6zpuO0N.js";import"./useTextField-23Ik_eMK.js";import"./useFormReset-CSVsou9A.js";import"./useFormValidation-Vh8OxI1q.js";import"./ReactAriaControlledValueFix-DRAhRQZp.js";import"./useManagedValue-pMeCXi1s.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BhtZJAGg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBrpY8Iv.js";import"./ContextMenuSection-DodlfDvY.js";import"./Dialog-Cf8VWc4Y.js";import"./Collection-BezXrWUC.js";import"./SelectionIndicator-BJvhD4qq.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./VisuallyHidden-CQaNZ-oY.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Hr as __namedExportsOrder,Ar as default};
