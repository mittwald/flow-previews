import{j as r,r as f}from"./iframe-CTX0Bv2_.js";import{M as o}from"./MarkdownEditor-DPk8tSy_.js";import{L as R}from"./Label-Dhp6BO4i.js";import{F as b}from"./FieldError-BCaKsj_Z.js";import{B as z}from"./Button--JyduJMj.js";import{S as x}from"./Section-BB_XqpVc.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DKa8lbMn.js";import"./CodeBlock-BRH8FWt6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-XmTCAnOA.js";import"./IconWarning-nHMyX661.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./remote-Dp_KpE6s.js";import"./Tooltip-CJrV0EuQ.js";import"./utils-DEP6wxfF.js";import"./OverlayArrow-B_Rckldo.js";import"./useFocus-Brpf5vcF.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./context-BlMA_qTH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-jdOUMH5T.js";import"./useControlledState-BSzbNF-6.js";import"./useFocusable-C46UWCUq.js";import"./react-children-utilities-BSpjAS3Q.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./browser-NwcAgtgI.js";import"./getActionGroupSlot-CcrxUumb.js";import"./dynamic-izZr6sj3.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./Heading-Dk_R5Gok.js";import"./Heading-BWaAz6go.js";import"./RSPContexts-FayjYhqz.js";import"./InlineCode-DANgb06X.js";import"./Link-C4PXsJDi.js";import"./usePress-BBVfaVqb.js";import"./Separator-BxKwj8bk.js";import"./Separator-Bna16C5N.js";import"./CollectionBuilder-DIcncGvh.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./TextArea-DoXvfbc3.js";import"./useFieldComponent-mADlv6K1.js";import"./useControlledHostValueProps-Bd2ZZKcS.js";import"./FieldDescription-4xrer537.js";import"./TextField-Bl2_sgE7.js";import"./FieldError-DPNf_GCP.js";import"./Form-CEQjTe99.js";import"./Group-BOL-llIy.js";import"./Input-Bb-wn0Gj.js";import"./useTextField-NkWX01z0.js";import"./useFormReset-CFaexdLs.js";import"./useFormValidation-CLweFpah.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6E7IXzn.js";import"./ContextMenuSection-B5km2Fq1.js";import"./Dialog-B47KQ7WD.js";import"./Collection-C9AhhR6W.js";import"./SelectionIndicator-BIEwPYk3.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./VisuallyHidden-DBqpLolF.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
