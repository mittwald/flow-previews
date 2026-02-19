import{j as r,r as f}from"./iframe-Cbm1tYQ5.js";import{M as o}from"./MarkdownEditor-BvLsLKGp.js";import{L as R}from"./Label-C1u7fixG.js";import{F as b}from"./FieldError-DdEKXl5v.js";import{B as z}from"./Button-Cqfz7zcL.js";import{S as x}from"./Section-B0QB89CB.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BBV66C2s.js";import"./CodeBlock-CnsLZtYB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bk3Pou9D.js";import"./IconWarning-HRESMERf.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./index-cwYx15Z_.js";import"./remote-CNywZcFz.js";import"./Tooltip-C2QRQqlv.js";import"./utils-CwSfACxU.js";import"./OverlayArrow-DLVTOKg_.js";import"./useFocus-DGTwh-gS.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./context-CpUEkiXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-2ds-u5nI.js";import"./useControlledState-CcdBsJdv.js";import"./useFocusable-DfxkJnS0.js";import"./react-children-utilities-DRyeSPLu.js";import"./ActionBatch-CjHdyiP4.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./browser-BO2LE4a1.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./dynamic-CgrPgLPo.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./Heading-DoywAf3I.js";import"./Heading-CJu_lfUD.js";import"./RSPContexts-BN50OY8k.js";import"./InlineCode-Bp8Ij51C.js";import"./Link-BAqQtX5j.js";import"./usePress-D-cWxohr.js";import"./Separator-D4Phbak1.js";import"./Separator-DziD0EOf.js";import"./CollectionBuilder-BRfzWkKh.js";import"./Text-K6yu7K7n.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./Text-CRfwxtsq.js";import"./TextArea-Bb_hkuEY.js";import"./useFieldComponent-BRiGBo1N.js";import"./useControlledHostValueProps-CPKej2US.js";import"./FieldDescription-Ct8S77_6.js";import"./TextField-qS-l0aOc.js";import"./FieldError-b__4rZn4.js";import"./Form-DE723K-l.js";import"./Group-BVQg3o8h.js";import"./Input-KBjiAAgX.js";import"./useTextField-DOevCIiu.js";import"./useFormReset-DovDq4jf.js";import"./useFormValidation-SL6QRRh_.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";import"./LoadingSpinner-CziFUZ0y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DMDpRFJa.js";import"./ContextMenuSection-BbEgK5mq.js";import"./Dialog-DOWWi4PD.js";import"./Collection-My4n8esd.js";import"./SelectionIndicator-oJF9tjaE.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
